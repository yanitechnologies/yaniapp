import React from 'react';

const Section6 = () => {
  return (
    // Anchor for potential internal linking
    <section id="cta-final" className="bg-gray-50 py-16 md:py-20 px-6 lg:px-10 text-center border-t border-gray-100">
      <div className="container mx-auto">
        
        {/* Headline and Subtext */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Ready to Launch Your Career?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Talk to a **YANI Tech** expert. We're here to offer personalized career counselling and answer your questions about our training and placement services.
        </p>
        
        {/* Final CTA Button - Links to the Contact section (which is likely the Footer in a single-page) */}
        <a 
          href="#contact" 
          className="inline-flex items-center space-x-3 px-10 py-4 bg-black text-white font-bold rounded-full shadow-xl transition duration-300 hover:bg-gray-700 text-lg tracking-wider transform hover:scale-[1.03]"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Schedule Your Free Consultation</span>
        </a>
      </div>
    </section>
  );
};

export default Section6;