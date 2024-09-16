// src/components/CounselingResources.js
import React from 'react';

function CounselingResources() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Counseling Resources</h1>
      <p className="text-lg mb-8 max-w-2xl text-center text-gray-700">
        Here you can find various resources for counseling and support. Please contact the appropriate department or use the links provided.
      </p>
      <ul className="list-disc list-inside">
        <li className="text-lg mb-2">Mental Health Counseling - <a href="#" className="text-blue-500">Contact</a></li>
        <li className="text-lg mb-2">Academic Support - <a href="#" className="text-blue-500">Contact</a></li>
        <li className="text-lg mb-2">Personal Development - <a href="#" className="text-blue-500">Contact</a></li>
      </ul>
    </div>
  );
}

export default CounselingResources;
 