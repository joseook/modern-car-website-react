export interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  specs: string;
  description: string;
  features: string[];
  year: number;
  mileage?: string;
  condition: 'New' | 'Used';
  transmission: string;
  fuelType: string;
  engine: string;
}

export const newCars: Car[] = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "89,990",
    image: "https://images.unsplash.com/photo-1617788138660-79a851b09bbe?auto=format&fit=crop&q=80",
    specs: "Electric • 405mi range • 0-60 in 3.1s",
    description: "Experience the future of driving with the Tesla Model S. This all-electric luxury sedan combines exceptional performance with cutting-edge technology.",
    features: ["Autopilot", "17-inch touchscreen", "Wireless charging", "Premium audio system", "Air suspension"],
    year: 2024,
    condition: "New",
    transmission: "Electric",
    fuelType: "Electric",
    engine: "Dual Motor AWD"
  },
  {
    id: 2,
    name: "Porsche 911",
    price: "106,100",
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80",
    specs: "443hp • RWD • 0-60 in 3.5s",
    description: "The iconic Porsche 911 continues to set the standard for sports cars, delivering unmatched performance and driving pleasure.",
    features: ["Sport Chrono Package", "LED Matrix headlights", "Sports exhaust system", "14-way power seats", "BOSE® surround sound"],
    year: 2024,
    condition: "New",
    transmission: "8-speed PDK",
    fuelType: "Premium Gasoline",
    engine: "3.0L Twin-Turbo Flat-6"
  },
  {
    id: 3,
    name: "BMW M4",
    price: "74,700",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80",
    specs: "503hp • AWD • 0-60 in 3.4s",
    description: "The BMW M4 Competition combines aggressive styling with track-ready performance, creating the ultimate driving machine.",
    features: ["M Drive Professional", "Carbon fiber trim", "Head-up Display", "Harman Kardon audio", "M Sport seats"],
    year: 2024,
    condition: "New",
    transmission: "8-speed M Steptronic",
    fuelType: "Premium Gasoline",
    engine: "3.0L Twin-Turbo I-6"
  }
];

export const usedCars: Car[] = [
  {
    id: 4,
    name: "Mercedes-Benz C63 AMG",
    price: "45,990",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    specs: "469hp • RWD • 0-60 in 3.9s",
    description: "This pre-owned C63 AMG delivers the perfect blend of luxury and performance, maintained to the highest standards.",
    features: ["AMG RIDE CONTROL", "Burmester sound system", "Performance seats", "360° camera", "Night package"],
    year: 2020,
    mileage: "28,450",
    condition: "Used",
    transmission: "9-speed AMG SPEEDSHIFT",
    fuelType: "Premium Gasoline",
    engine: "4.0L Biturbo V8"
  },
  {
    id: 5,
    name: "Audi RS5",
    price: "52,800",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
    specs: "444hp • AWD • 0-60 in 3.7s",
    description: "This certified pre-owned RS5 combines everyday usability with supercar performance, featuring Audi's legendary Quattro system.",
    features: ["Virtual cockpit", "Bang & Olufsen sound", "Carbon fiber inlays", "Sport differential", "Dynamic steering"],
    year: 2021,
    mileage: "19,875",
    condition: "Used",
    transmission: "8-speed Tiptronic",
    fuelType: "Premium Gasoline",
    engine: "2.9L Twin-Turbo V6"
  },
  {
    id: 6,
    name: "Lexus LC 500",
    price: "61,990",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80",
    specs: "471hp • RWD • 0-60 in 4.4s",
    description: "Experience luxury grand touring at its finest with this meticulously maintained LC 500, featuring a naturally aspirated V8.",
    features: ["Mark Levinson audio", "Glass roof", "Adaptive suspension", "Semi-aniline leather", "Dynamic radar cruise"],
    year: 2022,
    mileage: "15,230",
    condition: "Used",
    transmission: "10-speed Direct-Shift",
    fuelType: "Premium Gasoline",
    engine: "5.0L V8"
  }
];