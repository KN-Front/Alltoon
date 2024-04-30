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
  const sentinelRef = useRef<HTMLDivElement>(null); // 교차 지점 DOM 저장

  const options = {
    rootMargin: rootMargin,
    threshold: threshold,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // 교차할 경우 함수 실행
      if (entry.isIntersecting) {
        onScrollEvent();
      }
    }, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current); // 관찰 중지
      }
      observer.disconnect(); // obsever 관련 모든 기능 중지
    };
  }, [onScrollEvent, options]);

  return <div ref={sentinelRef} className="h-0" aria-hidden="true" />;
};

export default ScrollDetector;
