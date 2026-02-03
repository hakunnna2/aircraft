import React from 'react';

interface AircraftMascotProps {
  animationState: 'idle' | 'typing' | 'success' | 'error' | 'flyaway';
}

export const AircraftMascot: React.FC<AircraftMascotProps> = ({ animationState }) => {
  const getAnimationClass = () => {
    switch (animationState) {
      case 'typing':
        return 'animate-float';
      case 'success':
        return 'animate-pulse';
      case 'error':
        return 'animate-shake';
      case 'flyaway':
        return 'animate-fly-away';
      default:
        return 'animate-float';
    }
  };

  return (
    <div className="relative w-full max-w-2xl h-64 sm:h-80 md:h-[22rem] flex items-center justify-center mx-auto">
      {/* A380 GIF */}
      <img
        src="/a380.gif"
        alt="Airbus A380"
        className={`w-full h-full object-contain ${getAnimationClass()}`}
      />
    </div>
  );
};
