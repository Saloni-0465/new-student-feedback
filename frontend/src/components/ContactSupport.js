import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Add your form submission logic here

    // Set submitted state to true and navigate to success page
    setSubmitted(true);
    navigate('/success');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full text-center py-32 bg-gradient-to-br from-blue-700 to-blue-500">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-8xl font-extrabold tracking-wider text-white">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
            We are here to help you and answer any questions you may have.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 text-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-start px-8"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-700">Get in Touch</h2>
          <p className="text-lg text-gray-800 mb-6">
            Have questions or feedback? Fill out the form and we’ll get back to you shortly!
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-block px-8 py-2 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-500"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-4 text-blue-700">We're Here to Help!</h2>
            <p className="text-lg text-gray-800 mb-4">
              You can also reach us via email:
            </p>
            <p className="text-lg text-blue-500 font-semibold">
              support@example.com
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default ContactPage;

