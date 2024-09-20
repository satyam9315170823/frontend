import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate a newsletter subscription API request
    setTimeout(() => {
      setSuccess('Thank you for subscribing to Krishi Naturals!');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="text-center p-6">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe to Krishi Naturals for Updates
      </p>
      <p className="text-gray-500 mt-3">
        Krishi Naturals Provides You the Best Organic Foods from Origins
      </p>
      
      <form
        className="w-full sm:w-1/2 flex items-center mx-auto my-6"
        onSubmit={onsubmitHandler}
      >
        <input
          className={`w-full py-4 px-4 text-sm border border-gray-300 outline-none  rounded-l-lg ${error && 'border-red-500'}`}
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-black text-white text-xs px-8 py-4 rounded-r-lg -ml-px hover:bg-gray-800 transition-all"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>

      {error && <p className="text-green-800 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-800 text-sm mt-2">{success}</p>}
    </div>
  );
};

export default NewsletterBox;
