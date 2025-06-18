// src/features/Hero/Hero.tsx
import React from 'react';
import { Variants } from 'framer-motion';
import {
  HeroSection,
  HeroContentWrapper,
  HeroTitleText,
  HeroCtaContainer,
  HeroSubtitleText,
  HeroActionButton,
} from './Hero.styles';
const heroBgImage = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/mobile/image.avif'; // Replace with your actual image path
const NavbarMobile = '@/lib/shared/layouts/NavMobileMain/Navbar';
// Placeholder for hero background image

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero: React.FC = () => {
  return (
    <HeroSection
      id="hero"
      bgImage={heroBgImage}
      minHeight="780px"
      noPaddingX // Section handles horizontal padding by default, override if hero is edge-to-edge
      noPaddingY // Hero has its own internal padding logic relative to Navbar and bottom
      fullWidth // Allow hero to span full viewport width
      variants={contentVariants} // Overall section animation
      initial="hidden"
      // animate="visible" // Use animate for initial load animation
    >
      <NavbarMobile />
      <HeroContentWrapper>
        <HeroTitleText 
        // variants={itemVariants}
         variant="heroTitle" as="h1">
          Turning Water Into Wellness
        </HeroTitleText>
      </HeroContentWrapper>

      <HeroCtaContainer variants={itemVariants}>
        <HeroSubtitleText 
        // variants={itemVariants} 
        variant="heroSubtitle" as="p">
          Start Your Journey
        </HeroSubtitleText>
        <HeroActionButton
          href="#explore-bottle" // Replace with actual link
          secondary // White border, teal text button
          largeRadius // 200px border radius
          // Framer motion props can be passed directly if Button is a motion component
          // or wrap it with motion() in Hero.styles.ts
          // For simplicity, assuming Button itself is not a motion component by default here.
        >
          Explore the bottle
        </HeroActionButton>
      </HeroCtaContainer>
    </HeroSection>
  );
};

export default Hero;
