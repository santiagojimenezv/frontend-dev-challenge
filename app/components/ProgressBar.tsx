'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex flex-col items-center space-y-4 mr-8">
      <div className="text-sm font-medium text-gray-600">{currentStep}/{totalSteps}</div>
      <div className="flex flex-col items-center space-y-2">
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
        <div className="flex flex-col space-y-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < currentStep - 1
                  ? 'bg-black'
                  : i === currentStep - 1
                  ? 'bg-black border-2 border-black'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </div>
    </div>
  );
}
