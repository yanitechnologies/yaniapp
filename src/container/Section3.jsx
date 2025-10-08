import React from 'react';
// Assuming the CareerCard component (with monochromatic styling) is available
import CareerCard from '../components/CareerCard'; 

const Section3 = () => {
  const cards = [
    // 1. Full Stack Course
    {
      icon: (
        <svg className="w-20 h-20 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Icon for Development (Code/Stack) */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Full Stack Development (Java / Python, MEAN & MERN)',
      description: 'Master front-end, back-end, and database technologies. Build real-world applications with comprehensive short and long-term courses.',
    },
    // 2. Data Science Course
    {
      icon: (
        <svg className="w-20 h-20 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Icon for Data Science (Chart/Analytics) */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Data Science & Analytics',
      description: 'Dive deep into machine learning, data visualization, and statistical analysis. Includes practical capstone project explanations.',
    },
    // 3. Networking / Web Technology / DSA Course
    {
      icon: (
        <svg className="w-20 h-20 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Icon for Networking / Connectivity */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.111A9.957 9.957 0 0112 4c4.97 0 9 3.582 9 8z" />
        </svg>
      ),
      title: 'Networking, DSA, & Web Technology Basics',
      description: 'Essential courses covering core computer science principles: Networking fundamentals, Data Structures and Algorithms (DSA), and Web Tech basics.',
    },
  ];

  return (
    // Assigned the anchor ID #training for the Navbar link
    <section id="training" className="bg-gray-50 py-16 md:py-24 px-6 lg:px-10 border-t border-gray-100">
      <div className="container mx-auto text-center">
        
        {/* Removed 'Get Started' button as it overlaps with the main CTA in the Hero section */}

        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Corporate-Based Training Programs
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Choose from our short-term and long-term courses, all designed and led by industry experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {cards.map((card, index) => (
            <CareerCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;