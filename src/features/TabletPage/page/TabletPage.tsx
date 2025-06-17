import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

// Import Sections (we will create these next)
import Navbar from '../../../lib/shared/layouts/NavbarWeb/Navbar';
import HeroSection from '../sections/HeroSection/HeroSection';
import UnderwaterSection from '../sections/UnderwaterSection/UnderwaterSection';
import SecondaryNavbar from '../components/SecondaryNavbar/SecondaryNavbar';
import StellarFusionIntroSection from '../sections/StellarFusionIntroSection/StellarFusionIntroSection';
import CellularFusionExplainedSection from '../sections/CellularFusionExplainedSection/CellularFusionExplainedSection';
import WhyYouFeelItSection from '../sections/WhyYouFeelItSection/WhyYouFeelItSection';
import IngredientsIntroSection from '../sections/IngredientsIntroSection/IngredientsIntroSection';
// Import individual ingredient sections (or a reusable one)
import MolecularHydrogenSection from '../sections/IngredientSections/MolecularHydrogenSection';
import NicotinamideRibosideSection from '../sections/IngredientSections/NicotinamideRibosideSection';
import ResveratrolSection from '../sections/IngredientSections/ResveratrolSection';
import SpermidineSection from '../sections/IngredientSections/SpermidineSection';
import MagnesiumSection from '../sections/IngredientSections/MagnesiumSection';
import VitaminCSection from '../sections/IngredientSections/VitaminCSection';
import VitaminB12Section from '../sections/IngredientSections/VitaminB12Section';

import StarWithinSection from '../sections/StarWithinSection/StarWithinSection';
import YouthAwakenedSection from '../sections/YouthAwakenedSection/YouthAwakenedSection';
import CtaSection from '../sections/CtaSection/CtaSection';
import { useIsMobile } from '@/core/hooks/useIsMobile';
import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar';
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb';
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter';
import ScrollToTopButton from '@/lib/shared/components/ScrollToTopButton';
// import Footer from '../components/Footer/Footer';


const TabletPageContainer = styled.div`
  position: relative;
  width: 100%; // Design is 1440px, but we make the container responsive
  margin: 0 auto; // Center the page content
  background-color: ${({ theme }) => theme.colors.white}; // Base background from Figma for the page itself
  overflow: hidden; // Important for absolutely positioned children and AOS
`;

const TabletPage: React.FC = () => {
  useEffect(() => {
    // AOS.refresh(); // Refresh AOS if content changes dynamically after initial load.
    // Not strictly necessary here for static content if initialized in main.tsx
  }, []);
     const isMobile = useIsMobile();

  return (
    <TabletPageContainer>
      {/* Figma indicates main background is #FFFFFF, but sections have their own dark backgrounds.
          The overall container for the page content (1440px wide) has this white background.
          The sections inside will span full width or be constrained.
      */}

      {/* Top Navigation */}


      {isMobile ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )}

      {/* Stars Hero Section */}
      <HeroSection />

      {/* Underwater Hero Section */}
      <UnderwaterSection />

      {/* Secondary Navigation - This appears at top: 2440px in Figma, might need special sticky logic */}
      {/* <SecondaryNavbar /> */}

      {/* Section Four (Stellar Fusion Intro) - top: 2500px */}
      <StellarFusionIntroSection />

      {/* Section Five (Cellular Fusion Explained) - top: 3825px */}
      <CellularFusionExplainedSection />

      {/* Section Five (Why You Feel It) - top: 5825px */}
      <WhyYouFeelItSection />

      {/* Ingredients Intro Section - top: 6625px */}
      <IngredientsIntroSection />

      {/* Individual Ingredient Sections */}
      {/* These sections share a similar structure in Figma: Image on one side, text on the other.
          A reusable component might be good, but for full explicitness as requested,
          I'll create separate components that could later be refactored.
      */}
      {/* Molecular Hydrogen (H2) - top: 6625px (part of IngredientsIntro, then detailed) - this is a bit confusing in Figma.
          Figma: "We begin with the most powerful one of all..." (top: 6758px)
          Then "Molecular Hydrogen (H2)" text (top: 7100px)
          This structure is complex. Let's assume IngredientsIntroSection covers the title, and
          then each ingredient has its own subsequent section.
          The next ingredient section starts effectively after previous one.
          The 'top' values in Figma for these are relative to the very tall page.
          We'll stack them normally.
      */}

      <NicotinamideRibosideSection /> {/* Related to content around top ~7818px */}
      <ResveratrolSection /> {/* Related to content around top ~8642px */}
      <SpermidineSection /> {/* Related to content around top ~9420px */}
      <MagnesiumSection /> {/* Related to content around top ~10230px */}
      <VitaminCSection /> {/* Related to content around top ~11042px */}
      <VitaminB12Section /> {/* Related to content around top ~11808px */}


      {/* Section Four (Star Within You) - top: 12425px */}
      <StarWithinSection />

      {/* Section Five (Youth Awakened) - top: 13925px */}
      <YouthAwakenedSection />

      {/* CTA Section - top: 14725px */}
      <CtaSection />

      {/* Footer - bottom: 1px (effectively at the end of 16460px page height) */}
      
      {isMobile ? (
       <MobileFooter />
      ) : (
       <Footer />
      )}
              <ScrollToTopButton />

    </TabletPageContainer>
  );
};

export default TabletPage;
