import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios

function AuthPage() {
  const [userType, setUserType] = useState('STUDENT'); // To toggle between student and admin
  const [fullName, setFullName] = useState(''); // For signup (create account)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle errors
  const navigate = useNavigate(); // Initialize navigate

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const api = "http://localhost:3002/"

  // Handle create account API call
  const handleCreateAccount = async () => {
    try {
      const response = await axios.post(`${api}auth/signup`, {
        fullName,
        email,
        password,
        role: userType, // Send userType (student or admin) as the role
      });
      const { user } = response.data;

      // Navigate based on user type after account creation
      if (user.role === 'STUDENT') {
        alert("Student Signed up successfully");
        navigate('/login');
      } else if (user.role === 'ADMIN') {
        alert("Admin signed up successfully");
        navigate('/login');
      }
    } catch (error) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">

        {/* User Type Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2 text-sm">Signup As:</label>
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create a New {userType} Account</h2>
          <motion.input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            onClick={handleCreateAccount} // Trigger the account creation action
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>

          {/* Already have an account? */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthPage;




