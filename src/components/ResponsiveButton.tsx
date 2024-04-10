import React, { useState } from 'react';
import '../styles/ResponsiveButton.css'; // Import your CSS file for styling

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const ResponsiveButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`responsive-button ${hovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </button>
  );
};

export default ResponsiveButton;
