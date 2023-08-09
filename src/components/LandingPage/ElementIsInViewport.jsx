import React, { useEffect, useRef } from 'react';

const ElementInViewport = ({ onInViewport }) => {
  const elementRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      onInViewport(); // Call the function when the element is in the viewport
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // use the viewport as the root
      rootMargin: '0px', // adjust the rootMargin based on your needs
      threshold: 0.5, // adjust the threshold based on your needs
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [onInViewport]);

  return <div ref={elementRef}></div>;
};

export default ElementInViewport;
