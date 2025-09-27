'use client';

import { useEffect } from 'react';

interface EmailLoadingProps {
  onComplete: () => void;
}

export default function EmailLoading({ onComplete }: EmailLoadingProps) {
  useEffect(() => {
    // Simulate email generation for 3 seconds
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
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-orange-500 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center">
              <p className="text-lg font-medium bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Generating your Email
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Review Email Draft</h2>
          <p className="text-gray-600 mb-8">Cheerful has drafted an email for you. Feel free to edit as you please.</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-lg font-medium text-gray-900 mb-2">Click to upload CSV of Receipts</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                value="Hey {name}, a gift from Yeti just for you"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Body</label>
              <textarea
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                value="Hi {name}, I've been really enjoying your content..."
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
