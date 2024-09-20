import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import c_header from '../assets/c_header.jpg';
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "f62dc234-08b1-4bfb-be11-9e11ba3c2d71"); // Replace with your actual API key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-form-container">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section h-80 bg-cover bg-center  text-white relative flex items-center justify-center"
        style={{ backgroundImage:`url(${c_header})` }}
      >
        <div className="bg-gradient-to-r from-black to-transparent  absolute inset-0"></div>
        <motion.div
          className="relative z-10 text-center px-4 md:px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl">We'd love to hear from you!</p>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-3xl text-blue-800 md:text-4xl lg:text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-center  text-blue-600 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>

          <form
            onSubmit={onSubmit}
            className="w-full max-w-lg mx-auto  bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="form-group">
                <label htmlFor="name" className="block text-blue-600">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-blue-600">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="form-group mt-6">
              <label htmlFor="message" className="block text-blue-600">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
            {result && (
              <div className="text-center mt-4">
                <span className="text-lg font-medium">{result}</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Contact Information
          </motion.h2>
          <div className="mt-8 flex flex-col md:flex-row md:justify-around">
            <motion.div
              className="contact-item text-center mb-6 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <FaPhoneAlt className="text-4xl mx-auto text-blue-500" />
              <p className="mt-4 text-lg">08882491205</p>
            </motion.div>
            <motion.div
              className="contact-item text-center mb-6 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FaEnvelope className="text-4xl mx-auto text-blue-500" />
              <p className="mt-4 text-lg">matrupitruchhaya01@gmail.com</p>
            </motion.div>
            <motion.div
              className="contact-item text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <FaMapMarkerAlt className="text-4xl mx-auto text-blue-500" />
              <p className="mt-4 text-lg">Saket,New Delhi</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-16 bg-gray-400 text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Stay Connected with Us
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Follow us on social media for the latest updates and offers.
          </motion.p>
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.linkedin.com/company/krishi-naturals/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl text-white" />
            </a>
            <a href="https://www.linkedin.com/company/krishi-naturals/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-white" />
            </a>
            <a href="https://www.linkedin.com/company/krishi-naturals/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl text-white" />
            </a>
            <a href="https://www.instagram.com/krishinaturals/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
