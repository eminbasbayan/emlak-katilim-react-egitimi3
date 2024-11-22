import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          We'd love to hear from you! Fill out the form below or reach us at:
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-blue-500 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 2c-1.104 0-2 .896-2 2h4c0-1.104-.896-2-2-2zM8 2c-1.104 0-2 .896-2 2h4c0-1.104-.896-2-2-2zM7 7h10c1.105 0 2 .895 2 2v7c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V9c0-1.105.895-2 2-2zM7 16h10v1H7v-1z"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-lg">info@company.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8l7 5 7-5M5 16l7 5 7-5"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-lg">+1 123 456 7890</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 md:mt-0"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
