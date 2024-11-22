import React from 'react';
import Header from '../components/Layout/Header';

const AboutPage = () => {
  return (
    <div className="about-page min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to our page! We are passionate about delivering high-quality
          products and services. Our mission is to empower individuals and
          businesses through technology and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2zm0 10c-2.21 0-4-1.79-4-4H8c0 2.21 1.79 4 4 4s4-1.79 4-4h-2c0 2.21-1.79 4-4 4zm0-14a4 4 0 014 4v2h2V8a6 6 0 10-12 0v2h2V8a4 4 0 014-4z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Vision</h3>
            <p className="text-sm text-gray-500 text-center">
              To inspire and innovate for a better tomorrow.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h2a2 2 0 002-2V5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 002 2h2a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 01-2-2H5a2 2 0 01-2 2v3a2 2 0 01-2 2h3a2 2 0 01-2-2V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Mission</h3>
            <p className="text-sm text-gray-500 text-center">
              To create impactful solutions through dedication and creativity.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
