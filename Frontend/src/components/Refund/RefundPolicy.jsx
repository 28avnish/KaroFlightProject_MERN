import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState('general');

  const policySections = {
    general: {
      title: 'General Refund Policy',
      content: `Our refund policy is designed to be fair and transparent. Refunds are processed based on the timing of your cancellation request and the type of service booked. Generally, refunds are issued to the original payment method within 7-10 business days after approval.`
    },
    timelines: {
      title: 'Cancellation Timelines',
      content: `• 48+ hours before departure: 80% refund
• 24-48 hours before departure: 50% refund
• Less than 24 hours before departure: No refund
• Special events and peak season bookings may have different cancellation policies.`
    },
    nonRefundable: {
      title: 'Non-Refundable Items',
      content: `• Processing fees and service charges
• Insurance premiums (once coverage has started)
• Special handling fees
• Gift card purchases
• Bookings marked as "non-refundable" at time of purchase`
    },
    processing: {
      title: 'Refund Processing',
      content: `Once your refund is approved, it will be processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your bank or payment provider. Credit card refunds typically take 5-10 business days to reflect on your statement.`
    }
  };

  const faqs = [
    {
      question: 'How long does it take to receive my refund?',
      answer: 'Refunds are typically processed within 7-10 business days after approval. The exact timing depends on your payment method and financial institution.'
    },
    {
      question: 'Can I get a refund if I cancel due to illness?',
      answer: 'We recommend purchasing travel insurance for such situations. Without insurance, our standard cancellation policy applies.'
    },
    {
      question: 'What if my flight is cancelled by the airline?',
      answer: 'If the airline cancels your flight, you are entitled to a full refund according to airline policies and regulations.'
    },
    {
      question: 'Are there any cancellation fees?',
      answer: 'Yes, cancellation fees apply based on how close to the departure date you cancel. See our cancellation timelines for details.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-lg text-gray-600">
          Understand our policies for cancellations and refunds
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {Object.keys(policySections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
              activeSection === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {policySections[key].title}
          </button>
        ))}
      </div>

      {/* Active Section Content */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {policySections[activeSection].title}
        </h2>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {policySections[activeSection].content}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Need Help with a Refund?
        </h3>
        <p className="text-gray-700 mb-4">
          Contact our customer support team for assistance with refund requests or questions about our policy.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700">support@tripjack.com</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-700">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <div className='flex items-center justify-center bg-red-500 hover:bg-red-700 text-white p-2 rounded-full text-xl'>
        <Link to='/refund-calculator'>Refund Calculator</Link>
      </div>
      <div className='flex items-center justify-center bg-red-500 hover:bg-red-700 text-white p-2 rounded-full text-xl'>
        <Link to='/hotel-booking'>Hotel Booking</Link>
      </div>
      </div>

      {/* Policy Update Notice */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Last updated: January 15, 2024. This policy is subject to change without notice.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;