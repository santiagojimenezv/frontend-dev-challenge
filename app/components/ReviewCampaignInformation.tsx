'use client';

import { useState } from 'react';

interface ReviewCampaignInformationProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ReviewCampaignInformation({ onNext, onBack }: ReviewCampaignInformationProps) {
  const [productName, setProductName] = useState('YETI GlacierX 55');
  const [productDescription, setProductDescription] = useState(`The YETI Tundra 45 Cooler is a premium hard-sided cooler designed for serious outdoor enthusiasts. Built with military-grade construction and PermaFrost™ insulation, it delivers exceptional ice retention and durability. The cooler features a bear-proof certification, making it ideal for camping, fishing, and outdoor adventures. With a capacity to hold up to 54 cans, it's perfect for group outings while maintaining ice for days.`);

  const [campaignRules, setCampaignRules] = useState([
    {
      id: 1,
      text: "This campaign is strictly for gifting; no monetary compensation will be provided. If asked about payment, inform the influencer that this opportunity is for gifting only and paid promotions are not being considered at this time."
    },
    {
      id: 2,
      text: "Only one New Yeti Cooler will be sent per influencer."
    },
    {
      id: 3,
      text: "If the influencer provides their full postal address, do not repeat the address back in your response."
    },
    {
      id: 4,
      text: "Confirm the influencer's interest before requesting their shipping details."
    }
  ]);

  const handleEditRule = (id: number) => {
    // Handle edit rule logic
    console.log('Edit rule:', id);
  };

  const handleDeleteRule = (id: number) => {
    setCampaignRules(campaignRules.filter(rule => rule.id !== id));
  };

  const handleAddRule = () => {
    const newRule = {
      id: Date.now(),
      text: "New campaign rule..."
    };
    setCampaignRules([...campaignRules, newRule]);
  };

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Review Campaign Information</h2>
        <p className="text-gray-600 mb-8">We've pulled product info and campaign rules from your files. Review and edit if needed</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Product Information */}
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-900"
              />
            </div>
          </div>

          {/* Right Column - Campaign Rules */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">Campaign Rules</label>
              <button className="flex items-center space-x-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">Regenerate with AI</span>
              </button>
            </div>

            <div className="space-y-3">
              {campaignRules.map((rule, index) => (
                <div key={rule.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                    {index + 1}
                  </span>
                  <p className="flex-1 text-sm text-gray-700">{rule.text}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditRule(rule.id)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDeleteRule(rule.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddRule}
              className="mt-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Add Rule
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
