import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-8">
      {/* Success Animation */}
      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-8">
        <svg className="w-16 h-16 text-blue-600 animate-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>
      {/* Success Message */}
      <p className="text-2xl font-semibold text-blue-800 mb-6 animate-fade-in">Issue submitted successfully!</p>
      {/* Link to go back to the form */}
      <Link to="/submit-issue" className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300">
        Submit another issue
      </Link>
    </div>
  );
}

export default SuccessPage;


