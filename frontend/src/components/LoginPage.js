// src/components/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">Login</h1>
        <p className="text-lg mb-8 text-gray-700 text-center">
          Please choose your role to log in.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/student-login"
            className="px-6 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Login as Student
          </Link>
          <Link
            to="/admin-login"
            className="px-6 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Login as Admin/Staff
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

