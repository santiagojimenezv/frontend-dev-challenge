'use client';

import { useState } from 'react';

interface EmailSetupProps {
  onNext: () => void;
  onBack: () => void;
}

export default function EmailSetup({ onNext, onBack }: EmailSetupProps) {
  const [emailProvider, setEmailProvider] = useState<'cheerful' | 'external'>('cheerful');
  const [searchQuery, setSearchQuery] = useState('');
  const [connectedEmails, setConnectedEmails] = useState([
    'sarah.marketing@brightwave.co',
    'john.sales@nexustech.com'
  ]);

  const handleRemoveEmail = (email: string) => {
    setConnectedEmails(connectedEmails.filter(e => e !== email));
  };

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Email Setup</h2>
        <p className="text-gray-600 mb-8">Configure your email provider, accounts, and recipients to launch your campaign.</p>

        {/* Email Provider Selection */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              onClick={() => setEmailProvider('cheerful')}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                emailProvider === 'cheerful'
                  ? 'border-gray-800 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  checked={emailProvider === 'cheerful'}
                  onChange={() => setEmailProvider('cheerful')}
                  className="mr-3"
                />
                <span className="font-medium text-gray-900">Cheerful (Recommended)</span>
              </div>
              <p className="text-sm text-gray-600">Our email system with automatic optimization</p>
            </div>

            <div
              onClick={() => setEmailProvider('external')}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                emailProvider === 'external'
                  ? 'border-gray-800 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  checked={emailProvider === 'external'}
                  onChange={() => setEmailProvider('external')}
                  className="mr-3"
                />
                <span className="font-medium text-gray-900">Other external provider</span>
              </div>
              <p className="text-sm text-gray-600">providers like Instantly, Mixmax, etc. Cheerful will handle replies only</p>
            </div>
          </div>
        </div>

        {/* Add Connect Sending Accounts */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add Connect Sending Accounts</h3>
          
          {/* Search Bar */}
          <div className="mb-4">
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
                placeholder="Q Search connected emails"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Connected Emails */}
          <div className="flex flex-wrap gap-2">
            {connectedEmails.map((email) => (
              <div
                key={email}
                className="flex items-center bg-gray-100 rounded-lg px-3 py-2"
              >
                <span className="text-sm text-gray-700 mr-2">{email}</span>
                <button
                  onClick={() => handleRemoveEmail(email)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
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
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
