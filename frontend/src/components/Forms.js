import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function LoginForm({ email, setEmail, password, setPassword, handleLogin, error }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login to your account</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <motion.input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      />
      <button
        onClick={handleLogin} // Trigger the login action
        className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>
    </motion.div>
  );
}

function SignupForm({ fullName, setFullName, email, setEmail, password, setPassword, handleCreateAccount, error }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create a New Account</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <motion.input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
  );
}

export { LoginForm, SignupForm };
