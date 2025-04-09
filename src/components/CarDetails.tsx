import React from 'react';
import { Car } from '../data/cars';
import { X } from 'lucide-react';

interface CarDetailsProps {
  car: Car;
  onClose: () => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="aspect-video mb-6">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Year</span>
                  <span className="font-medium">{car.year}</span>
                </div>
                {car.mileage && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mileage</span>
                    <span className="font-medium">{car.mileage} miles</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Condition</span>
                  <span className="font-medium">{car.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transmission</span>
                  <span className="font-medium">{car.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fuel Type</span>
                  <span className="font-medium">{car.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Engine</span>
                  <span className="font-medium">{car.engine}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>
          
          <div className="mt-8 flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-600">Price</span>
              <p className="text-3xl font-bold text-blue-600">${car.price}</p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;