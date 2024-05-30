import { useEffect, useState } from 'react';

const getSize = () => {
  if (typeof window !== 'undefined') {
    return { x: window.innerWidth, y: window.innerHeight };
  }
  return { x: 0, y: 0 };
};

export function useViewPort() {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
