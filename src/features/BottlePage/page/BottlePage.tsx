// BottlePage/page/BottlePage.tsx
import React, { useEffect, useRef, lazy, Suspense } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Import all the section components as lazy-loaded components
const HeroSection = lazy(() => import('../components/HeroSection/HeroSection'));
const MolecularHydrogenSection = lazy(() => import('../components/MolecularHydrogenSection/MolecularHydrogenSection'));
const BenefitsSection = lazy(() => import('../components/BenefitsSection/BenefitsSection'));
const PlanetEarthSection = lazy(() => import('../components/PlanetEarthSection/PlanetEarthSection'));
const FeatureHighlightsSection = lazy(() => import('../components/FeatureHighlightsSection/FeatureHighlightsSection'));
const InPageNav = lazy(() => import('../components/InPageNav/InPageNav'));
const FrequencyIntroSection = lazy(() => import('../components/FrequencyIntroSection/FrequencyIntroSection'));
const FrequencyDetailSection = lazy(() => import('../components/FrequencyDetailSection/FrequencyDetailSection'));
const ChromotherapyIntroSection = lazy(() => import('../components/ChromotherapyIntroSection/ChromotherapyIntroSection'));
const ChromoColoursSection = lazy(() => import('../components/ChromoColoursSection/ChromoColoursSection'));
const PioneeringTechSection = lazy(() => import('../components/PioneeringTechSection/PioneeringTechSection'));
const MagneticFieldInfoSection = lazy(() => import('../components/MagneticFieldInfoSection/MagneticFieldInfoSection'));
// const ProductPurchaseCtaSection = lazy(() => import('../components/ProductPurchaseCtaSection/ProductPurchaseCtaSection'));
const ScrollToTopButton = lazy(() => import('@/lib/shared/components/ScrollToTopButton'));
const defaultSlidesTwo = [
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/image-3.avif',
    text: "Reduces oxidative stress – the root cause of aging, fatigue, and chronic disease."
  },
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/image-2.avif',
    text: "Boosts natural antioxidants like glutathione, the body’s master detoxifier."
  },
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/image-5.avif',
    text: "Enhances energy production at a cellular level by optimizing mitochondrial function."
  },
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/imageSlideFure.avif',
    text: "Supports healthy inflammation response, helping the body recover faster."
  },
];

import { theme } from '../../../core/theme/theme'; // To access theme colors if needed for props

import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar';
import { useIsMobile } from '@/core/hooks/useIsMobile';
import Navbar from '@/lib/shared/layouts/NavbarWeb/Navbar';
import { SliderHandle } from '../components/Slider';
import { VisualProps as FrequencyVisualProps } from '../components/FrequencyDetailSection/FrequencyDetailSection'; // Import type
import { ProductPurchaseCtaSection } from '../components/ProductPurchaseCtaSection/ProductPurchaseCtaSection';
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb';
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter';
const frequencies_energy = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/frequencies_lumivitae.avif";
const frequencies_lumivitae = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/frequencies_lumivitae.avif";
const frequencies_recovery = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/frequencies_recovery.avif";


const PageWrapper = styled.main`
  overflow: hidden; 
`;

// Data for the FrequencyDetailSection instances
const lumivitaeVisuals: FrequencyVisualProps = {
  type: 'sun_lid',
  mainVisualUrl: '/images/bottle_lid_sun.avif',
};

const recoveryVisuals: FrequencyVisualProps = {
  type: 'animated_lid',
  lidImageUrl: '/images/top_view_lid.avif',
  haloImageUrl: '/images/halo_effect.avif',
  animationAssetUrl: '/images/anim_blue.avif',
};

const energyVisuals: FrequencyVisualProps = {
  type: 'animated_lid',
  lidImageUrl: '/images/top_view_lid.avif',
  haloImageUrl: '/images/halo_effect.avif',
  animationAssetUrl: '/images/anim_pink.avif',
};

const BottlePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 50,     
      delay: 100,     
      easing: 'ease-in-out', 
    });
  }, []);

  const isMobile = useIsMobile();
  const whySliderRef = useRef<SliderHandle>(null);
    const whySliderRefTwo = useRef<SliderHandle>(null);


  // Preload critical background image for HeroSection to improve LCP
  // You might need to adjust the path based on your build system's output
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/bottle-hand-gold-bottle-1.avif'; // Direct URL for critical image
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading Navigation...</div>}>
        {isMobile ? <NavbarMobile /> : <Navbar />}
      </Suspense>
      
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div>Loading Molecular Hydrogen Section...</div>}>
        <MolecularHydrogenSection />
      </Suspense>

      <Suspense fallback={<div>Loading Benefits Section...</div>}>
        <PioneeringTechSection sliderRef={whySliderRef} /> 
      </Suspense>

      <Suspense fallback={<div>Loading Planet Earth Section...</div>}>
        <PlanetEarthSection />
      </Suspense>

      <Suspense fallback={<div>Loading Feature Highlights Section...</div>}>
        <FeatureHighlightsSection />
      </Suspense>

      <Suspense fallback={<div>Loading In-Page Navigation...</div>}>
        <InPageNav />
      </Suspense>

      <Suspense fallback={<div>Loading Frequency Intro Section...</div>}>
        <FrequencyIntroSection />
      </Suspense>

      {/* Lumivitae Frequency Detail */}
      <Suspense fallback={<div>Loading Lumivitae Frequency Details...</div>}>
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
      </Suspense>

      {/* Recovery Frequency Detail */} 
      <Suspense fallback={<div>Loading Recovery Frequency Details...</div>}>
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
      </Suspense>
    
      {/* Energy Frequency Detail */}
      <Suspense fallback={<div>Loading Energy Frequency Details...</div>}>
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
      </Suspense>

      <Suspense fallback={<div>Loading Chromotherapy Intro Section...</div>}>
        <ChromotherapyIntroSection />
      </Suspense>

      <Suspense fallback={<div>Loading Chromo Colours Section...</div>}>
        <ChromoColoursSection />
      </Suspense>

      <Suspense fallback={<div>Loading Pioneering Tech Section...</div>}>
        {/* The sliderRef prop is optional for PioneeringTechSection based on its current usage */}
        <PioneeringTechSection sliderRef={whySliderRefTwo} slider={defaultSlidesTwo} /> 
      </Suspense>

      <Suspense fallback={<div>Loading Magnetic Field Info Section...</div>}>
        <MagneticFieldInfoSection />
      </Suspense>

      <Suspense fallback={<div>Loading Product Purchase CTA Section...</div>}>
        <ProductPurchaseCtaSection />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
      {isMobile?<MobileFooter/>:
        <Footer />}
      </Suspense>

      <Suspense fallback={null}> {/* ScrollToTopButton is light, null fallback is fine */}
        <ScrollToTopButton />
      </Suspense>
      
    </PageWrapper>
  );
};

export default BottlePage;