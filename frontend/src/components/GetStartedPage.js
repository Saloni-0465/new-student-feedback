import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // For toggling between login and create account
  const [userType, setUserType] = useState("student"); // To toggle between student and admin
  const navigate = useNavigate(); // Initialize navigate

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  // Simulate login action
  const handleLogin = () => {
    if (userType === "student") {
      navigate("/dashboard/*"); // Navigate to the student dashboard
    } else if (userType === "admin") {
      navigate("/admin-dashboard"); // Navigate to the admin dashboard
    }
  };

  // Simulate account creation action
  const handleCreateAccount = () => {
    // Simulate account creation (you would handle actual registration logic here)
    if (userType === "student") {
      navigate("/dashboard/*"); // Navigate to the student dashboard after account creation
    } else if (userType === "admin") {
      navigate("/admin-dashboard"); // Navigate to the admin dashboard after account creation
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        {/* Toggle between Login and Create Account */}
        <div className="flex justify-around border-b mb-6">
          <button
            className={`text-xl pb-2 transition-all duration-300 ${isLogin ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`text-xl pb-2 transition-all duration-300 ${!isLogin ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Create Account
          </button>
        </div>

        {/* User Type Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2 text-sm">Login as:</label>
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login to your {userType} account</h2>
            <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg mb-4 transition duration-300">
              <FcGoogle className="mr-2" size={24} /> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg mb-6 transition duration-300">
              <AiFillApple className="mr-2" size={24} /> Continue with Apple
            </button>

            <div className="text-center text-gray-500 mb-4">or use your email</div>
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>
            <button 
              onClick={handleLogin} // Trigger the login action
              className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </motion.div>
        ) : (
          // Create Account Form
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create a New {userType} Account</h2>
            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <button 
              onClick={handleCreateAccount} // Trigger the account creation action
              className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
