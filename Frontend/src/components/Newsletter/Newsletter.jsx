import React, { useState } from 'react';
import axios from 'axios';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

//   // Mailchimp API configuration (these would typically be environment variables)
//   const MAILCHIMP_API_KEY = process.env.REACT_APP_MAILCHIMP_API_KEY;
//   const MAILCHIMP_SERVER_PREFIX = process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX;
//   const MAILCHIMP_AUDIENCE_ID = process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscriptionStatus(null);
    setErrorMessage('');

    try {
      // In a real implementation, you would typically call your own backend API
      // which then communicates with Mailchimp for security reasons
      
      // This is a mock implementation - replace with actual API call
      // const response = await axios.post(
      //   `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      //   {
      //     email_address: email,
      //     status: 'subscribed',
      //     merge_fields: {
      //       FNAME: firstName
      //     }
      //   },
      //   {
      //     headers: {
      //       Authorization: `apikey ${MAILCHIMP_API_KEY}`,
      //       'Content-Type': 'application/json'
      //     }
      //   }
      // );

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful subscription
      setSubscriptionStatus('success');
      setEmail('');
      setFirstName('');
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionStatus('error');
      
      // Handle different error scenarios
      if (error.response && error.response.status === 400) {
        setErrorMessage('This email is already subscribed to our newsletter.');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Travel Deals</h1>
          <p className="text-lg text-gray-600">
            Subscribe to our newsletter for exclusive flight and hotel deals, travel tips, and destination guides.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800">Newsletter Subscription</h2>
              <p className="text-gray-600 mt-2">Get the best travel offers directly to your inbox</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to receive travel deals, promotions, and updates from TravelEase. I can unsubscribe at any time.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                'Subscribe Now'
              )}
            </button>
          </form>

          {subscriptionStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Successfully Subscribed!</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Thank you for subscribing to our newsletter. You'll receive a confirmation email shortly.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {subscriptionStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Subscription Failed</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{errorMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900">Exclusive Deals</h4>
              <p className="text-sm text-gray-600 mt-2">Special discounts on flights and hotels only for subscribers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900">Destination Guides</h4>
              <p className="text-sm text-gray-600 mt-2">Expert travel tips and hidden gems for your next vacation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900">Travel Security</h4>
              <p className="text-sm text-gray-600 mt-2">Important updates and safety information for travelers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;