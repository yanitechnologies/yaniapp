import React from 'react';

const CareerCard = ({ icon, title, description }) => {
  return (
    // Card styling for a clean, professional look
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
      
      {/* Icon Area - Icon Color set to Black */}
      <div className="mb-5 text-black">
        {icon}
      </div>
      
      {/* Title and Description */}
      <h3 className="text-xl font-extrabold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto w-full space-y-3">
        {/* Primary CTA Button - Black/Dark Gray with White text */}
        <button className="flex items-center justify-center w-full space-x-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-700 transition duration-300 shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Explore the Course</span>
        </button>

        {/* Secondary CTA Button - Outlined Black/Gray */}
        <button className="flex items-center justify-center w-full space-x-2 px-6 py-3 border border-gray-400 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
          <span>Download Brochure</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CareerCard;