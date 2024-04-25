// HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Experiences from '../components/ExperienceSection';
import Footer from '../components/FooterSection';
import WorkSection from '../components/WorkSection';
import Navbar from '../components/Navbar';
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
      <Experiences title="My Background" items={backgroundItems} />
      <HeroSection
        title="Unlock Your Potential: Transform Your Life with Expert Life Coaching"
        subtitle="Empowerment for Personal Growth and Success - Achieve Your Goals and Flourish with Tailored Guidance"
        imagePath="src/assets/hero.png"
        ctaText=""
      />
      <WorkSection />
      <HeroSection
        title='"Unlock Your Potential: Transform Your Life with Expert Life Coaching"'
        subtitle=""
        imagePath="src/assets/hero.png"
        ctaText="work with me today"
      />
      <WorkSection />
      <UserForm />
      <Footer />
    </div>
  );
};

export default HomePage;
