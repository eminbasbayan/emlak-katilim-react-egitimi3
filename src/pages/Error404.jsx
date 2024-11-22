import React from 'react';

const Error404 = ({ message = 'Bir hata oluştu!', onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        {/* Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-red-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m-6-6a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </div>
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Ooops! Bir hata oluştu.
        </h1>
        {/* Message */}
        <p className="text-gray-600 mb-6">{message}</p>
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            onClick={onRetry}
          >
            Tekrar Dene
          </button>
          <a
            href="/"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
