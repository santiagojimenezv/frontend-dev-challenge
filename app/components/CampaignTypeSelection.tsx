'use client';

import { useState } from 'react';

interface CampaignType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CampaignTypeSelectionProps {
  onNext: (type: string) => void;
}

const campaignTypes: CampaignType[] = [
  {
    id: 'seeding',
    title: 'Seeding/Gifting',
    description: 'Send free products to creators in exchange for organic content.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    id: 'paid',
    title: 'Paid Promotion',
    description: 'Pay creators for guaranteed content and deliverables.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  {
    id: 'other',
    title: 'Other',
    description: 'For all other types of creator collaboration campaigns.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  }
];

export default function CampaignTypeSelection({ onNext }: CampaignTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleNext = () => {
    if (selectedType) {
      onNext(selectedType);
    }
  };

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Choose Campaign Type</h2>
        <p className="text-gray-600 mb-8">Select the best one that fits your goal.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {campaignTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                selectedType === type.id
                  ? 'border-gray-800 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-gray-600 mb-4">{type.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!selectedType}
            className={`px-6 py-3 rounded-lg font-medium ${
              selectedType
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
