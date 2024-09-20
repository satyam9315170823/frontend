

import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaSeedling, FaAppleAlt, FaHeartbeat, FaLeaf, FaStar, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'; // Example icons

const About = () => {
  return (
    <div>
      {/* Hero Section */}    
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section h-screen bg-cover bg-center text-white relative flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.a_header})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <motion.div
          className="relative z-10 text-center px-4 md:px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Nourishing Your Health, Naturally
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/collection"
              className="mt-8 inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Shop Now
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Story Section */}
      <section className="our-story-section py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="mt-4 text-center text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Founded with a passion for health and wellness, our company has grown into a trusted provider of quality seeds, dry fruits, and natural health products.
          </motion.p>
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.img
              src={assets.m4}
              alt="Our Story Image 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={assets.m2}
              alt="Our Story Image 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="our-products-section py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Products
          </motion.h2>
          <motion.p
            className="mt-4 text-center text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore our wide range of products designed to support your health and wellness journey.
          </motion.p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="product-category text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * 0, duration: 0.5 }}
            >
              <FaSeedling className="text-6xl mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seeds</h3>
              <p className="text-gray-600">A variety of high-quality seeds to meet all your gardening needs.</p>
            </motion.div>
            <motion.div
              className="product-category text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * 1, duration: 0.5 }}
            >
              <FaAppleAlt className="text-6xl mx-auto text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dry Fruits</h3>
              <p className="text-gray-600">Premium quality dry fruits for your health and snacking pleasure.</p>
            </motion.div>
            <motion.div
              className="product-category text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * 2, duration: 0.5 }}
            >
              <FaLeaf className="text-6xl mx-auto text-green-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Herbs</h3>
              <p className="text-gray-600">Discover our range of herbs known for their natural benefits.</p>
            </motion.div>
            <motion.div
              className="product-category text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * 3, duration: 0.5 }}
            >
              <FaHeartbeat className="text-6xl mx-auto text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Organic Products</h3>
              <p className="text-gray-600">A collection of organic products for a healthier lifestyle.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality Section */}
      <section className="commitment-section py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Commitment to Quality
          </motion.h2>
          <motion.p
            className="text-center text-lg md:text-xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We are dedicated to providing products that meet the highest standards of quality and purity. Our commitment is reflected in every aspect of our business.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="commitment-item text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaShieldAlt className="text-4xl mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">We are committed to environmentally sustainable practices, ensuring our operations are green and eco-friendly.</p>
            </motion.div>
            <motion.div
              className="commitment-item text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaStar className="text-4xl mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Our products undergo rigorous quality checks to ensure they meet the highest standards before reaching our customers.</p>
            </motion.div>
            <motion.div
              className="commitment-item text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaCheckCircle className="text-4xl mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">We prioritize our customers' satisfaction, offering exceptional service and support to ensure a positive experience with our products.</p>
            </motion.div>
          </div>
        </div>
      </section>
      

<section className="cta-section py-16 bg-green-500 text-white text-center">
<div className="container mx-auto px-4 md:px-8">
  <motion.h2
    className="text-2xl md:text-3xl lg:text-4xl font-bold"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Ready to Elevate Your Health?
  </motion.h2>
  <motion.p
    className="mt-4 text-lg md:text-xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    Explore our wide range of natural products designed to support your wellness journey.
  </motion.p>
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <NavLink
      to="/collection"
      className="mt-8 inline-block px-6 py-3 bg-white text-green-500 font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
    >
      Shop Now
    </NavLink>
  </motion.div>
</div>
</section>
    </div>
  );
};

export default About;

