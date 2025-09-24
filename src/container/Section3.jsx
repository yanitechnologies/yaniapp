import React from 'react';
import CareerCard from '../components/CareerCard';

const Section3 = () => {
  const cards = [
    {
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="50" height="50" rx="10" fill="#FFE56B" stroke="black" strokeWidth="3" />
          <path d="M40 45L60 65M60 45L40 65" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 35L50 85" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Development Path: Java and Python Full Stack Course',
      description: 'Effective programmers excel by managing complex details that others might miss.',
    },
    {
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#FFD700" strokeWidth="4" />
          <path d="M50 10L50 90M10 50H90" stroke="#FFD700" strokeWidth="4" />
          <path d="M60 20L85 35M60 80L85 65" stroke="#FFD700" strokeWidth="4" />
          <path d="M40 20L15 35M40 80L15 65" stroke="#FFD700" strokeWidth="4" />
        </svg>
      ),
      title: 'Testing Path: Comprehensive Testing Premium Course',
      description: 'Never Let the Same Bug Bite You Twice - Test Smarter, Not Harder',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <button className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-full text-sm">
            Get Started
          </button>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Two Career Paths, One Goal: Your Success
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
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