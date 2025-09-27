'use client';

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center py-6">
        {/* Plus Icon */}
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-8">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col space-y-6 mb-8">
          <div className="w-6 h-6 text-white">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-white">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-white">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-8 h-8 bg-gray-600 rounded-full mt-auto">
          <div className="w-full h-full bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Untitled Campaign</h1>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
