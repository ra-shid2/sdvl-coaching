import React from 'react';
import '../styles/HeroSection.css';
import Divider from '@mui/material/Divider';
import ResponsiveButton from './ResponsiveButton';


interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  imagePath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, imagePath }) => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <div className="hero-section">
      {/* First column */}
      <div className="hero-content">
        <h1 className={`hero-title ${subtitle == '' ? 'centered' : ''}`}>{title}</h1>
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        {subtitle && (
          (ctaText && (
            <ResponsiveButton onClick={handleClick} text={ctaText} />
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
