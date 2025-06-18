import React, { useEffect, Suspense, lazy } from 'react'; //
import styled from 'styled-components'; //
import AOS from 'aos'; //
import 'aos/dist/aos.css'; //

// Import Layouts
import Navbar from '../../../lib/shared/layouts/NavbarWeb/Navbar'; //
import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar'; //
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb'; //
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter'; //
import ScrollToTopButton from '@/lib/shared/components/ScrollToTopButton'; //
import { useIsMobile } from '@/core/hooks/useIsMobile'; //

// Lazy Load Sections
const HeroSection = lazy(() => import('../sections/HeroSection/HeroSection')); //
const UnderwaterSection = lazy(() => import('../sections/UnderwaterSection/UnderwaterSection')); //
// const SecondaryNavbar = lazy(() => import('../components/SecondaryNavbar/SecondaryNavbar')); // // تصمیم گرفته شد که SecondaryNavbar استیکی باشد، بنابراین Lazy Load نمی‌شود.
const StellarFusionIntroSection = lazy(() => import('../sections/StellarFusionIntroSection/StellarFusionIntroSection')); //
const CellularFusionExplainedSection = lazy(() => import('../sections/CellularFusionExplainedSection/CellularFusionExplainedSection')); //
const WhyYouFeelItSection = lazy(() => import('../sections/WhyYouFeelItSection/WhyYouFeelItSection')); //
const IngredientsIntroSection = lazy(() => import('../sections/IngredientsIntroSection/IngredientsIntroSection')); //
const NicotinamideRibosideSection = lazy(() => import('../sections/IngredientSections/NicotinamideRibosideSection')); //
const ResveratrolSection = lazy(() => import('../sections/IngredientSections/ResveratrolSection')); //
const SpermidineSection = lazy(() => import('../sections/IngredientSections/SpermidineSection')); //
const MagnesiumSection = lazy(() => import('../sections/IngredientSections/MagnesiumSection')); //
const VitaminCSection = lazy(() => import('../sections/IngredientSections/VitaminCSection')); //
const VitaminB12Section = lazy(() => import('../sections/IngredientSections/VitaminB12Section')); //
const StarWithinSection = lazy(() => import('../sections/StarWithinSection/StarWithinSection')); //
const YouthAwakenedSection = lazy(() => import('../sections/YouthAwakenedSection/YouthAwakenedSection')); //
const CtaSection = lazy(() => import('../sections/CtaSection/CtaSection')); //

const TabletPageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const TabletPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      easing: 'ease-out', // Easing for animation
      duration: 1000, // Duration of animation
      delay: 50, // Delay animation
      offset: 100, // Offset (in px) from the top of the screen
    });
    AOS.refresh();
  }, []); //

  const isMobile = useIsMobile(); //

  return (
    <TabletPageContainer>
      {isMobile ? <NavbarMobile /> : <Navbar />}

      <Suspense fallback={<div></div>}> {/* Add a fallback for lazy loaded components */}
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <UnderwaterSection />
      </Suspense>

      {/* SecondaryNavbar will not be lazy loaded as it's often sticky and needs to be present early */}
      {/* <SecondaryNavbar /> */}

      <Suspense fallback={<div></div>}> {/* */}
        <StellarFusionIntroSection />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <CellularFusionExplainedSection />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <WhyYouFeelItSection />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <IngredientsIntroSection />
      </Suspense>

      {/* Individual Ingredient Sections */}
      <Suspense fallback={<div></div>}> {/* */}
        <NicotinamideRibosideSection />
      </Suspense>
      <Suspense fallback={<div></div>}> {/* */}
        <ResveratrolSection />
      </Suspense>
      <Suspense fallback={<div></div>}> {/* */}
        <SpermidineSection />
      </Suspense>
      <Suspense fallback={<div></div>}> {/* */}
        <MagnesiumSection />
      </Suspense>
      <Suspense fallback={<div></div>}> {/* */}
        <VitaminCSection />
      </Suspense>
      <Suspense fallback={<div></div>}> {/* */}
        <VitaminB12Section />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <StarWithinSection />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <YouthAwakenedSection />
      </Suspense>

      <Suspense fallback={<div></div>}> {/* */}
        <CtaSection />
      </Suspense>

      {isMobile ? <MobileFooter /> : <Footer />}
      <ScrollToTopButton />
    </TabletPageContainer>
  );
};

export default TabletPage;