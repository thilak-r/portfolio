// src/components/ui/splite.tsx
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader2 } from 'lucide-react';

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start loading immediately when component mounts
    setIsLoading(true);
    
    // Set visible after a short delay to ensure component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Preload the Spline runtime
    import('@splinetool/runtime').catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg z-10">
          <div className="flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-purple-500 animate-spin mb-4" />
            <p className="text-white text-lg">Loading 3D Model...</p>
          </div>
        </div>
      )}
      
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg">
          <div className="text-center p-6 bg-black/60 rounded-lg">
            <p className="text-red-400 text-lg mb-2">Failed to load 3D model</p>
            <p className="text-gray-300">Please check your connection and refresh</p>
          </div>
        </div>
      )}
      
      {isVisible && (
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ 
            width: '100%', 
            height: '100%',
            visibility: isLoading ? 'hidden' : 'visible'
          }}
        />
      )}
    </div>
  );
}
