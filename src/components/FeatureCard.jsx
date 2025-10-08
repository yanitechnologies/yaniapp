import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    // Card styling updated to use subtle shadows and dark text
    <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100 text-left">
      {/* Icon color changed to Black */}
      <div className="text-black mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard; 