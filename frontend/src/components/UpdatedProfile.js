import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileUpdateSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <h1 className="text-5xl font-bold mb-6">Profile Updated Successfully!</h1>
      <p className="text-lg mb-8">Your profile has been updated.</p>
      <button 
        onClick={() => navigate('/')} 
        className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ProfileUpdateSuccess;
