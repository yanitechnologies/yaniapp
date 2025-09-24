import React from 'react';

const Section6 = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
          KodNest Learner Support
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Reach out to our experts anytime. We're here to assist you 24/7.
        </p>
        <button className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg transition duration-300 hover:bg-yellow-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 15a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h14a1 1 0 011 1v6zM7 10a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14a1 1 0 102 0 1 1 0 00-2 0z" clipRule="evenodd" />
          </svg>
          <span>Talk to a Career Expert</span>
        </button>
      </div>
    </section>
  );
};

export default Section6;