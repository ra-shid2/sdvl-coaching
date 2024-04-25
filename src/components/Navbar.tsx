import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Navbar.css'; // Import your CSS file for styling
import { handleScrollTo } from '../utils/scrollUtil.ts';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-left">
        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
        <h3>David Coaching</h3>
      </div>
      <div className="navbar-right">
        <Button variant="outlined" size = "medium" onClick={ handleScrollTo }>
          Contact Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
