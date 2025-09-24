import React, { useState } from 'react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleDismiss = () => {
    setIsFadingOut(true);
    // After the fade-out animation is complete, hide the component
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // This duration should match the Tailwind transition duration
  };

  if (!isVisible) {
    return null;
  }

  const bannerClasses = `
    bg-neutral-900 text-white p-4 text-center relative
    transition-opacity duration-500 ease-in-out
    ${isFadingOut ? 'opacity-0' : 'opacity-100'}
  `;

  return (
    <div className={bannerClasses}>
      <p className="text-base md:text-lg">
        📢 **New!** Check out our latest premium course on Fullstack Development.
      </p>
      <button 
        onClick={handleDismiss} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBanner;