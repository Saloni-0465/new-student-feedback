import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '/Users/salonisharma/student-issues-counseling-system/frontend/src/newton-logo-2.png';

function HomePage() {
  return (
    <div className="min-h-screen bg-blue-700 flex flex-col text-white">
      <header className="w-full py-6 flex items-center justify-between px-4">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 object-contain rounded-full ml-4"
        />
        <h1 className="text-6xl font-bold flex-1 text-center">ResolveIt</h1>
        <Link
          to="/login"
          className="px-4 py-2 text-lg font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300"
        >
          Get started
        </Link>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center w-full text-center">
        <h2 className="text-5xl font-bold mb-4">Your All-in-One Solution for Campus Issue Resolution</h2>
        <p className="text-lg mb-8 max-w-2xl text-gray-300">
          Effortlessly report and resolve student issues, ensuring quick support for a smoother campus experience.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Link
            to="/submit-issue"
            className="px-8 py-4 text-xl font-semibold bg-white hover:bg-gray-100 text-blue-700 rounded-full shadow-lg transition duration-300" // Changed to rounded-full
          >
            Submit an Issue
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 text-xl font-semibold bg-white hover:bg-gray-100 text-blue-700 rounded-full shadow-lg transition duration-300" // Changed to rounded-full
          >
            Go to Dashboard
          </Link>
        </div>
      </main>

      <footer className="w-full py-4 bg-blue-800 text-center">
        <p className="text-sm">&copy; 2024 Student Issues and Counseling System</p>
      </footer>
    </div>
  );
}

export default HomePage;