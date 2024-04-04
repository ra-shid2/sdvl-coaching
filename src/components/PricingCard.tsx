import React from 'react';
import '../styles/PricingCard.css';

interface PricingCardProps {
  title: string;
  monthlyPrice?: number;
  oneTimePrice?: number;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, monthlyPrice, oneTimePrice, features }) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      {monthlyPrice && <div className="price-section monthly-price">Monthly : ${monthlyPrice}/month</div>}
      {oneTimePrice && <div className="price-section one-time-price">One-Time : ${oneTimePrice}</div>}
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <span className="check-icon">&#10003;</span> 
            <span className="feature-text">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default PricingCard;
