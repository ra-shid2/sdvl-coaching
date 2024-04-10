// HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Experiences from '../components/ExperienceSection';
import Footer from '../components/FooterSection';
import WorkSection from '../components/WorkSection';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
import UserForm from '../components/UserForm';


const HomePage: React.FC = () => {
  const backgroundItems = [
    {
      title: 'Education',
      points: ['Degree in Computer Science', 'Certification in Web Development'],
    },
    {
      title: 'Work Experience',
      points: ['Software Engineer at XYZ Company', 'Freelance Web Developer'],
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection
        title="Unlock Your Potential: Transform Your Life with Expert Life Coaching"
        subtitle="Empowerment for Personal Growth and Success - Achieve Your Goals and Flourish with Tailored Guidance"
        imagePath="src/assets/hero.png"
        ctaText="SCHEDULE A MEETING"
      />
            <Box height={80} />
      <Experiences title="My Background" items={backgroundItems} />

      <HeroSection
        title="Unlock Your Potential: Transform Your Life with Expert Life Coaching"
        subtitle="Empowerment for Personal Growth and Success - Achieve Your Goals and Flourish with Tailored Guidance"
        imagePath="src/assets/hero.png"
        ctaText=""
      />
      <Box height={56} />
      <WorkSection />

      <HeroSection
        title='"Unlock Your Potential: Transform Your Life with Expert Life Coaching"'
        subtitle=""
        imagePath="src/assets/hero.png"
        ctaText="work with me today"
      />
      <Box height={32} />
      <UserForm />
      <WorkSection />

      <Footer />
    </div>
  );
};

export default HomePage;
