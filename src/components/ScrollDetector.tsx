import React, { useEffect, useRef } from 'react';

interface ScrollToBottomDetectorProps {
  onScrollToBottom: () => void;
  rootMargin?: string;
  threshold?: number;
}

const ScrollToBottomDetector: React.FC<ScrollToBottomDetectorProps> = ({
  onScrollToBottom,
  rootMargin = '10px',
  threshold = 0.75,
}) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      rootMargin: rootMargin,
      threshold: threshold,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onScrollToBottom();
      }
    }, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [onScrollToBottom]);

  return <div ref={sentinelRef} />;
};

export default ScrollToBottomDetector;
