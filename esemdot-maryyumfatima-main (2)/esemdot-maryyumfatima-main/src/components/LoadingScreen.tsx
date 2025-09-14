import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <img 
            src="/lovable-uploads/873ac4b1-8db8-450d-82a5-4936b0825246.png" 
            alt="ESEMDOT Logo" 
            className="h-24 w-24 mx-auto mb-4 animate-bounce"
            onError={(e) => {
              // Fallback to a simple logo if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#ff3900] to-[#ffb380] rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-2xl font-bold">ED</span>
          </div>
        </div>
        
        <div className="text-2xl font-bold text-[#ff3900] mb-4">
          Loading Your Experience...
        </div>
        
        <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-[#ff3900] to-[#ffb380] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-sm text-gray-600 mt-2">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;