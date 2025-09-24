import React from 'react'

const Section1 = () => {
  return (
  <section className="bg-white p-8 md:p-16 lg:p-24">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          {/* Left Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              From Learning to Earning:
              <br />
              Join the Best Software
              <br />
              Training & Placement
              <br />
              Institute in Bangalore
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
              Unlock unlimited placement drives & 1:1 mentorship with top software training and placement institute in Bangalore. Get hands-on training in Full Stack Development or Software Testing and secure your dream tech job.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 mt-10 text-center">
              <div>
                <p className="text-4xl font-bold">83%</p>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold">1310+</p>
                <p className="text-gray-600">Hiring Partners</p>
              </div>
              <div>
                <p className="text-4xl font-bold">30k+</p>
                <p className="text-gray-600">Got Their First Job</p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex-1 w-full max-w-md bg-gray-50 rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200">
            <h2 className="text-lg font-bold text-center mb-4">Book Your Demo Classes, For Free!</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="tel" placeholder="Phone" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Whatsapp Number" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              
              <div className="flex gap-4">
                <select className="w-1/2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Graduation year</option>
                </select>
                <select className="w-1/2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select language</option>
                </select>
              </div>
              
              <input type="text" placeholder="Referred by Friend? Enter KodNest ID and name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Preferred Mode of Learning</span>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="learningMode" id="online" className="form-radio" />
                  <label htmlFor="online">Online</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="learningMode" id="offline" className="form-radio" />
                  <label htmlFor="offline">Offline</label>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Which tech do you want to start your career with?</span>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="techCareer" id="development" className="form-radio" />
                  <label htmlFor="development">Development</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="techCareer" id="testing" className="form-radio" />
                  <label htmlFor="testing">Testing</label>
                </div>
              </div>

              <button type="submit" className="w-full py-3 mt-4 text-white font-bold rounded-md bg-gray-800 hover:bg-yellow-600 transition duration-300">
                REGISTER NOW
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Section1
