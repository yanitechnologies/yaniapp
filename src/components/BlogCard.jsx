import React from 'react';

const BlogCard = ({ imageUrl, categories, title, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
          {categories.map((category, index) => (
            <span key={index} className="font-medium px-2 py-1 bg-gray-100 rounded-full">
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm mt-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;