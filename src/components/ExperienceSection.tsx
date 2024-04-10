import React from 'react';
import '../styles/ExperienceSection.css';

interface BackgroundItem {
  title: string;
  points: string[];
}

interface MyBackgroundProps {
  title: string;
  items: BackgroundItem[];
}

const Experiences: React.FC<MyBackgroundProps> = ({ title, items }) => {
  return (
    <div className="background-container">
      <div >
        <h1 className="background-title">{title}</h1>
      </div>
      <div className="background-items">
        {items.map((item, index) => (
          <div key={index} className="background-item">
            <h3>{item.title}</h3>
            <ul className="content">
              {item.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
