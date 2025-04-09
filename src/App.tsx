import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import UsedCars from './components/UsedCars';
import About from './components/About';
import Contact from './components/Contact';
import CarDetails from './components/CarDetails';
import { newCars, usedCars } from './data/cars';

function App() {
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  const handleCarSelect = (carId: number) => {
    setSelectedCarId(carId);
  };

  const handleCloseDetails = () => {
    setSelectedCarId(null);
  };

  const selectedCar = [...newCars, ...usedCars].find(car => car.id === selectedCarId);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCars onCarSelect={handleCarSelect} />
      <UsedCars onCarSelect={handleCarSelect} />
      <About />
      <Contact />
      {selectedCar && (
        <CarDetails car={selectedCar} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default App;