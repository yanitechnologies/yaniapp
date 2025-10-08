import React from 'react';
import FeatureCard from '../components/FeatureCard';
const Section2 = () => {
  // Content updated to reflect YANI Technologies' differentiators
  const features = [
    {
      // Icon for Industry Exposure / Experience
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.531 23.531 0 0112 15c-3.18 0-6.37-.9-9-2.245M12 14v4m9-10c0-1.77-1.343-3.21-3.111-3.41M3 10c0-1.77 1.343-3.21 3.111-3.41M12 4a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      ),
      title: 'Real Industry Exposure',
      description: 'Train with **experienced industry experts** on corporate-based projects, ensuring you are job-ready from day one. Includes capstone project explanations.',
    },
    {
      // Icon for Personal Development / Soft Skills
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-4v-7c0-1.656 1.344-3 3-3s3 1.344 3 3v7h-4zm-8 0H5v-7c0-1.656 1.344-3 3-3s3 1.344 3 3v7H9zm4-17c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM8 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ),
      title: 'Soft Skill & Career Mastery',
      description: 'Dedicated **soft skill training** and personal development sessions covering mock interviews, resume preparation, and email writing.',
    },
    {
      // Icon for Financial Literacy / Counseling
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm0-3a5 5 0 100 10 5 5 0 000-10zM5 19h14M12 2v2M12 16v2" />
        </svg>
      ),
      title: 'Counseling & Financial Literacy',
      description: 'Beyond coding, receive comprehensive **career counselling** and crucial **financial literacy** guidance for long-term professional success.',
    },
  ];

  return (
    // Assigned the anchor ID #why-us for the Navbar link
    <section id="why-us" className="bg-white py-16 md:py-20 px-6 lg:px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          The YANI Advantage: How We Are Different
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We don't just teach code; we build careers. Our unique programs are designed to give you a complete, competitive edge.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;