import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from './photos/newton-logo-2.png';
import learningImage from './photos/undraw_Learning_re_32qv.png';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col text-gray-800 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
      {/* Header */}
      <header className={`w-full py-2 flex items-center justify-between px-6 bg-white shadow-md border-b border-gray-200 transform ${isLoaded ? 'translate-y-0' : '-translate-y-10'} transition-transform duration-1000 ease-out`}>
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain transition-transform transform hover:scale-110 duration-300"
          />
          <h1 className="text-xl font-extrabold text-blue-700 hover:text-blue-800 transition duration-300">
            ResolveIt
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-base font-medium text-gray-700 hover:text-blue-700 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-base font-medium text-gray-700 hover:text-blue-700 transition duration-300">
            About
          </Link>
          <Link to="/dashboard" className="text-base font-medium text-gray-700 hover:text-blue-700 transition duration-300">
            Dashboard
          </Link>
          <Link to="/contactUs" className="text-base font-medium text-gray-700 hover:text-blue-700 transition duration-300">
            Contact Us
          </Link>
        </nav>
        <Link
          to="/login"
          className="px-4 py-2 text-base font-semibold bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </header>

      {/* Main Section */}
      <main className={`flex-grow flex items-center justify-center px-6 md:px-12 py-16 bg-gradient-to-r from-blue-800 to-blue-600 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
        <div className="flex flex-col md:flex-row md:space-x-12 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className={`w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 transform ${isLoaded ? 'scale-100' : 'scale-75'} transition-transform duration-1000`}>
            <img
              src={learningImage}
              alt="Learning"
              className="w-full max-w-lg transform transition-transform hover:scale-110 duration-300"
            />
          </div>
          {/* Right Section */}
          <div className={`w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 leading-tight transition-opacity duration-500 ease-in-out">
              Your <span className="text-blue-300">All-in-One</span> Solution for Campus Issue Resolution
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl transition-opacity duration-500 ease-in-out">
              Report and resolve student issues effortlessly for a better campus experience.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <Link
                to="/submit-issue"
                className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 transition duration-300 transform hover:scale-105"
              >
                Submit an Issue
              </Link>
              <Link
                to="/dashboard"
                className="px-6 py-3 text-lg font-semibold bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 text-center shadow-inner">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Student Issues and Counseling System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
