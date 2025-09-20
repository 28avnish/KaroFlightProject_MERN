import React, { useState, useEffect } from 'react';
import {
  FaEye,
  FaMousePointer,
  FaTicketAlt,
  FaDollarSign,
  FaChartLine,
  FaFilter,
  FaDownload,
  FaArrowUp,
  FaArrowDown,
  FaEquals,
  FaSync,
} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const OfferAnalytics = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    to: new Date().toISOString().split('T')[0]
  });
  const [eventFilter, setEventFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [refreshing, setRefreshing] = useState(false);

  // Mock data - replace with actual API calls
  const [offers] = useState([
    { id: '1', title: 'Summer Sale', type: 'percentage', value: '25%', active: true },
    { id: '2', title: 'Welcome Coupon', type: 'coupon', value: '#WELCOME20', active: true },
    { id: '3', title: 'Winter Special', type: 'percentage', value: '30%', active: false }
  ]);

  const [dashboardStats, setDashboardStats] = useState({
    totalImpressions: 45678,
    totalClicks: 8934,
    totalRedemptions: 1247,
    totalValueCaptured: 34580.50,
    currency: 'USD',
    clickThroughRate: 19.6,
    conversionRate: 14.0
  });

  const [offerDetails, setOfferDetails] = useState({
    impressions: 12450,
    clicks: 2340,
    redemptions: 340,
    valueCaptured: 8500.00,
    clickThroughRate: 18.8,
    conversionRate: 14.5,
    topUsers: [
      { id: '1', name: 'John Doe', email: 'john@example.com', redemptions: 3, value: 450 },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', redemptions: 2, value: 300 },
      { id: '3', name: 'Mike Johnson', email: 'mike@example.com', redemptions: 2, value: 280 }
    ]
  });

  const [chartData] = useState({
    daily: [
      { date: '2024-09-15', impressions: 450, clicks: 89, redemptions: 12 },
      { date: '2024-09-16', impressions: 520, clicks: 95, redemptions: 15 },
      { date: '2024-09-17', impressions: 380, clicks: 72, redemptions: 8 },
      { date: '2024-09-18', impressions: 610, clicks: 118, redemptions: 18 },
      { date: '2024-09-19', impressions: 490, clicks: 87, redemptions: 14 },
      { date: '2024-09-20', impressions: 560, clicks: 102, redemptions: 16 }
    ],
    devices: [
      { name: 'Mobile', value: 65, count: 8073 },
      { name: 'Desktop', value: 28, count: 3481 },
      { name: 'Tablet', value: 7, count: 871 }
    ],
    geographic: [
      { country: 'United States', users: 4500, redemptions: 150 },
      { country: 'Canada', users: 2100, redemptions: 89 },
      { country: 'United Kingdom', users: 1800, redemptions: 67 },
      { country: 'Australia', users: 900, redemptions: 34 }
    ]
  });

  const [originalUsageHistory] = useState([
    {
      id: '1',
      eventType: 'impression',
      userName: 'Anonymous',
      timestamp: '2024-09-20T10:30:00Z',
      ip: '192.168.1.1',
      userAgent: 'Mozilla/5.0...',
      meta: { source: 'homepage' }
    },
    {
      id: '2',
      eventType: 'click',
      userName: 'John Doe',
      timestamp: '2024-09-20T10:32:00Z',
      ip: '192.168.1.2',
      userAgent: 'Mozilla/5.0...',
      meta: { source: 'email' }
    },
    {
      id: '3',
      eventType: 'redeem',
      userName: 'John Doe',
      timestamp: '2024-09-20T10:35:00Z',
      ip: '192.168.1.2',
      valueCaptured: 150.00,
      currency: 'USD',
      meta: { bookingId: 'BK123456' }
    },
    {
      id: '4',
      eventType: 'impression',
      userName: 'Jane Smith',
      timestamp: '2024-09-19T15:20:00Z',
      ip: '192.168.1.3',
      userAgent: 'Mozilla/5.0...',
      meta: { source: 'social' }
    },
    {
      id: '5',
      eventType: 'click',
      userName: 'Mike Johnson',
      timestamp: '2024-09-19T16:45:00Z',
      ip: '192.168.1.4',
      userAgent: 'Mozilla/5.0...',
      meta: { source: 'direct' }
    }
  ]);

  const [filteredUsageHistory, setFilteredUsageHistory] = useState([]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Filter and sort usage history
  useEffect(() => {
    let filtered = [...originalUsageHistory];

    // Apply event filter
    if (eventFilter !== 'all') {
      filtered = filtered.filter(event => event.eventType === eventFilter);
    }

    // Apply date filter
    const fromDate = new Date(dateRange.from);
    const toDate = new Date(dateRange.to);
    filtered = filtered.filter(event => {
      const eventDate = new Date(event.timestamp);
      return eventDate >= fromDate && eventDate <= toDate;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.timestamp);
          bValue = new Date(b.timestamp);
          break;
        case 'user':
          aValue = a.userName.toLowerCase();
          bValue = b.userName.toLowerCase();
          break;
        case 'type':
          aValue = a.eventType;
          bValue = b.eventType;
          break;
        default:
          aValue = new Date(a.timestamp);
          bValue = new Date(b.timestamp);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

    setFilteredUsageHistory(filtered);
  }, [eventFilter, dateRange, sortBy, sortOrder, originalUsageHistory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsageHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredUsageHistory.slice(startIndex, endIndex);

  // Utility functions
  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <FaArrowUp className="text-green-500" />;
    if (change < 0) return <FaArrowDown className="text-red-500" />;
    return <FaEquals className="text-gray-500" />;
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'impression': return <FaEye className="text-blue-500" />;
      case 'click': return <FaMousePointer className="text-green-500" />;
      case 'redeem': return <FaTicketAlt className="text-orange-500" />;
      default: return <FaChartLine />;
    }
  };

  // Button handlers
  const handleExportReport = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create CSV content
      const headers = ['Date', 'Offer', 'Event Type', 'User', 'Value', 'IP'];
      const csvContent = [
        headers.join(','),
        ...filteredUsageHistory.map(event => [
          new Date(event.timestamp).toLocaleDateString(),
          selectedOffer?.title || 'All Offers',
          event.eventType,
          event.userName,
          event.valueCaptured || '0',
          event.ip
        ].join(','))
      ].join('\n');

      // Download CSV
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `offer_analytics_${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshData = async () => {
    setRefreshing(true);
    try {
      // Simulate API refresh
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update stats with small random variations
      setDashboardStats(prev => ({
        ...prev,
        totalImpressions: prev.totalImpressions + Math.floor(Math.random() * 100),
        totalClicks: prev.totalClicks + Math.floor(Math.random() * 20),
        totalRedemptions: prev.totalRedemptions + Math.floor(Math.random() * 5)
      }));
    } catch (error) {
      console.error('Refresh failed:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleFilterApply = () => {
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const resetFilters = () => {
    setSelectedOffer(null);
    setEventFilter('all');
    setDateRange({
      from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      to: new Date().toISOString().split('T')[0]
    });
    setCurrentPage(1);
  };

  const StatCard = ({ title, value, subtitle, icon, color = 'blue', change }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          {change !== undefined && (
            <div className="flex items-center mt-2 text-sm">
              {getChangeIcon(change)}
              <span className={`ml-1 ${change > 0 ? 'text-green-600' : change < 0 ? 'text-red-600' : 'text-gray-500'}`}>
                {Math.abs(change)}% vs last period
              </span>
            </div>
          )}
        </div>
        <div className={`text-4xl text-${color}-500`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Offer Analytics</h1>
              <p className="text-gray-600">Track performance and usage of your offers</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleRefreshData}
                disabled={refreshing}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaSync className={refreshing ? 'animate-spin' : ''} />
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </button>
              <button 
                onClick={handleExportReport}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Exporting...
                  </>
                ) : (
                  <>
                    <FaDownload />
                    Export Report
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            <select 
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={selectedOffer?.id || ''}
              onChange={(e) => {
                setSelectedOffer(offers.find(o => o.id === e.target.value) || null);
                handleFilterApply();
              }}
            >
              <option value="">All Offers</option>
              {offers.map(offer => (
                <option key={offer.id} value={offer.id}>{offer.title}</option>
              ))}
            </select>

            <select 
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={eventFilter}
              onChange={(e) => {
                setEventFilter(e.target.value);
                handleFilterApply();
              }}
            >
              <option value="all">All Events</option>
              <option value="impression">Impressions</option>
              <option value="click">Clicks</option>
              <option value="redeem">Redemptions</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={dateRange.from}
                onChange={(e) => {
                  setDateRange({...dateRange, from: e.target.value});
                  handleFilterApply();
                }}
              />
              <span className="text-gray-500">to</span>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={dateRange.to}
                onChange={(e) => {
                  setDateRange({...dateRange, to: e.target.value});
                  handleFilterApply();
                }}
              />
            </div>

            <button
              onClick={resetFilters}
              className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Impressions"
            value={formatNumber(dashboardStats.totalImpressions)}
            icon={<FaEye />}
            color="blue"
            change={12.5}
          />
          <StatCard 
            title="Total Clicks"
            value={formatNumber(dashboardStats.totalClicks)}
            subtitle={`${dashboardStats.clickThroughRate}% CTR`}
            icon={<FaMousePointer />}
            color="green"
            change={8.3}
          />
          <StatCard 
            title="Redemptions"
            value={formatNumber(dashboardStats.totalRedemptions)}
            subtitle={`${dashboardStats.conversionRate}% conversion`}
            icon={<FaTicketAlt />}
            color="orange"
            change={-2.1}
          />
          <StatCard 
            title="Value Captured"
            value={formatCurrency(dashboardStats.totalValueCaptured)}
            icon={<FaDollarSign />}
            color="purple"
            change={15.7}
          />
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'performance', 'users', 'history'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.daily}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="impressions" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="clicks" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="redemptions" stroke="#F59E0B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Device Breakdown */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Device Usage</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData.devices}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.devices.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-8">
            {/* Geographic Performance */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Geographic Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData.geographic}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#3B82F6" name="Users" />
                  <Bar dataKey="redemptions" fill="#10B981" name="Redemptions" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Top Performing Offers */}
            {!selectedOffer && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Offer Performance Comparison</h3>
                  <div className="flex gap-2">
                    <select 
                      className="px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleSortChange(e.target.value)}
                      value={sortBy}
                    >
                      <option value="impressions">Sort by Impressions</option>
                      <option value="clicks">Sort by Clicks</option>
                      <option value="redemptions">Sort by Redemptions</option>
                      <option value="value">Sort by Value</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Offer
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSortChange('impressions')}
                        >
                          Impressions {sortBy === 'impressions' && (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSortChange('clicks')}
                        >
                          Clicks {sortBy === 'clicks' && (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CTR
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSortChange('redemptions')}
                        >
                          Redemptions {sortBy === 'redemptions' && (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Conversion
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSortChange('value')}
                        >
                          Value {sortBy === 'value' && (sortOrder === 'asc' ? '↑' : '↓')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {offers.map((offer, index) => (
                        <tr key={offer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{offer.title}</div>
                                <div className="text-sm text-gray-500">{offer.value}</div>
                              </div>
                              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                                offer.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {offer.active ? 'Active' : 'Inactive'}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatNumber(12450 - index * 2000)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatNumber(2340 - index * 400)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {(18.8 - index * 2).toFixed(1)}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatNumber(340 - index * 60)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {(14.5 - index * 1.5).toFixed(1)}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(8500 - index * 1500)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Top Users</h3>
              <select 
                className="px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="redemptions">Sort by Redemptions</option>
                <option value="value">Sort by Value</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Redemptions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Activity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {offerDetails.topUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.redemptions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatCurrency(user.value)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2 hours ago
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Usage History</h3>
              <div className="flex gap-2">
                <select 
                  className="px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="date">Sort by Date</option>
                  <option value="user">Sort by User</option>
                  <option value="type">Sort by Type</option>
                </select>
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {currentPageData.length > 0 ? (
                currentPageData.map((event) => (
                  <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getEventTypeIcon(event.eventType)}
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                            {event.eventType === 'redeem' && event.valueCaptured && (
                              <span className="ml-2 text-green-600 font-semibold">
                                {formatCurrency(event.valueCaptured, event.currency)}
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-gray-500">
                            {event.userName} • {new Date(event.timestamp).toLocaleString()}
                          </p>
                          {event.meta && Object.keys(event.meta).length > 0 && (
                            <p className="text-xs text-gray-400 mt-1">
                              {Object.entries(event.meta).map(([key, value]) => (
                                <span key={key} className="mr-4">{key}: {value}</span>
                              ))}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {event.ip}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FaFilter className="mx-auto text-4xl mb-4" />
                  <p>No events found matching your filters</p>
                  <button
                    onClick={resetFilters}
                    className="mt-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Enhanced Pagination */}
            {filteredUsageHistory.length > 0 && (
              <div className="flex justify-between items-center mt-6 pt-4 border-t">
                <div className="text-sm text-gray-500">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredUsageHistory.length)} of {filteredUsageHistory.length} events
                  {eventFilter !== 'all' && (
                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {eventFilter} events
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-1 text-sm rounded ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferAnalytics;