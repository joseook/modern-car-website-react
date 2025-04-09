# Modern Car Dealership Website

A modern, responsive car dealership website built with React, TypeScript, and Tailwind CSS. This project showcases both new and used luxury vehicles with a focus on user experience and modern design principles.

![Website Preview](https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80)

## Features

### 1. Modern UI Components
- Responsive navigation bar with smooth scrolling
- Hero section with dynamic background
- Featured vehicles showcase
- Used cars section
- About us section with key benefits
- Contact form
- Detailed car information modal

### 2. Car Listings
- **New Cars Section**
  - Premium vehicle showcase
  - High-quality images
  - Quick specifications
  - Price information
  - Rating display
  - "New" badge indicator

- **Used Cars Section**
  - Certified pre-owned vehicles
  - Mileage information
  - Year model display
  - Condition status
  - "Certified" badge indicator

### 3. Detailed Car Information
Each car listing includes:
- High-resolution images
- Comprehensive specifications
  - Year
  - Mileage (for used cars)
  - Transmission type
  - Fuel type
  - Engine specifications
- Feature list
- Detailed description
- Pricing
- Call-to-action for test drives

### 4. Interactive Features
- Modal windows for detailed car information
- Responsive image galleries
- Interactive buttons and hover effects
- Smooth transitions and animations

## Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── About.tsx         # About section component
│   ├── CarDetails.tsx    # Car details modal
│   ├── Contact.tsx       # Contact form section
│   ├── FeaturedCars.tsx  # New cars showcase
│   ├── Hero.tsx         # Hero section with banner
│   ├── Navbar.tsx       # Navigation component
│   └── UsedCars.tsx     # Used cars section
├── data/
│   └── cars.ts          # Car data and interfaces
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Component Details

### Navbar
- Fixed positioning
- Responsive design
- Smooth scroll navigation
- Company branding

### Hero Section
- Full-screen design
- Dynamic background image
- Call-to-action button
- Overlay text with animation

### FeaturedCars
- Grid layout for car cards
- Rating system
- Price display
- Quick specifications
- View details button
- New car indicators

### UsedCars
- Similar layout to FeaturedCars
- Mileage information
- Year model display
- Certified status badge
- Condition information

### CarDetails Modal
- Comprehensive car information
- Large image display
- Detailed specifications
- Feature list
- Description
- Pricing
- Test drive scheduling

### About Section
- Three-column layout
- Icon illustrations
- Key benefits
- Company values

### Contact Section
- Contact form
- Location information
- Phone and email details
- Social media links

## Data Structure

The car data is structured using TypeScript interfaces:

```typescript
interface Car {
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
```

## Styling

The project uses Tailwind CSS for styling with:
- Responsive design principles
- Custom color scheme
- Consistent spacing
- Modern typography
- Smooth transitions
- Interactive hover states

## Best Practices

1. **Component Organization**
   - Modular component structure
   - Clear separation of concerns
   - Reusable components
   - TypeScript interfaces for type safety

2. **Performance**
   - Optimized images
   - Lazy loading where appropriate
   - Efficient state management
   - Minimal re-renders

3. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support
   - Color contrast compliance

4. **Code Quality**
   - TypeScript for type safety
   - ESLint for code quality
   - Consistent code formatting
   - Clear component props interfaces

## Future Enhancements

1. **Features to Add**
   - Search and filtering system
   - Car comparison tool
   - Financing calculator
   - Test drive scheduling system
   - User authentication
   - Favorites/Wishlist

2. **Technical Improvements**
   - Backend integration
   - Database implementation
   - User accounts
   - Admin dashboard
   - Analytics integration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Responsive images
- Code splitting
- Tree shaking
- Minification
- Caching strategies

## Deployment

The project can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.