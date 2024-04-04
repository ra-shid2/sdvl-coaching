import React from 'react';
import '../styles/HeroSection.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  imagePath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, imagePath }) => {
  return (
    <div className="hero-section">
      {/* First column */}
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        {subtitle && (
  (ctaText && (
    <Button variant="outlined" color="primary" size="large">{ctaText}</Button>
  )) || (
    <Divider style={{ height: '2px', width: '25%', backgroundColor: '#f5f5f5', borderRadius: '6px' }} />
  )
)}

      </div>

      {/* Second column */}
      <div className="hero-image">
        <img src={imagePath} alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
