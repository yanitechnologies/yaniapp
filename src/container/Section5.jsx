import React from 'react';
import BlogCard from '../components/BlogCard';

const Section5 = () => {
  const blogPosts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1542831371-32f22b826f74?q=80&w=2670&auto=format&fit=crop',
      categories: ['Finding a Job', 'Get Inspired', 'Industry News'],
      title: 'From Classroom to Cubicle: A Day in the Life of a Junior Java Developer',
      date: 'December 7, 2024',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
      categories: ['Career Advice', 'Industry News', 'Learning Tips'],
      title: 'The Top 10 Spring Boot Features Every Java Developer Should Master',
      date: 'December 6, 2024',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop',
      categories: ['Career Advice', 'Industry News'],
      title: '7 Essential Skills Every Full Stack Developer Needs in 2025',
      date: 'December 3, 2024',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="text-center lg:text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get daily updates and ideas
            <br />
            from our team of experts.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Creating professional websites has never been easier, today with Essentials you can build awesome websites in no time!
          </p>
          <button className="mt-6 px-6 py-3 border  bg-gray-900 border-gray-400 text-white rounded-md font-medium transition duration-300 hover:bg-gray-500">
            Check our blog
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              imageUrl={post.imageUrl}
              categories={post.categories}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;