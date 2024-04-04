// import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';
//import Work from './components/Work';

function App() {
  // Define a function to handle the click event of the call-to-action button
  return (
    <div>
      {/* <Work imageSrc={'src/assets/hero.png'} title={'Brandind for Tost, a popular brunch spot in LA'} /> */}
      {/* <HeroSection 
          title="Unlock Your Potential: Transform Your Life with Expert Life Coaching" 
          subtitle="" 
          imagePath="src/assets/hero.png" 
          ctaText=""      
        />  */}
      <PricingCard
        title="Pro"
        monthlyPrice={1000}
        features={['Personalized Coaching Sessions', 'Access to Training Materials and Resources', 'Goal Setting and Progress Tracking', 'Communication and Support Channels (e.g., Email, Chat)', 'Feedback and Evaluation on Progress', 'Access to Exclusive Workshops or Webinars']}
      />
    </div>
  );
}

export default App
