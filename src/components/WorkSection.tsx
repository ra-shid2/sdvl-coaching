import React from 'react';
import Work from './Work'; // Assuming Work component is in the same directory
import { Typography } from '@mui/material';

const WorkSection: React.FC = () => {
  // Sample data for demonstration
  const workData = [
    { imageSrc: 'src/assets/hero.png', title: 'My personal artwork' },
    { imageSrc: 'src/assets/hero.png', title: 'Neon sign for Fattys Bar' },
    { imageSrc: 'src/assets/hero.png', title: 'Sign for San Diageo Apparel' },
    { imageSrc: 'src/assets/hero.png', title: 'My personal artwork' },
    // Add more work items as needed
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '80px', // Add margin at the bottom
      }}
    >
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', width: '100%', marginBottom: '56px' }}>
      My Successful Testimonials
          </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '80px', // Add proper spacing between the elements
        }}
      >
        {workData.map((work, index) => (
          <div key={index} className="work-item">
            <Work imageSrc={work.imageSrc} title={work.title} />
          </div>
        ))}
      </div>

      {/* Media query for small screens */}
      <style>{`
        @media only screen and (max-width: 600px) {
          .work-item {
            width: 100%; /* Display one item per row */
          }
        }
      `}</style>
    </div>
  );
};

export default WorkSection;
