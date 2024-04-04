import React from 'react';
import { Typography } from '@mui/material';
import { KeyboardReturn as KeyboardReturnIcon } from '@mui/icons-material';

interface WorkProps {
  imageSrc: string;
  title: string;
}

const Work: React.FC<WorkProps> = ({ imageSrc, title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: '150px',
          height: 'auto',
          marginBottom: '8px',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <KeyboardReturnIcon
          sx={{
            color: 'secondary.main',
            fontSize: 20,
            marginRight: '8px',
            transform: 'scaleX(-1)', // Mirror the icon horizontally
          }}
        />
        <Typography
          variant="body1"
          component="h2"
          sx={{ wordWrap: 'break-word' }}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default Work;
