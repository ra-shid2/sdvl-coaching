// Footer.tsx
import React from 'react';
import '../styles/FooterSection.css'
import { Button } from '@mui/material';
import { handleScrollTo } from '../utils/scrollUtil';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <h2 className="footer-title">Reach Out to Me</h2>
            <div className="footer-columns">
                <div className="footer-column">
                    <h4 className="subtitle">Address</h4>
                    <p>123 Main St, City, Country</p>
                </div>
                <div className="footer-column">
                    <h4 className="subtitle">Email</h4>
                    <p>example@example.com</p>
                </div>
                <div className="footer-column">
                    <h4 className="subtitle" >Phone</h4>
                    <p>+1234567890</p>
                </div>
            </div>
            <div className="cta">
                <Button variant="text" size="medium" onClick={handleScrollTo}>
                    Schedule A Meeting
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
