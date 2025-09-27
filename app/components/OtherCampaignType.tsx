'use client';

import { useState } from 'react';

interface OtherCampaignTypeProps {
  onNext: (goal: string) => void;
  onBack: () => void;
}

export default function OtherCampaignType({ onNext, onBack }: OtherCampaignTypeProps) {
  const [goal, setGoal] = useState('');

  const handleNext = () => {
    if (goal.trim()) {
      onNext(goal);
    }
  };

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Campaign Type</h2>
        <p className="text-gray-600 mb-8">Select the best one that fits your goal.</p>

        {/* Selected "Other" option */}
        <div className="p-6 border-2 border-gray-800 bg-gray-50 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Other</h3>
          </div>
          <p className="text-sm text-gray-600">For all other types of creator collaboration campaigns.</p>
        </div>

        {/* Goal input */}
        <div className="mb-8">
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Tell us what your goal is for this campaign..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!goal.trim()}
            className={`px-6 py-3 rounded-lg font-medium ${
              goal.trim()
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
