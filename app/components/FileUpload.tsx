'use client';

import { useState } from 'react';

interface FileUploadProps {
  onNext: () => void;
  onBack: () => void;
}

export default function FileUpload({ onNext, onBack }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'document-attachment-1.pdf', progress: 60 },
    { id: 2, name: 'document-attachment-2.pdf', progress: 0 }
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Simulate file upload
      const newFiles = Array.from(files).map((file, index) => ({
        id: uploadedFiles.length + index + 1,
        name: file.name,
        progress: 0
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (id: number) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="gradient-border">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Add Campaign Information</h2>
        <p className="text-gray-600 mb-8">Upload a file or paste a link — we'll pull the product and campaign details for you.</p>

        {/* Tab Selection */}
        <div className="flex mb-8">
          <button className="px-6 py-3 rounded-l-lg font-medium bg-gray-200 text-gray-600">
            New Product
          </button>
          <button className="px-6 py-3 rounded-r-lg font-medium bg-gray-200 text-gray-600">
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
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <p className="text-lg font-medium text-gray-900 mb-2">Drop in your product/campaign info</p>
              <label className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
                Click to upload
              </label>
              <p className="text-sm text-gray-500 mt-2">PDF/CSV</p>
              <input
                type="file"
                accept=".pdf,.csv"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
            </div>
          </div>
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Files</h3>
            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-900">{file.name}</span>
                    </div>
                    {file.progress > 0 && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${file.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => handleDeleteFile(file.id)}
                    className="ml-4 p-2 text-gray-400 hover:text-red-500"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

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
