import React from 'react';
import FeatureCard from '../components/FeatureCard';

const Section2 = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Unlimited Placement Drives',
      description: 'Achieve Big with 34.4 LPA Packages in Top Product-Based Companies',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Create Real-World Projects',
      description: 'Learn by Doing, Not Just Watching, Hands-On Training with Live Projects & 24/7 Mentor',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0v10m-3-12h10a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      title: 'Affordable Learning',
      description: 'Lowest Fees Guaranteed + 7-Day Money-Back Guarantee',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Build Real Apps, Land Dream Job</h2>
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