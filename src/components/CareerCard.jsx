import React from 'react';

const CareerCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-50 transition duration-300 mb-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Explore the Course</span>
      </button>

      <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
        <span>Download Brochure</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </div>
  );
};

export default CareerCard;