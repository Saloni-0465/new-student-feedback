import React, { useState } from 'react';
import { MdEmail, MdPhone, MdSchool, MdCalendarToday } from 'react-icons/md'; // Importing Material Icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

function UpdateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle your profile update logic (API call, etc.)
    // For now, we will just simulate the success and navigate
    alert('Profile updated successfully!'); // Display success alert

    // Clear form
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setYear('');

    // Navigate to the success page
    navigate('/profile-update-success'); 
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-800">Update Profile</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105">
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-800 text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6 flex items-center">
          <MdEmail className="text-2xl text-gray-600 mr-3"/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-6 flex items-center">
          <MdPhone className="text-2xl text-gray-600 mr-3"/>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Course */}
        <div className="mb-6 flex items-center">
          <MdSchool className="text-2xl text-gray-600 mr-3"/>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
            placeholder="Course"
            required
          />
        </div>

        {/* Year */}
        <div className="mb-6 flex items-center">
          <MdCalendarToday className="text-2xl text-gray-600 mr-3"/>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
            required
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
