import React from 'react';
import BlogCard from '../components/BlogCard'; // Assuming the monochromatic BlogCard is imported

const BlogAndUpdatesSection = () => {
  const blogPosts = [
    {
      id: 1,
      // Using relevant placeholder images matching the tech focus
      imageUrl: 'https://images.unsplash.com/photo-1542831371-32f22b826f74?q=80&w=2670&auto=format&fit=crop',
      categories: ['Career Advice', 'Full Stack', 'Placement Tips'],
      title: 'From Classroom to Cubicle: A Day in the Life of a Junior Java Developer',
      date: 'December 7, 2024',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
      categories: ['Data Science', 'Tech Trends', 'Learning Tips'],
      title: 'The Top 5 Python Libraries Every Data Scientist Must Master',
      date: 'December 6, 2024',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop',
      categories: ['Networking', 'Career Advice'],
      title: '7 Essential Skills Every Network Engineer Needs in 2025',
      date: 'December 3, 2024',
    },
  ];

  return (
    // No anchor ID is strictly needed for navigation, but we'll use a descriptive one just in case
    <section id="blog" className="bg-white py-16 md:py-24 px-6 lg:px-10 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="text-center lg:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Insights & Updates
            <br />
            From Our Industry Experts.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Stay ahead of the curve with articles on tech trends, career growth, and market insights curated by the YANI Tech team.
          </p>
          
          {/* CTA Button - Black/White Monochromatic Scheme */}
          <button className="mt-6 px-8 py-3 bg-black text-white rounded-full font-bold transition duration-300 hover:bg-gray-700 shadow-lg">
            Read Our Full Blog
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

export default BlogAndUpdatesSection;