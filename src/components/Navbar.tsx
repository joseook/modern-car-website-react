import React from 'react';
import { Car } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">AutoElite</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#featured" className="text-gray-600 hover:text-blue-600 transition-colors">Featured</a>
            <a href="#models" className="text-gray-600 hover:text-blue-600 transition-colors">Models</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;