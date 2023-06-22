// LoadingLine.js

import { useState, useEffect } from 'react';

const LoadingLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const lineStyle = {
    left: `0`,
    right: `0`,
    width: `${scrollPercentage}%`,
  };

  return <div className="loading-line" style={lineStyle}></div>;
};

export default LoadingLine;
