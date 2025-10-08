import React from 'react';

const Footer = () => {
  return (
    // Anchor ID #contact is assigned here, as this is the final block on the page
    <footer id="contact" className="bg-gray-900 text-white">
      
      {/* Top Section - Brand/Mission Statement */}
      <div className="bg-gray-800 py-12 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold mb-2 text-white">
            YANI Tech - Code, Transform, and Succeed
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Empowering careers with **Corporate-Based Training** and guaranteed placement support from experienced industry experts.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              {/* LinkedIn Icon */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.565-4 0v5.604h-3v-11h3v1.765c1.395-2.71 7-2.73 7 2.221v7.014z" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
              {/* YouTube Icon Path */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 12l-5 2.5V9.5l5 2.5z" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              {/* Instagram Icon Path - Using a simpler design path for consistency */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.58.012 4.851.07A5.964 5.964 0 0120 4.908a5.964 5.964 0 012.775 4.316c.058 1.27.07 1.646.07 4.851s-.012 3.58-.07 4.85a5.964 5.964 0 01-2.775 4.316 5.964 5.964 0 01-4.316 2.775c-1.27.058-1.646.07-4.851.07s-3.58-.012-4.85-.07a5.964 5.964 0 01-4.316-2.775 5.964 5.964 0 01-2.775-4.316c-.058-1.27-.07-1.646-.07-4.851s.012-3.58.07-4.85A5.964 5.964 0 014.908 4.908a5.964 5.964 0 014.316-2.775c1.27-.058 1.646-.07 4.85-.07zm0 2.16a7.842 7.842 0 100 15.684 7.842 7.842 0 000-15.684zM12 10a2 2 0 100 4 2 2 0 000-4z" /></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Middle Section - Links and Info (Dark Background) */}
      <div className="py-12 px-6 border-b border-gray-700">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-gray-400">
          
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-extrabold text-white">YANI Tech</span>
            <p className="mt-3 text-sm text-gray-500 max-w-[200px]">
              The future of tech careers, built on expert training and dedicated placement support.
            </p>
          </div>

          {/* Training Programs (Explore) */}
          <div>
            <h4 className="font-bold mb-4 text-white">Training Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#training" className="hover:text-white transition-colors">Full Stack Development</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Data Science & AI</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Networking & DSA</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Explore All Courses</a></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company & Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#why-us" className="hover:text-white transition-colors">Why YANI Tech</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog & Updates</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4 text-white">Contact & Legal</h4>
            <ul className="space-y-3 text-sm">
               {/* Corrected Email Address */}
              <li>
                <span className="font-medium block mb-1">HR & Partnerships:</span>
                <a href="mailto:hr.yanitechnologies@gmail.com" className="hover:text-white transition-colors">
                  hr.yanitechnologies@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium block mt-3 mb-1">Location:</span>
                <p>Bangalore, India</p>
              </li>
              <li className="pt-3"><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Copyright (Light Background) */}
      <div className="bg-gray-900 py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          
          <p>
            &copy; {new Date().getFullYear()} YANI Technologies. All rights reserved.
          </p>

          {/* Removed phone and email links here as they are redundant/incorrect */}
          {/* Removed the extra 'Register for Demo' button as it's the CTA section's job */}

          <div className="text-right">
             <span className="inline-block">Built with ❤️ for aspiring engineers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;