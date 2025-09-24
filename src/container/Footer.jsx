import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Top Section */}
      <div className="bg-gray-100 py-12 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            KodNest - Code, Transform and Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Empowering Tomorrow's Leaders with Cutting-Edge Education and Robust Placement Support
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Instagram Icon Path */}
                <path d="M12 2.163c3.204 0 3.58.012 4.851.07A5.964 5.964 0 0120 4.908a5.964 5.964 0 012.775 4.316c.058 1.27.07 1.646.07 4.851s-.012 3.58-.07 4.85a5.964 5.964 0 01-2.775 4.316 5.964 5.964 0 01-4.316 2.775c-1.27.058-1.646.07-4.851.07s-3.58-.012-4.85-.07a5.964 5.964 0 01-4.316-2.775 5.964 5.964 0 01-2.775-4.316c-.058-1.27-.07-1.646-.07-4.851s.012-3.58.07-4.85A5.964 5.964 0 014.908 4.908a5.964 5.964 0 014.316-2.775c1.27-.058 1.646-.07 4.85-.07zm0 2.16a7.842 7.842 0 100 15.684 7.842 7.842 0 000-15.684zM12 10a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Facebook Icon Path */}
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-4.5H9v-2h2V8.5h2v2h2V12h-2v4.5z" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* LinkedIn Icon Path */}
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15h-2V9h2v8zm-1-9.5A1.5 1.5 0 118.5 7a1.5 1.5 0 011.5 1.5zm7 9.5h-2v-4.5h-2V9h4v8.5z" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* YouTube Icon Path */}
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 12l-5 2.5V9.5l5 2.5z" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* GitHub Icon Path */}
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                <path d="M12 2a10 10 0 00-3.321 1.944A9.98 9.98 0 002 12a10 10 0 008.321 9.984A9.98 9.98 0 0012 22a10 10 0 005.106-1.12c.767-.354 1.488-.816 2.16-1.39A10 10 0 0012 2zM8.321 21.984A10 10 0 012 12a9.98 9.98 0 016.321-9.984v-.001a10 10 0 01.385-2c-.377.108-.738.25-1.08.41A10.01 10.01 0 002 12a10.01 10.01 0 007.625 9.774A9.99 9.99 0 008.32 21.983z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Middle Section */}
      <div className="bg-white py-12 px-6 border-b border-gray-200">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Copyright */}
          <div>
            <span className="text-2xl font-bold">KodNest</span>
            <p className="mt-2 text-sm text-gray-500">All rights reserved</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Full Stack Development</a></li>
              <li><a href="#" className="hover:underline">Premium Testing Module</a></li>
              <li><a href="#" className="hover:underline">Hire from us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Copyright Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-white py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <a href="tel:+91-8095000123" className="flex items-center space-x-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5L12 11.5l-3.5 4h7z" />
              </svg>
              <span>Contact us - +91-8095 000 123</span>
            </a>
            <a href="mailto:info@kodnest.com" className="flex items-center space-x-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5L12 11.5l-3.5 4h7z" />
              </svg>
              <span>Email - info@kodnest.com</span>
            </a>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-lg shadow-md transition duration-300 hover:bg-gray-500">
            <span>Register for Demo</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5L12 11.5l-3.5 4h7z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;