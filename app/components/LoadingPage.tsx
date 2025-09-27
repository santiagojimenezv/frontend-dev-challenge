'use client';

import { useEffect } from 'react';

interface LoadingPageProps {
  onComplete: () => void;
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="gradient-border">
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-10">
          {/* Loading Animation */}
          <div className="flex flex-col items-center space-y-4">
            {/* Spinning Circle with Gradient */}
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin">
                <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-orange-500 rounded-full"></div>
              </div>
              {/* Icon in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center">
              <p className="text-lg font-medium bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Gathering your campaign information
              </p>
              {/* Pulsing Dots */}
              <div className="flex justify-center space-x-1 mt-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Content (blurred) */}
        <div className="opacity-30">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Add Campaign Information</h2>
          <p className="text-gray-600 mb-8">Upload your product images or add a product URL.</p>

          {/* Tab Selection */}
          <div className="flex mb-8">
            <button className="px-6 py-3 rounded-l-lg font-medium bg-gray-800 text-white">
              New Product
            </button>
            <button className="px-6 py-3 rounded-r-lg font-medium bg-gray-200 text-gray-600">
              Existing Product
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Price</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter product price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product URL</label>
              <input
                type="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter product URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Product Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                <p className="text-gray-600 mb-2">Drop your product image here</p>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Browse files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
