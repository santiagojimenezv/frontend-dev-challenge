'use client';

import { useState } from 'react';

interface EmailReviewProps {
  onNext: () => void;
  onBack: () => void;
}

export default function EmailReview({ onNext, onBack }: EmailReviewProps) {
  const [subjectLine, setSubjectLine] = useState('Hey {name}, a gift from Yeti just for you');
  const [emailBody, setEmailBody] = useState(`Hi {name},

I've been really enjoying your content on {channel_name} and your honest gear reviews. Your authentic approach and the way you connect with your audience is exactly what we're looking for.

We'd love to send you a complimentary Yeti cooler to try out. No strings attached - just our way of saying thanks for the great content you create.

If you're interested, I'd just need your shipping address. We'll send it out within the next few days.

Looking forward to hearing from you!

Best,
The Yeti Team`);

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Review Email Draft</h2>
        <p className="text-gray-600 mb-8">Cheerful has drafted an email for you. Feel free to edit as you please.</p>

        <div className="space-y-6">
          {/* To Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <p className="text-lg font-medium text-gray-900 mb-2">Click to upload CSV of Receipts</p>
            </div>
          </div>

          {/* Subject Line */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
            <div className="relative">
              <input
                type="text"
                value={subjectLine}
                onChange={(e) => setSubjectLine(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Email Body */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Body</label>
            
            {/* Formatting Toolbar */}
            <div className="flex items-center space-x-2 mb-2 p-2 bg-gray-50 rounded-lg">
              <button className="p-2 hover:bg-gray-200 rounded">
                <span className="font-bold text-sm">B</span>
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <span className="italic text-sm">I</span>
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <span className="underline text-sm">U</span>
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                # Merge Tags
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-purple-100 text-purple-700 rounded hover:bg-purple-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">Cheerify</span>
              </button>
            </div>

            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-900"
            />
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
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg font-medium hover:from-purple-700 hover:to-orange-600 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Launch!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
