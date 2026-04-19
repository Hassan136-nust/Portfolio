import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;

      // Calculate current section (0-5 for 6 sections)
      const section = Math.min(Math.floor(progress * 6), 5);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { currentSection };
};
