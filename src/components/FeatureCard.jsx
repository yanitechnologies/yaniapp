import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-yellow-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard; 