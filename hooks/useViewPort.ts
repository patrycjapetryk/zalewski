import { useEffect, useState } from 'react';

const getSize = () => ({ x: window.innerWidth, y: window.innerHeight });

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
