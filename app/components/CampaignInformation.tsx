'use client';

import { useState } from 'react';

interface CampaignInformationProps {
  onNext: () => void;
  onBack: () => void;
  onExistingProducts: () => void;
  onNewProduct: () => void;
}

export default function CampaignInformation({ onNext, onBack, onExistingProducts, onNewProduct }: CampaignInformationProps) {
  const [activeTab, setActiveTab] = useState<'new' | 'existing'>('new');
  const [productUrl, setProductUrl] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file drop logic here
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file input logic here
  };

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Add Campaign Information</h2>
        <p className="text-gray-600 mb-8">Upload a file or paste a link — we'll pull the product and campaign details for you.</p>

        {/* Tab Selection */}
        <div className="flex mb-8">
          <button
            onClick={() => {
              setActiveTab('new');
              onNewProduct();
            }}
            className={`px-6 py-3 rounded-l-lg font-medium ${
              activeTab === 'new'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            New Product
          </button>
          <button
            onClick={() => {
              setActiveTab('existing');
              onExistingProducts();
            }}
            className={`px-6 py-3 rounded-r-lg font-medium ${
              activeTab === 'existing'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Existing Products
          </button>
        </div>

        {/* Product URL Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product URL (optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </div>
              <input
                type="url"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                placeholder="Paste link"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              />
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            File Upload
          </label>
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragOver ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <p className="text-lg font-medium text-gray-900 mb-2">Drop in your product/campaign info</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Click to upload
              </button>
              <p className="text-sm text-gray-500 mt-2">PDF/CSV</p>
            </div>
            <input
              type="file"
              accept=".pdf,.csv"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700"
          >
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}