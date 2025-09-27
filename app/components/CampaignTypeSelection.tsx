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
        <path d="M20 6h-2l-2-4H8L6 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    )
  },
  {
    id: 'paid',
    title: 'Paid Promotion',
    description: 'Pay creators for guaranteed content and deliverables.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
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
