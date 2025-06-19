
import React, { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ClientLogos from '../components/ClientLogos';
import FeaturesShowcase from '../components/FeaturesShowcase';
import PortfolioSlider from '../components/PortfolioSlider';
import ProductGrid from '../components/ProductGrid';
import DataVisualization from '../components/DataVisualization';
import TestimonialsSection from '../components/TestimonialsSection';
import UISpotlight from '../components/UISpotlight';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {isLoading && <Preloader />}
        <CustomCursor />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <ClientLogos />
        <FeaturesShowcase />
        <PortfolioSlider />
        <ProductGrid />
        <DataVisualization />
        <TestimonialsSection />
        <UISpotlight />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
