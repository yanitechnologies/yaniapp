import React, { useState } from 'react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleDismiss = () => {
    setIsFadingOut(true);
    // After the fade-out animation is complete, hide the component
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // This duration matches the Tailwind transition duration
  };

  if (!isVisible) {
    return null;
  }

  const bannerClasses = `
    bg-black text-white p-3 text-center relative
    transition-opacity duration-500 ease-in-out
    ${isFadingOut ? 'opacity-0' : 'opacity-100'}
  `;

  return (
    <div className={bannerClasses}>
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm md:text-base font-medium pr-10">
          🔥 **Enrollment Open!** Master **Data Science** or **Full Stack (MERN/Java)** with Industry Experts. 
          <a 
            href="#training" 
            className="ml-2 font-bold underline hover:text-gray-400 transition-colors duration-300"
            onClick={handleDismiss} // Dismiss the banner when the user clicks the link
          >
            Explore Courses →
          </a>
        </p>
      </div>
      
      {/* Dismiss Button */}
      <button 
        onClick={handleDismiss} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 p-1"
        aria-label="Dismiss announcement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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