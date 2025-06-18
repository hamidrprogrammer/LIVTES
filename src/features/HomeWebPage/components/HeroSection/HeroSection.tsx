/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/Hom.avif'age/components/HeroSection/HeroSection.tsx
import React from 'react';
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle } from './HeroSection.styles';
// import { Button } from '../common/Button'; // Import shared button

const HeroSection: React.FC = () => {
  const handleExploreBottleClick = () => {
     
    // Add navigation logic or other actions here
  };

  return (
    <HeroContainer id="hero"> {/* Add id for potential anchor linking */}
      <HeroContent>
        <HeroTitle data-aos="fade-up">
          The Science of Becoming Light
        </HeroTitle>
        <HeroSubtitle data-aos="fade-up" data-aos-delay="200">
          Turning Water into Wellness. Turning Light into Life.
        </HeroSubtitle>
        {/* <Button
          onClick={handleExploreBottleClick}
          variant="primary" // Uses the default style with accent border
          size="large" // This matches the Figma's 30px font size and padding
          dataAos="fade-up"
          dataAosDelay="400"
          ariaLabel="Explore the bottle"
        >
          Explore the bottle
        </Button> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
