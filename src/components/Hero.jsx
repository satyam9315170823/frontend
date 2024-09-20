
import React, { useState, useEffect } from 'react';
import { assets } from "../assets/assets";

const Hero = () => {
  const carouselItems = [
    {
      title: 'Latest Arrivals',
      subtitle: 'OUR BESTSELLERS',
      buttonText: 'SHOP NOW',
      img: assets.banner5, // Replace with your first image
    },
    {
      title: 'New Collection',
      subtitle: 'OUR FEATURED',
      buttonText: 'EXPLORE NOW',
      img: assets.banner2, // Replace with your second image
    },
    {
      title: 'Exclusive Deals',
      subtitle: 'LIMITED TIME',
      buttonText: 'BUY NOW',
      img: assets.banner3, // Replace with your third image
    },
    {
      title: 'Exclusive Deals',
      subtitle: 'LIMITED TIME',
      buttonText: 'BUY NOW',
      img: assets.banner4, // Replace with your third image
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false); // For triggering animations

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
      }, 500); // Duration for fade-out before switching slides
    }, 6000); // Interval between slides

    return () => clearInterval(interval); // Clean up the interval
  }, [carouselItems.length]);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 overflow-hidden'>
      {/* Left side (text) */}
      <div className={`w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2 '>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>{carouselItems[currentSlide].subtitle}</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            {carouselItems[currentSlide].title}
          </h1>
          <div className='flex items-center gap-2 '>
            <p className='font-semibold text-sm md:text-base'>{carouselItems[currentSlide].buttonText}</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Right side (image) */}
      <div className={`w-full sm:w-1/2 transition-transform duration-500 ease-in-out transform ${animate ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
        <img className='w-full' src={carouselItems[currentSlide].img} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;



// import React, { useState, useEffect } from 'react';
// import { assets } from "../assets/assets";

// const Hero = () => {
//   const carouselItems = [
//     {
//       title: 'Latest Arrivals',
//       subtitle: 'OUR BESTSELLERS',
//       buttonText: 'SHOP NOW',
//       img: assets.hero_img, // Replace with your first image
//     },
//     {
//       title: 'New Collection',
//       subtitle: 'OUR FEATURED',
//       buttonText: 'EXPLORE NOW',
//       img: assets.banner4, // Replace with your second image
//     },
//     {
//       title: 'Exclusive Deals',
//       subtitle: 'LIMITED TIME',
//       buttonText: 'BUY NOW',
//       img: assets.hero_img, // Replace with your third image
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [animate, setAnimate] = useState(false); // For triggering animations

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimate(true);
//       setTimeout(() => {
//         setAnimate(false);
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
//       }, 500); // Duration for fade-out before switching slides
//     }, 6000); // Interval between slides

//     return () => clearInterval(interval); // Clean up the interval
//   }, [carouselItems.length]);

//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400 overflow-hidden'>
//       {/* Left side (image) */}
//       <div className={`w-full sm:w-1/2 transition-transform duration-500 ease-in-out transform ${animate ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
//         <img className='w-full' src={carouselItems[currentSlide].img} alt="hero-img" />
//       </div>

//       {/* Right side (text) */}
//       <div className={`w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
//         <div className='text-[#414141]'>
//           <div className='flex items-center gap-2 '>
//             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//             <p className='font-medium text-sm md:text-base'>{carouselItems[currentSlide].subtitle}</p>
//           </div>
//           <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
//             {carouselItems[currentSlide].title}
//           </h1>
//           <div className='flex items-center gap-2 '>
//             <p className='font-semibold text-sm md:text-base'>{carouselItems[currentSlide].buttonText}</p>
//             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
