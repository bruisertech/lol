import React, { useState, useEffect } from 'react';

const AccessibilitySidebar = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState(0);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.remove('text-size-large', 'text-size-larger');
    if (textSize === 1) {
      document.documentElement.classList.add('text-size-large');
    } else if (textSize === 2) {
      document.documentElement.classList.add('text-size-larger');
    }
  }, [textSize]);

  const toggleContrast = () => setHighContrast(!highContrast);

  const increaseTextSize = () => {
    setTextSize((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const decreaseTextSize = () => {
     setTextSize((prev) => (prev > 0 ? prev - 1 : 2));
  }

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#000066] text-white flex flex-col items-center rounded-l-md z-50 shadow-lg">
      <button
        onClick={toggleContrast}
        className="p-3 hover:bg-[#000088] transition-colors border-b border-white/20 w-full flex justify-center invert-safe"
        aria-label="Toggle High Contrast"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path></svg>
      </button>

      <button
        onClick={decreaseTextSize}
        className="p-3 hover:bg-[#000088] transition-colors border-b border-white/20 w-full flex justify-center invert-safe font-bold text-lg"
        aria-label="Decrease Text Size"
      >
        A-
      </button>

      <button
        onClick={increaseTextSize}
        className="p-3 hover:bg-[#000088] transition-colors border-b border-white/20 w-full flex justify-center invert-safe font-bold text-lg"
        aria-label="Increase Text Size"
      >
        A+
      </button>

      <a
        href="https://www.signosenred.gov.co/868/w3-propertyvalue-962599.html"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-[#000088] transition-colors w-full flex justify-center invert-safe"
        aria-label="Sign Language Information"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82l2.6 2.6"></path></svg>
      </a>
    </div>
  );
};

export default AccessibilitySidebar;