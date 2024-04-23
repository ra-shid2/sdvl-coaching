import React from 'react';
import Work from './Work'; // Assuming Work component is in the same directory
import '../styles/WorkSection.css';

const WorkSection: React.FC = () => {
  // Sample data for demonstration
  const workData = [
    { imageSrc: 'src/assets/project1.jpg', title: 'My personal artwork' },
    { imageSrc: 'src/assets/project2.jpg', title: 'Neon sign for Fattys Bar' },
    { imageSrc: 'src/assets/project3.jpg', title: 'Sign for San Diageo Apparel' },
    { imageSrc: 'src/assets/project4.jpeg', title: 'My personal artwork' },
    // Add more work items as needed
  ];

  return (
    <div className="work-section-container">
      <h4 className="section-title">
        My Successful Testimonials
      </h4>
      <div className="work-section">
        {workData.map((work, index) => (
          <div key={index} className="work-item">
            <Work imageSrc={work.imageSrc} title={work.title} />
          </div>
        ))}
      </div>
    </div>
  );

};

export default WorkSection;
