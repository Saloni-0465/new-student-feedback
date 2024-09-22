import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ContactSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-500 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8"
      >
        <h1 className="text-4xl font-bold mb-4">Success!</h1>
        <p className="text-lg mb-6">
          Your message has been sent successfully. We will get back to you shortly!
        </p>
        <button
          onClick={() => navigate('/')} // Navigate back to the contact page
          className="py-2 px-4 bg-white text-blue-700 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Go Back to Homepage
        </button>
      </motion.div>
    </div>
  );
}

export default ContactSuccessPage;
