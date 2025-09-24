import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-gray-100 text-black shadow-md py-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-600 transition duration-300">
            Yapp
          </a>
        </div>

        {/* Desktop Menu - visible on medium screens and up */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-600 transition duration-300 text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger - visible only on medium screens and below */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
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

      {/* Mobile Menu Dropdown - conditionally rendered */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-200 px-6 pb-4`}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block py-3 text-black hover:text-gray-600 transition duration-300 text-lg"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;