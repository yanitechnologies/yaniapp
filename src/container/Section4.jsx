import React, { useState } from 'react';

const Section4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const studentData = [
    {
      name: 'DIVYA LIKHITA',
      role: 'SOFTWARE ENGINEER',
      package: '34.4 LPA',
      company: 'PayPal',
      branch: 'CSE',
      videoThumbnail: 'path/to/divya-thumbnail.png', // Replace with your image paths
    },
    {
      name: 'RAHUL SHARMA',
      role: 'DEVOPS ENGINEER',
      package: '25.0 LPA',
      company: 'Amazon',
      branch: 'IT',
      videoThumbnail: 'path/to/rahul-thumbnail.png', // Replace with your image paths
    },
    {
      name: 'PRIYA SINGH',
      role: 'DATA SCIENTIST',
      package: '28.0 LPA',
      company: 'Google',
      branch: 'ECE',
      videoThumbnail: 'path/to/priya-thumbnail.png', // Replace with your image paths
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // You would add logic here to programmatically scroll to the correct slide
    // For a simple demo, we just update the state.
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest mb-2">
          Building Milestones of Success Since 2019
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Listen: Real Students' Journeys
        </h2>

        {/* Carousel Container */}
        <div className="flex justify-center items-center">
          <div className="flex items-center overflow-hidden w-full relative">
            <div
              className="flex transition-transform duration-500 ease-in-out snap-x snap-mandatory"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {studentData.map((student, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 snap-center"
                >
                  <div className="bg-black text-white rounded-lg overflow-hidden relative shadow-2xl p-6">
                    {/* Video Thumbnail/Player */}
                    <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4">
                      <img
                        src={student.videoThumbnail}
                        alt={`Video of ${student.name}`}
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-white cursor-pointer hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="text-center">
                      <p className="text-2xl font-bold">{student.package}</p>
                      <h3 className="text-lg font-semibold mt-2">{student.name}</h3>
                      <p className="text-gray-400 text-sm">{student.role}</p>
                      <p className="text-gray-400 text-xs mt-1">{student.branch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {studentData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-black' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;