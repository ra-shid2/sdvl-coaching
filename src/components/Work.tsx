import React from 'react';
import { Typography } from '@mui/material';
import { KeyboardReturn as KeyboardReturnIcon } from '@mui/icons-material';
import '../styles/Work.css';

interface WorkProps {
  imageSrc: string;
  title: string;
}

const Work: React.FC<WorkProps> = ({ imageSrc, title }) => {
  return (
    <div className="work-container">
      <img
        src={imageSrc}
        alt={title}
        className="work-image"
      />
      <div className="work-content">
        <KeyboardReturnIcon
        sx={{
          color: 'secondary.main',
          fontSize: 24,
          marginRight: '8px',
          transform: 'scaleX(-1)', // Mirror the icon horizontally
        }}
          className="work-icon"
        />
        <Typography variant="body1" component="h2" sx={{ wordWrap: 'break-word', textAlign: 'left'}}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default Work;
