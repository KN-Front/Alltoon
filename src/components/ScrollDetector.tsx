import React, { useEffect, useRef } from 'react';

interface ScrollDetectorProps {
  onScrollEvent: () => void;
  rootMargin?: string;
  threshold?: number;
}
/**
 * @param param.onScrollEvent 스크롤 감지 시 실행되는 함수
 * @param param.rootMargin IntersectionObserver option
 * @param param.threshold IntersectionObserver option
 */

const ScrollDetector: React.FC<ScrollDetectorProps> = ({
  onScrollEvent,
  rootMargin = '10px',
  threshold = 0.75,
}) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const options = {
    rootMargin: rootMargin,
    threshold: threshold,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onScrollEvent();
      }
    }, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
      observer.disconnect();
    };
  }, [onScrollEvent, options]);

  return <div ref={sentinelRef} className="h-0" aria-hidden="true" />;
};

export default ScrollDetector;
