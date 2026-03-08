import { Suspense, lazy, useState, useEffect, useRef } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Don't render Spline on mobile at all — too heavy
  useEffect(() => {
    if (isMobile) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  // On mobile, render nothing
  if (isMobile) return null;

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }}>
      {isVisible ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full animate-spin"
                style={{
                  border: '2px solid var(--color-border)',
                  borderTopColor: 'var(--color-accent)',
                }}
              />
            </div>
          }
        >
          <Spline scene={scene} className={className} />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="w-8 h-8 rounded-full animate-spin"
            style={{
              border: '2px solid var(--color-border)',
              borderTopColor: 'var(--color-accent)',
            }}
          />
        </div>
      )}
    </div>
  );
}
