import React, { useState } from 'react';
import '../styles/ResponsiveButton.css'; // Import your CSS file for styling
import { handleScrollTo } from '../utils/scrollUtil.ts';

interface ButtonProps {
  text: string;
}

const ResponsiveButton: React.FC<ButtonProps> = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    handleScrollTo();
  };

  return (
    <button
      className={`responsive-button ${hovered ? 'hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
};

export default ResponsiveButton;
