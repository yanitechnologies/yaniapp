import React, { useState, useRef, useEffect } from 'react';

const Section4= () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const studentData = [
    {
      name: 'DIVYA LIKHITA',
      role: 'SOFTWARE ENGINEER',
      package: '34.4 LPA',
      company: 'PAYPAL',
      branch: 'CSE',
      videoThumbnail: 'https://via.placeholder.com/600x350/111111/FFFFFF?text=Divya+Success', 
    },
    {
      name: 'RAHUL SHARMA',
      role: 'DEVOPS ENGINEER',
      package: '25.0 LPA',
      company: 'AMAZON',
      branch: 'IT',
      videoThumbnail: 'https://via.placeholder.com/600x350/222222/FFFFFF?text=Rahul+Success',
    },
    {
      name: 'PRIYA SINGH',
      role: 'DATA SCIENTIST',
      package: '28.0 LPA',
      company: 'GOOGLE',
      branch: 'ECE',
      videoThumbnail: 'https://via.placeholder.com/600x350/333333/FFFFFF?text=Priya+Success',
    },
    {
      name: 'AMIT KUMAR',
      role: 'FULL STACK DEVELOPER',
      package: '18.0 LPA',
      company: 'TCS',
      branch: 'MECH',
      videoThumbnail: 'https://via.placeholder.com/600x350/444444/FFFFFF?text=Amit+Success',
    },
    {
      name: 'SNEHA REDDY',
      role: 'NETWORK SPECIALIST',
      package: '15.5 LPA',
      company: 'WIPRO',
      branch: 'EEE',
      videoThumbnail: 'https://via.placeholder.com/600x350/555555/FFFFFF?text=Sneha+Success',
    },
    // Added more content for a full carousel effect
  ];

  const slidesPerView = 3; // Number of cards to show at once on desktop

  const totalPages = Math.ceil(studentData.length / slidesPerView);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // Logic to scroll the carousel container
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollLeft = index * slidesPerView * cardWidth;
    }
  };

  // Logic to handle manual scrolling (optional, but enhances UX)
  // useEffect(() => {
  //   if (carouselRef.current) {
  //     // Add scroll listener logic here to update currentSlide state based on scroll position
  //   }
  // }, []);


  // Calculate the transform value based on the number of slides per page
  const transformValue = `translateX(-${(currentSlide * 100) / (studentData.length / slidesPerView)}%)`;


  return (
    // Anchor ID for Navbar
    <section id="services" className="bg-white py-16 md:py-24 px-6 lg:px-10">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest mb-2">
          Training & Placement Services Results
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12">
          Listen to Real Student Journeys
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth" // Use overflow-x-hidden to control scrolling via state
          >
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`, // Adjusted for page-based scrolling
              }}
            >
              {studentData.map((student, index) => (
                <div
                  key={index}
                  // Set width to show 1 card on mobile, 2 on md, and 3 on lg
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4" 
                >
                  <div className="bg-gray-800 text-white rounded-xl overflow-hidden relative shadow-2xl p-6 h-full flex flex-col justify-between">
                    
                    {/* Video Thumbnail/Player */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={student.videoThumbnail}
                        alt={`Video of ${student.name}`}
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-white/90 cursor-pointer hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="text-center mt-auto">
                      <p className="text-3xl font-extrabold text-white">{student.package}</p>
                      <p className="text-sm font-light text-gray-300">Package Secured</p>
                      <h3 className="text-xl font-semibold mt-3">{student.name}</h3>
                      <p className="text-gray-400 text-base">{student.role} @ {student.company}</p>
                      <p className="text-gray-500 text-xs mt-1">Branch: {student.branch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;