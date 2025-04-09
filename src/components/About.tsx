import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600">Experience excellence in automotive luxury</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Selection</h3>
            <p className="text-gray-600">
              Carefully curated collection of luxury vehicles from the world's top manufacturers.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Clock className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Service</h3>
            <p className="text-gray-600">
              Professional team dedicated to providing exceptional customer service.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Every vehicle undergoes rigorous inspection and certification process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;