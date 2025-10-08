import React from 'react';

const BlogCard = ({ imageUrl, categories, title, date }) => {
  return (
    // Updated hover effect and shadow for monochromatic theme
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-300 border border-gray-100">
      
      {/* Image */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-6">
        {/* Categories/Tags - Use dark text on light gray background */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-700 mb-4">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="font-medium px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
        
        {/* Title - Bold Black Text */}
        <h3 className="text-xl font-extrabold text-black mb-2 leading-snug">
          {title}
        </h3>
        
        {/* Date/Metadata - Subtler Gray */}
        <div className="flex items-center text-gray-500 text-sm mt-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;