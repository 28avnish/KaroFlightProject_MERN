import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const RefundIntegration = () => {
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState('razorpay');
  const [formData, setFormData] = useState({
    paymentId: '',
    amount: '',
    reason: '',
    cancellationId: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  // Initialize Stripe
//   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

//   useEffect(() => {
//     fetchRecentRefunds();
//   }, []);

  const fetchRecentRefunds = async () => {
    try {
      const response = await axios.get('/api/refunds/history');
      setRefunds(response.data);
    } catch (error) {
      console.error('Error fetching refund history:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRefund = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await axios.post('/api/refunds/initiate', {
        ...formData,
        gateway: selectedPaymentGateway
      });

      if (response.data.success) {
        setMessage({ 
          type: 'success', 
          text: `Refund initiated successfully! Refund ID: ${response.data.refundId}` 
        });
        setFormData({
          paymentId: '',
          amount: '',
          reason: '',
          cancellationId: ''
        });
        fetchRecentRefunds();
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Failed to process refund' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFullRefund = async (paymentId, amount) => {
    if (!window.confirm('Are you sure you want to process a full refund?')) return;

    setLoading(true);
    try {
      const response = await axios.post('/api/refunds/full', {
        paymentId,
        amount,
        gateway: selectedPaymentGateway,
        reason: 'Full refund requested'
      });

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Full refund processed successfully!' });
        fetchRecentRefunds();
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Full refund failed' });
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: 'bg-yellow-100 text-yellow-800',
      processed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      requires_action: 'bg-blue-100 text-blue-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const formatCurrency = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency
    }).format(amount / 100); // Convert from paise to rupees
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Payment Refund Management
        </h1>
        <p className="text-gray-600">
          Process refunds through Razorpay or Stripe integration
        </p>
      </div>

      {/* Gateway Selection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Payment Gateway</h2>
        <div className="flex space-x-4">
          {['razorpay', 'stripe'].map((gateway) => (
            <button
              key={gateway}
              onClick={() => setSelectedPaymentGateway(gateway)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedPaymentGateway === gateway
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {gateway.charAt(0).toUpperCase() + gateway.slice(1)}
            </button>
          ))}
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            Selected: <strong>{selectedPaymentGateway.toUpperCase()}</strong>
          </p>
        </div>
      </div>

      {/* Message Display */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Refund Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Initiate Refund</h2>
          <form onSubmit={handleRefund} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment ID *
              </label>
              <input
                type="text"
                value={formData.paymentId}
                onChange={(e) => handleInputChange('paymentId', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="pay_123 or pi_123"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cancellation ID *
              </label>
              <input
                type="text"
                value={formData.cancellationId}
                onChange={(e) => handleInputChange('cancellationId', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="can_123"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (₹) *
              </label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
                min="1"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Refund *
              </label>
              <select
                value={formData.reason}
                onChange={(e) => handleInputChange('reason', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a reason</option>
                <option value="customer_request">Customer Request</option>
                <option value="duplicate_charge">Duplicate Charge</option>
                <option value="fraudulent">Fraudulent Transaction</option>
                <option value="product_unsatisfactory">Product Unsatisfactory</option>
                <option value="order_cancelled">Order Cancelled</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              {loading ? 'Processing...' : `Process Refund via ${selectedPaymentGateway.toUpperCase()}`}
            </button>
          </form>
        </div>

        {/* Recent Refunds */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Refunds</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gateway</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {refunds.slice(0, 5).map((refund) => (
                  <tr key={refund.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{refund.id.slice(-8)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {formatCurrency(refund.amount, refund.currency)}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {getStatusBadge(refund.status)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 uppercase">
                      {refund.gateway}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {formatDate(refund.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {refunds.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No refunds processed yet
            </div>
          )}
        </div>
      </div>

      {/* API Status */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">API Connection Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Razorpay</span>
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <p className="text-sm text-gray-600">Connected to Razorpay API</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Stripe</span>
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <p className="text-sm text-gray-600">Connected to Stripe API</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => fetchRecentRefunds()}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Refresh List
          </button>
          <button
            onClick={() => setSelectedPaymentGateway('razorpay')}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          >
            Switch to Razorpay
          </button>
          <button
            onClick={() => setSelectedPaymentGateway('stripe')}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
          >
            Switch to Stripe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundIntegration;