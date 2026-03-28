import { useState, useEffect } from 'react';

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'education', 'blog'];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight * 0.35;
      let current = '';

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Section is "active" when its top has scrolled above 35% of viewport
        if (rect.top <= viewportMiddle) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

export default useActiveSection;
