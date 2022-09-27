import { useState, useEffect } from 'react';

type WindowDimensionsType = {
  positionButtonY: number;
  positionButtonX: number;
  width: number;
  height: number;
};

function getWindowDimensions(
  scaleX: number = 1,
  scaleY: number = 1,
): WindowDimensionsType {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    positionButtonY: Math.trunc(width / scaleY),
    positionButtonX: Math.trunc(height / scaleX),
    width,
    height,
  };
}

export function useWindowDimensions(
  scaleX: number = 1,
  scaleY: number = 1,
): WindowDimensionsType {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(scaleX, scaleY),
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions(scaleX, scaleY));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
