import React, { useEffect, useRef } from 'react';

const PageLayout = ({ sections, setCurrentSection }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    const sectionElements = sections.map(s => document.getElementById(s.id));
    sectionElements.forEach(el => {
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, setCurrentSection]);

  return (
    <main className="page-layout">
      {sections.map((section) => {
        const Component = section.component;
        return (
          <section key={section.id} id={section.id} className="page-section">
            <Component />
          </section>
        );
      })}
    </main>
  );
};

export default PageLayout;