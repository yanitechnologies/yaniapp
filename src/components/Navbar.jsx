import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated menu items to use specific anchor links for the single-page site
  const menuItems = [
    { name: "Training", href: "#training" }, // Links to Section 3
    { name: "Services", href: "#services" }, // Links to Section 4
    { name: "Why Us", href: "#why-us" },     // Links to Section 5
    { name: "Contact", href: "#contact" },   // Links to Section 6
  ];

  // Function to handle link clicks (closes mobile menu)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-lg py-2 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 lg:px-10">
        
        {/* Logo/Home Link - Black and Bold */}
        <div className="text-2xl font-extrabold tracking-wider">
          <a 
            href="#top" 
            className="text-black hover:text-gray-700 transition duration-300"
          >
            YANI Tech
          </a>
        </div>

        {/* Desktop Menu & CTA - visible on medium screens and up */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-black transition duration-300"
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
          
          {/* Primary CTA Button - Gray Background, White Text */}
          <a 
            href="#contact" // Linking the CTA directly to the Contact section
            className="ml-4 px-5 py-2 bg-gray-800 text-white font-semibold rounded-full hover:bg-black transition duration-300 shadow-md"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Hamburger - Black Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Light Gray Background */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 px-6 pt-2 pb-4 border-t border-gray-200`}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={handleLinkClick} 
            className="block py-3 text-gray-800 font-medium hover:bg-gray-200 transition duration-300 text-lg rounded-md px-2"
          >
            {item.name}
          </a>
        ))}
        {/* CTA Button in Mobile Menu - Gray Background, White Text */}
        <a 
          href="#contact"
          onClick={handleLinkClick}
          className="mt-4 block text-center px-5 py-2 bg-gray-800 text-white font-semibold rounded-full hover:bg-black transition duration-300 shadow-md"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;