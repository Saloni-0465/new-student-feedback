import React from 'react';
import image from '/Users/salonisharma/Desktop/student-issues-counseling-system/frontend/src/components/photos/IMG_5899.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPage() {
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
            Student Issues Resolver
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
            Designed to empower students by providing solutions to their academic, administrative, and personal problems with a single platform.
          </p>
          <a
            href="#about-me"
            className="inline-block px-12 py-4 mt-12 text-lg text-gray-900 bg-white rounded-full shadow-2xl hover:bg-gray-100 transform hover:scale-110 transition-transform duration-500"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="bg-white p-10 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-3xl transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-4 text-blue-700">Student-Centric Solutions</h3>
            <p className="text-gray-800">
              A platform built for students, offering personalized resources and helping to solve both academic and personal challenges efficiently.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-3xl transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-4 text-blue-700">Transparent Issue Tracking</h3>
            <p className="text-gray-800">
              Our advanced tracking system ensures you can report issues and follow their resolution with complete transparency.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-3xl transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-4 text-blue-700">Guidance & Support</h3>
            <p className="text-gray-800">
              Access dedicated resources and support channels to overcome academic, administrative, and personal hurdles.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Developer Section */}
      <section id="about-me" className="py-32 text-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-6xl font-bold mb-8 text-blue-700">
            About the Developer
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-12">
            I'm a passionate developer who understands the struggles of students, and I'm committed to providing a platform that helps you focus on what really matters.
          </p>

          {/* Developer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mb-12"
          >
            <img
              src={image}
              alt="Developer"
              className="w-56 h-56 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500"
            />
          </motion.div>

          <a
            href="https://saloni-0465.github.io/Personal-Portfolio/"
            className="inline-block px-10 py-4 text-lg text-gray-900 bg-white rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-500"
          >
            See My Work
          </a>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-blue-700 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Resolve Your Issues?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Begin by submitting your issue or exploring our resources. Let's make your student life easier!
          </p>
          <Link
            to="/login"
            className="inline-block px-12 py-4 bg-white text-blue-700 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-110 transition-all duration-500"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutPage;
