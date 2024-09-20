import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 pt-16 pb-8">
      {/* Footer content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mx-5 md:mx-20 text-sm">
        {/* Logo and description */}
        <div className="animate-fade-in-left">
          <img src={assets.logo99} className="mb-5 w-20 hover:scale-110 transition-transform duration-300" alt="Krishi Naturals Logo" />
          <p className="text-gray-700 w-full md:w-3/4">
            Krishi Naturals is dedicated to providing sustainable, organic farming solutions.
            Our eco-friendly products support healthier crops and a greener environment.
            We believe in empowering farmers with natural, high-quality resources.
            Grow naturally, harvest the future with Krishi Naturals.
          </p>
        </div>

        {/* Company links */}
        <div className="animate-fade-in-up">
          <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-600 hover:text-gray-900 transition-colors">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li> {/* Blog page link */}
          </ul>
        </div>

        {/* Contact information */}
        <div className="animate-fade-in-up delay-100">
          <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600 hover:text-gray-900 transition-colors">
            <li>Saket, New Delhi</li>
            <li>08882491205</li>
            <li>matrupitruchhaya01@gmail.com</li>
          </ul>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up delay-200">
          <p className="text-xl font-medium mb-5 text-gray-800">FOLLOW US</p>
          <ul className="flex gap-5 text-gray-600">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaFacebookF className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/krishinaturals/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div>
        <hr className="border-gray-300 my-5" />
        <p className="text-sm text-center text-gray-500">
          &copy; 2024 Krishi Naturals - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
