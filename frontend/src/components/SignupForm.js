import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

function SignupPage() {
  const [userType, setUserType] = useState('STUDENT');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const api = "http://localhost:3002/";

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleCreateAccount = async () => {
    if (!fullName || !email || !password) {
      setError('All fields are required.');
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const endpoint =
        userType === "STUDENT" ? "student/signup" : "admin/signup";
      const response = await axios.post(`${api}${endpoint}`, {
        fullName,
        email,
        password,
        role: userType,
      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      setError("Error creating Account");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
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
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Create a New {userType} Account
          </h2>
          <motion.input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
          />
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <button
            onClick={handleCreateAccount}
            disabled={loading}
            className={`w-full py-3 ${loading ? 'bg-gray-400' : 'bg-blue-600'} text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
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

export default SignupPage;
