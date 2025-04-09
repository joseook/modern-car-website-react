import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Your Perfect Drive
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience luxury and performance with our exclusive collection of premium vehicles.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Explore Models
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;