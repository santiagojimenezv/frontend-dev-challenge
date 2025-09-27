'use client';

import { useState } from 'react';

interface IntegrationsProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Integrations({ onNext, onBack }: IntegrationsProps) {
  const [googleSheetEnabled, setGoogleSheetEnabled] = useState(false);

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Add Integrations</h2>
        <p className="text-gray-600 mb-8">Connect your tools to save time and reduce manual work</p>

        {/* Integration Options */}
        <div className="space-y-4 mb-8">
          {/* Google Sheet Integration */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Google Sheet</h3>
                <p className="text-sm text-gray-600">Automatically track campaign results in your Google Sheet</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={googleSheetEnabled}
                onChange={(e) => setGoogleSheetEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          {/* Shopify Integration */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg opacity-60">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.337 23.979c-.372 0-.743-.139-1.031-.417L.264 9.797c-.556-.556-.556-1.459 0-2.015L9.797.264c.556-.556 1.459-.556 2.015 0l14.042 14.042c.556.556.556 1.459 0 2.015l-9.533 9.533c-.288.278-.659.417-1.031.417z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Shopify</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
            <div className="w-11 h-6 bg-gray-200 rounded-full relative">
              <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full"></div>
            </div>
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
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}