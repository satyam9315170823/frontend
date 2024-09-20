import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../assets/BlogData';
import { FaFlask, FaSeedling, FaSun, FaAppleAlt, FaRecycle, FaLeaf } from 'react-icons/fa'; // Import React Icons

const icons = {
  FlaxseedIcon: <FaFlask />, // Map icon names to actual React Icons
  PumpkinSeedIcon: <FaSeedling />,
  SunflowerSeedIcon: <FaSun />,
  AlmondsIcon: <FaAppleAlt />,
  WalnutsIcon: <FaAppleAlt />,
  DatesIcon: <FaAppleAlt />,
  GinsengIcon: <FaLeaf />,
  AshwagandhaIcon: <FaLeaf />,
  HornyGoatWeedIcon: <FaLeaf />,
  ChiaSeedsIcon: <FaSeedling />,
  FlaxseedsIcon: <FaFlask />,
  PumpkinSeedsIcon: <FaSeedling />,
  NutritionIcon: <FaAppleAlt />,
  EnvironmentIcon: <FaRecycle />,
  HealthIcon: <FaLeaf />,
};

const BlogContent = () => {
  const { id } = useParams();
  const blog = BlogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{blog.title}</h1>
      <img
        src={blog.bannerImage}
        alt={blog.title}
        className="w-full h-auto object-contain mb-8 rounded-lg" // Ensure the banner image is fully visible
      />

      {blog.content.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">{section.sectionTitle}</h2>
          
          {section.image && (
            <div className="mb-4">
              <img
                src={section.image}
                alt={section.sectionTitle}
                className="w-full h-auto object-contain rounded-lg shadow-lg" // Ensure section images are fully visible
              />
            </div>
          )}
          
          {section.text && <p className="text-lg mb-6">{section.text}</p>}
          
          {section.points && (
            <ul className="list-none space-y-4">
              {section.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-4">
                  {point.icon && (
                    <div className="w-6 h-6">
                      {icons[point.icon]} {/* Render the corresponding icon */}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
