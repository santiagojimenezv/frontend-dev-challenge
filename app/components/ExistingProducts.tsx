'use client';

import { useState } from 'react';

interface ExistingProductsProps {
  onNext: () => void;
  onBack: () => void;
  onNewProduct: () => void;
}

export default function ExistingProducts({ onNext, onBack, onNewProduct }: ExistingProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock product data
  const products = [
    { id: 1, name: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: 2, name: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: 3, name: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: 4, name: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: 5, name: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: 6, name: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: 7, name: 'Yeti Cooler', date: 'Created 8/25/25' },
  ];

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Add Campaign Information</h2>
        <p className="text-gray-600 mb-8">Upload a file or paste a link — we'll pull the product and campaign details for you.</p>

        {/* Tab Selection */}
        <div className="flex mb-8">
          <button 
            onClick={onNewProduct}
            className="px-6 py-3 rounded-l-lg font-medium bg-gray-200 text-gray-600 hover:bg-gray-300"
          >
            New Product
          </button>
          <button className="px-6 py-3 rounded-r-lg font-medium bg-gray-800 text-white">
            Existing Products
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Q Summer Yeti Cooler..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            />
          </div>
        </div>

        {/* Product List */}
        <div className="mb-8">
          <div className="space-y-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <span className="font-medium text-gray-900">{product.name}</span>
                <span className="text-sm text-gray-600">{product.date}</span>
              </div>
            ))}
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
