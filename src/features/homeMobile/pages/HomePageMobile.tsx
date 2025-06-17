// src/pages/HomePage.tsx
import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { ProductHighlightSectionProps } from '../components/ProductHighlightSection/ProductHighlightSection';
import homepage_bottle2_bg from "../../../assets/images/home/battel.png"
import  background from '../../../assets/images/home/image 2.png';
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter';

// Lazy load feature sections
const Hero = lazy(() => import('../components/Hero/Hero'));
const IntroSection = lazy(() => import('../components/IntroSection/IntroSection'));
const ProductHighlightSection = lazy(() => import('../components/ProductHighlightSection/ProductHighlightSection'));
const InfoCardSection = lazy(() => import('../components/InfoCardSection/InfoCardSection'));
const ShopProductCardSection = lazy(() => import('../components/ShopProductCard/ShopProductCardSection'));
const QuoteSection = lazy(() => import('../components/QuoteSection/QuoteSection'));
const CTASection = lazy(() => import('../components/CTASection/CTASection'));

// Import data types and specific data objects
// Data for ProductHighlightSection instances
const bottleSectionData: ProductHighlightSectionProps = {
  id: 'bottle-tech',
  backgroundImageSrc:homepage_bottle2_bg, // Replace: This should be the full background if used like this
  // homepage_bottle2 2 from figma (314x404) is more of a product shot than a BG.
  // This component assumes backgroundImageSrc is a full bleed BG.
  // If it's a product image, it should be an <OptimizedImage> inside ContentWrapper.
  backgroundImageAlt: 'LumiVitae Hydrogen Water Bottle technology background',
  // backgroundImageClassName: 'bottle-bg-image', // If specific art direction needed for BG
  overlayGradient: 'linear-gradient(287.83deg, rgba(51, 191, 188, 0) 29.19%, #33BFBC 176.79%)',
  backgroundColor: 'black',
  title: 'LumiVitae Hydrogen Water Technology',
  titleColor: 'primary',
  subtitle: 'The Future of Water is here. Blending the wisdom of nature with pioneering advanced technology.',
  primaryButtonText: 'Learn more',
  primaryButtonLink: '#learn-bottle-tech',
  secondaryButtonText: 'Buy bottle',
  secondaryButtonLink: '#buy-bottle-tech',
  imageObjectPosition: 'center 20%', // Example if BG needs positioning
};

const tabletsSectionData: ProductHighlightSectionProps = {
  id: 'tablets-power',
  backgroundImageSrc: background, // Replace: "image 2" from figma
  backgroundImageAlt: 'LumiVitae Hydrogen Tablets dissolving in water',
  // backgroundImageClassName: 'tablets-bg-image', // for left: -50px style
  backgroundColor: 'darkBackground', // #020411
  title: 'The Power of the Stars',
  titleColor: 'white',
  subtitle: 'Now in Your Water. A Tablet Unlike Anything Before. Drop. Dissolve. Transform.',
  primaryButtonText: 'Learn more',
  primaryButtonLink: '#learn-tablets-power',
  secondaryButtonText: 'Start subscription',
  secondaryButtonLink: '#subscribe-tablets',
  imageObjectPosition: '0% 0%', // Example, "image 2" has left: -50px
};

const PageWrapper = styled.div`
  width: 100%;
  /* Max width is handled by individual Section components or a global main container if preferred */
  /* overflow: hidden; Handled by Section component */
  background-color: ${({ theme }) => theme.colors.white}; /* Fallback main page background */
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: ${({theme}) => theme.typography.fontSizes.lg};
  color: ${({theme}) => theme.colors.textDark};
  background-color: ${({theme}) => theme.colors.lightBackground};
`;

const HomePageMobile: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback>Loading LumiVitae...</LoadingFallback>}>
      <PageWrapper>
        <Hero />
        <IntroSection />
        <ProductHighlightSection {...bottleSectionData} />
        <ProductHighlightSection {...tabletsSectionData} />
        <InfoCardSection />
        <ShopProductCardSection />
        <QuoteSection />
        <CTASection />
        <MobileFooter />
      </PageWrapper>
    </Suspense>
  );
};

export default HomePageMobile;
