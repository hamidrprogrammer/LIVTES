import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Import all the section components
import HeroSection from '../components/HeroSection/HeroSection';
import MolecularHydrogenSection from '../components/MolecularHydrogenSection/MolecularHydrogenSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import PlanetEarthSection from '../components/PlanetEarthSection/PlanetEarthSection';
import FeatureHighlightsSection from '../components/FeatureHighlightsSection/FeatureHighlightsSection';
import InPageNav from '../components/InPageNav/InPageNav';
import FrequencyIntroSection from '../components/FrequencyIntroSection/FrequencyIntroSection';
import FrequencyDetailSection, { VisualProps as FrequencyVisualProps } from '../components/FrequencyDetailSection/FrequencyDetailSection';
import ChromotherapyIntroSection from '../components/ChromotherapyIntroSection/ChromotherapyIntroSection';
import ChromoColoursSection from '../components/ChromoColoursSection/ChromoColoursSection';
import PioneeringTechSection from '../components/PioneeringTechSection/PioneeringTechSection';
import MagneticFieldInfoSection from '../components/MagneticFieldInfoSection/MagneticFieldInfoSection';
import ShopCTASection from '../components/ShopCTASection/ShopCTASection';
import { theme } from '../../../core/theme/theme'; // To access theme colors if needed for props
import frequencies_energy from '@assets/images/bottle/frequencies_energy.png'
import frequencies_lumivitae from '@assets/images/bottle/frequencies_lumivitae.png'

import frequencies_recovery from '@assets/images/bottle/frequencies_recovery.png'
import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar';
import { useIsMobile } from '@/core/hooks/useIsMobile';
import Navbar from '@/lib/shared/layouts/NavbarWeb/Navbar';
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb';
import { SliderHandle } from '../components/Slider';
import { ProductPurchaseCtaSection } from '../components/ProductPurchaseCtaSection/ProductPurchaseCtaSection';
import ScrollToTopButton from '@/lib/shared/components/ScrollToTopButton';

const PageWrapper = styled.main`
  // This wrapper is optional if all sections are full-width and manage their own backgrounds.
  // It can be used for a global page background or max-width if sections didn't handle it.
  overflow: hidden; // Ensures nothing bleeds out unexpectedly from AOS or section designs
`;

// Data for the FrequencyDetailSection instances
const lumivitaeVisuals: FrequencyVisualProps = {
  type: 'sun_lid',
  mainVisualUrl: '/images/bottle_lid_sun.png',
};

const recoveryVisuals: FrequencyVisualProps = {
  type: 'animated_lid',
  lidImageUrl: '/images/top_view_lid.png',
  haloImageUrl: '/images/halo_effect.png',
  animationAssetUrl: '/images/anim_blue.png',
};

const energyVisuals: FrequencyVisualProps = {
  type: 'animated_lid',
  lidImageUrl: '/images/top_view_lid.png',
  haloImageUrl: '/images/halo_effect.png',
  animationAssetUrl: '/images/anim_pink.png',
};

const BottlePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
      offset: 50,     // Offset (in px) from the original trigger point
      delay: 100,     // Values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // Default easing for AOS animations
    });
    // Optional: Refresh AOS on certain conditions if page layout changes dynamically after initial load
    // AOS.refresh();
  }, []);
    const isMobile = useIsMobile();
  const whySliderRef = useRef<SliderHandle>(null);

  return (
    <PageWrapper>
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )}
      
      <HeroSection />
      <MolecularHydrogenSection />
      <BenefitsSection sliderRef={whySliderRef}/>
      <PlanetEarthSection />
      <FeatureHighlightsSection />
      <InPageNav />
      <FrequencyIntroSection />

      {/* Lumivitae Frequency Detail */}
      <FrequencyDetailSection
        id="lumivitae-frequency-detail-section"
        backgroundImageUrl={frequencies_lumivitae}
        category="Lumivitae Frequency"
        categoryColor={theme.colors.white}
        headline="Sunlight, captured. Energy, unleashed."
        description={
          <>
            LumiVitæ bridges the power of nature with the precision of technology. 
            A calibrated frequency field, emitted from the bottle’s lid, mimics the 
            revitalizing effects of sunlight on water—restoring its structure, 
            amplifying its vitality, and elevating hydration to an entirely new dimension. 
            Water, as it was meant to be. <br />Pure. Energized. Alive.
          </>
        }
        visuals={lumivitaeVisuals}
        textSide="left"
        descriptionFontWeight={700}
      />

      {/* Recovery Frequency Detail */} 
       <FrequencyDetailSection
        id="recovery-frequency-detail-section"
        backgroundImageUrl={frequencies_recovery}
        category="Recovery"
        categoryColor={theme.colors.accentBlue}
        headline="Restore balance. Reduce oxidative stress. Reclaim your energy."
        description="Infused with a frequency that supports YIN energy restoration, LumiVitæ helps bring the body back into equilibrium—reducing oxidative stress and enhancing cellular renewal."
        visuals={recoveryVisuals}
        textSide="left"
      />
    

      {/* Energy Frequency Detail */}
      <FrequencyDetailSection
        id="energy-frequency-detail-section"
        backgroundImageUrl={frequencies_energy}
        category="Energy"
        categoryColor={theme.colors.accentPink}
        headline="Power up. Ignite vitality. Elevate performance."
        description="Designed to stimulate cellular oxidation and amplify Yang energy, this frequency supports circulation, endurance, and sustained vitality—helping you move through life with strength and momentum."
        visuals={energyVisuals}
        textSide="left"
      />

      <ChromotherapyIntroSection />
      <ChromoColoursSection />
      <PioneeringTechSection sliderRef={undefined} />
      <MagneticFieldInfoSection />
      <ProductPurchaseCtaSection />
      <Footer />
                    <ScrollToTopButton />
      
    </PageWrapper>
  );
};

export default BottlePage;
