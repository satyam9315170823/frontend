import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import BlogData from '../assets/BlogData';

const BlogHome = () => {
  const controls = useAnimation();

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl mb-8">BLOGS</h1>

      {/* Horizontally scrollable container */}
      <div className="relative">
        <motion.div
          className="flex space-x-6 overflow-x-auto pb-4"
          animate={controls}
          transition={{ type: 'tween', duration: 0.5 }}
          onAnimationComplete={() => controls.start({ x: 0 })}
        >
          {BlogData.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="flex-shrink-0 w-72">
              <div className="relative group w-full h-80">
                {/* Blog Image */}
                <img
                  src={blog.bannerImage}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Title */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="text-white text-lg font-bold text-center px-2">{blog.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogHome;
