import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function SubscriptionPlans() {
  const [selectedBilling, setSelectedBilling] = useState('Monthly');
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card details submitted:', cardDetails);
    setShowModal(false);
    setCardDetails({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      name: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6 border border-gray-200 rounded-xl py-5 px-3">
          Choose a plan for after 30-days free trial
        </h2>
        
        {/* Billing Toggle */}
        <div className="flex mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedBilling('Monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedBilling === 'Monthly'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedBilling('Annually')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedBilling === 'Annually'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annually (save 67%)
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Regular Plan */}
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Regular</h3>
              <div className="flex items-center text-blue-600">
                <Check className="w-4 h-4 mr-1" />
                <span className="text-sm">Auto Pay</span>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold text-gray-900">$99.99</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-sm text-gray-600">Price for 1-60 unit</p>
          </div>

          {/* Platinum Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">Platinum</h3>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold text-gray-900">$129.99</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-sm text-gray-600">Price for 1-60 unit</p>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold text-gray-900">$199.99</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-sm text-gray-600">Price for 1-60 unit</p>
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Payment option</h3>
            <button 
              onClick={() => setShowModal(true)}
              className="text-blue-600 text-sm hover:text-blue-700"
            >
              Add new card
            </button>
          </div>

          <div className="space-y-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                
                  <div className="flex items-center">
                    <div className="w-6 h-4 bg-blue-600 rounded-sm mr-3 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">visa</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Alex Jones(Amex card)
                      </div>
                      <div className="text-sm text-gray-500">
                        ••••••••0605
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPayment(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedPayment === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add New Card Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-xl w-full">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-medium text-gray-900">Add New Card</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                       <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              </div>

       

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}