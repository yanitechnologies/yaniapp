import React from 'react';

const Section1 = () => {
  return (
    // Anchor ID #top
    <section id="top" className="bg-white pt-16 pb-16 md:pt-24 lg:pt-32 lg:pb-32 font-inter relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 z-10">

        {/* 1. Header & Stats Block - NOW CENTERED */}
        <div className="pb-10 border-b-2 border-gray-100 mb-12 text-center"> 
            
            {/* Centered Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-tight tracking-tighter">
                The **YANI Tech** Advantage.
            </h1>
            <p className="mt-3 text-xl font-medium text-gray-500">
                Corporate-based training & guaranteed placement for the next generation of engineers.
            </p>
            
            {/* Centered Stats Reworked */}
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mt-8 text-center">
                <div className="pr-4 border-r border-gray-200">
                    <p className="text-4xl font-extrabold text-black">83%</p>
                    <p className="text-gray-700 font-medium text-sm mt-1">Placement Success Rate</p>
                </div>
                <div className="pr-4 border-r border-gray-200">
                    <p className="text-4xl font-extrabold text-black">34.4 LPA</p>
                    <p className="text-gray-700 font-medium text-sm mt-1">Highest Package Secured</p>
                </div>
                {/* Removed border-r on the last item for a cleaner look */}
                <div className="pr-4"> 
                    <p className="text-4xl font-extrabold text-black">1310+</p>
                    <p className="text-gray-700 font-medium text-sm mt-1">Hiring Partners</p>
                </div>
            </div>
        </div>
        
        {/* 2. Main Content Grid - The three columns remain for detailed content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Column 1: Core Value Proposition */}
            <div className="lg:pr-10 border-r-0 lg:border-r border-gray-200 text-left">
                <p className="text-2xl font-semibold text-gray-800 mb-4">
                    Launch Your Career: From Zero to $30 LPA
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    We provide **hands-on, real-world project experience** in Full Stack Development (Java/Python), Data Science, and Networking. Our programs are designed and delivered by engineers actively working in top product-based companies.
                </p>
                
                {/* Primary CTA - High visibility button */}
                <a 
                    href="#training"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white font-bold rounded-lg transition duration-300 hover:bg-gray-700 shadow-md"
                >
                    <span>Explore Training Paths</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
            </div>

            {/* Column 2: Program Highlights (Mid-section) */}
            <div className="lg:px-10 border-r-0 lg:border-r border-gray-200 text-left">
                <h3 className="text-xl font-bold text-black mb-4 border-b border-gray-200 pb-2">What We Guarantee</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                    <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 flex-shrink-0 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>**Unlimited** Placement Drives & Resume Building.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 flex-shrink-0 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>24/7 Mentor Support & Live Doubt Resolution.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 flex-shrink-0 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Focus on Financial Literacy & Soft Skills.</span>
                    </li>
                </ul>
            </div>

            {/* Column 3: Lead Capture Form - Dark, dedicated block */}
            <div className="lg:pl-10">
                <div className="bg-gray-900 rounded-lg shadow-2xl p-6">
                    <h3 className="text-xl font-extrabold text-white text-center mb-6">
                        Claim Your Free Consultation
                    </h3>
                    <form className="space-y-4">
                         {/* Input Fields - White text on dark background */}
                        <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition" />
                        <input type="email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition" />
                        <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition" />
                        
                        <select className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition">
                            <option>Select Course Interest</option>
                            <option>Full Stack</option>
                            <option>Data Science</option>
                            <option>Networking</option>
                        </select>
                        
                        <button 
                            type="submit" 
                            className="w-full py-3 mt-4 text-black font-extrabold rounded-md bg-white hover:bg-gray-200 transition duration-300 shadow-lg tracking-widest"
                        >
                            GET FREE CONSULTATION
                        </button>
                    </form>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Section1;