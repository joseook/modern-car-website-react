import React from 'react';
import { usedCars } from '../data/cars';
import { Star, Clock } from 'lucide-react';

interface UsedCarsProps {
  onCarSelect: (carId: number) => void;
}

const UsedCars: React.FC<UsedCarsProps> = ({ onCarSelect }) => {
  return (
    <section id="used-cars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Premium Used Vehicles</h2>
          <p className="text-gray-600">Discover our selection of certified pre-owned luxury cars</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usedCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Certified
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">{car.year}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 text-sm mb-2">{car.specs}</p>
                <p className="text-gray-500 text-sm mb-4">Mileage: {car.mileage} miles</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${car.price}</span>
                  <button 
                    onClick={() => onCarSelect(car.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsedCars;