import React, { useState, useEffect, useRef } from 'react';

interface TalkingHeadProps {
  isAnimating: boolean;
  duration?: number;
}

const TalkingHead: React.FC<TalkingHeadProps> = ({ isAnimating, duration = 0 }) => {
  const [jawPosition, setJawPosition] = useState(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const getRandomInterval = () => Math.random() * 400;
  const getRandomSpeed = () => Math.random() * 100;
  const MAX_JAW_MOVEMENT = 35;

  const animateJaw = () => {
    const currentTime = Date.now();

    if (duration > 0 && currentTime - startTimeRef.current >= duration) {
      setJawPosition(0);
      return;
    }

    const targetPosition = jawPosition === 0 ? MAX_JAW_MOVEMENT : 0;
    const speed = getRandomSpeed();

    setJawPosition(targetPosition);

    animationRef.current = setTimeout(() => {
      const nextInterval = getRandomInterval();
      animationRef.current = setTimeout(animateJaw, nextInterval);
    }, speed);
  };

  useEffect(() => {
    if (isAnimating) {
      startTimeRef.current = Date.now();
      animateJaw();
    } else {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      setJawPosition(0);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isAnimating, duration]);

  return (
    <div className="absolute -top-24 -left-16 w-32 h-32 pointer-events-none z-50">
      <div className="relative w-full h-full">
        <img
          src="/head-1.png"
          alt="Head base"
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ zIndex: 1 }}
        />
        <img
          src="/head-2.png"
          alt="Jaw"
          className="absolute top-0 left-0 w-full h-full object-contain transition-transform"
          style={{
            zIndex: 2,
            transform: `translateY(${jawPosition}px)`,
            transitionDuration: `${getRandomSpeed()}ms`,
          }}
        />
      </div>
    </div>
  );
};

export default TalkingHead;
