'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex flex-col items-center space-y-4 mr-8">
      <div className="text-sm font-medium text-gray-600">{currentStep}/{totalSteps}</div>
      <div className="flex flex-col items-center">
        <svg className="w-4 h-4 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
        <div className="relative flex flex-col items-center" style={{ height: '300px' }}>
          {/* Connecting line */}
          <div 
            className="absolute w-0.5 bg-gray-300"
            style={{ height: '300px', top: '12px' }}
          />
          {/* Active line */}
          <div 
            className="absolute w-0.5 bg-black"
            style={{ height: `${(currentStep - 1) * (300 / (totalSteps - 1))}px`, top: '12px' }}
          />
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full absolute z-10 ${
                i < currentStep - 1
                  ? 'bg-black'
                  : i === currentStep - 1
                  ? 'bg-black border-2 border-black'
                  : 'bg-gray-300'
              }`}
              style={{ top: `${12 + (i * (300 / (totalSteps - 1)))}px` }}
            />
          ))}
        </div>
        <svg className="w-4 h-4 text-gray-400 mt-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </div>
    </div>
  );
}
