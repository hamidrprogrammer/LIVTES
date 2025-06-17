import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import whyYouFeelItBgUrl from "@assets/images/products/homepage_sec1.png"
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

// Placeholder for background image, user needs to replace 'path/to/your/stars-hero-bg.jpg'
const starsHeroBgUrl = whyYouFeelItBgUrl
// Placeholder for rotated image 'image 26'
const image26Url =whyYouFeelItBgUrl

export const HeroSectionContainer = styled(SmartImage)`
  position: relative;
  width: 100%;
  height: 850px; // As per Figma "Stars Hero"
  left: 0;
  top: 0; // Overlaps with Navbar if Navbar is also absolute top 0.
         // Consider Navbar height if stacking normally.
         // Given Figma structure, elements are absolutely positioned on a large canvas.
  background-color: ${({ theme }) => theme.colors.black}; // Fallback background
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px; // Horizontal padding for text content
  overflow: hidden; // To contain pseudo-elements or absolutely positioned children like image 26

  &::before { // For the main background image
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${starsHeroBgUrl});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  /* "image 26" - decorative background element */
  &::after {
    content: '';
    position: absolute;
    width: 1606.18px; // Height when rotated
    height: 918.2px;   // Width when rotated
    /* Figma: left: 1470px; top: -46.2px; transform: rotate(90deg); */
    /* This positioning is tricky for responsiveness. Let's try to make it more decorative. */
    /* For a 1440px viewport, left: 1470px is off-screen. This might be an overflow visual. */
    /* Let's position it based on right edge to better control its visibility */
    right: -800px; // Adjust this to control how much it shows.
    top: -46.2px;
    background-image: url(${image26Url});
    background-size: cover;
    transform: rotate(90deg);
    transform-origin: top left; // Adjust origin if needed
    z-index: 0; // Behind content but above black background
    opacity: 0.3; // Make it subtle

    ${media.tablet} {
      right: -1000px; // Further off-screen or smaller
      opacity: 0.2;
    }
    @media (max-width: 768px) {
      display: none; // Likely too complex/large for mobile
    }
  }

  ${media.tablet} {
    height: 750px; // Adjust height for tablets
  }

  @media (max-width: 768px) {
    height: 650px; // Adjust height for mobile
    padding-top: ${({ theme }) => theme.sizes.navbarHeight}; // Ensure content is below absolute Navbar
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2; // Above background pseudo-elements
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px; // Constrain text width for readability
`;

export const IntroducingText = styled.h1`
  /* Figma: width: 463px; height: 72px; left: calc(50% - 463px/2 + 0.5px); top: 266px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h1Size};
  line-height: 120%;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary}; // #3FFFF8
  margin-bottom: 20px; // Spacing

  ${media.tablet} {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    width: 90%;
  }
`;

export const SubtitleText = styled.h2`
  /* Figma: width: 318px; height: 36px; left: calc(50% - 318px/2); top: 358px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h3Size};
  line-height: 120%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px; // Spacing

  ${media.tablet} {
    font-size: 26px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    width: 90%;
  }
`;

// "Mid Hero Text" section styles (positioned absolutely within HeroSection or relatively after main Hero content)
// Based on Figma (top: 685px) this would be near the bottom of the 850px HeroSection.
export const MidHeroTextContainer = styled.div`
  /* Figma: position: absolute; width: 571px; height: 211px; left: 81px; top: 685px; */
  /* For responsiveness, let's not use absolute pixel positioning from top of page. */
  /* We'll position it relative to the HeroContent or bottom of HeroSectionContainer */
  position: absolute; // Positioned relative to HeroSectionContainer
  bottom: 50px; // Adjust to position it towards the bottom of the hero section
  left: 50%;
  transform: translateX(-70%); // Figma: left: 81px on a 1440px screen, so it's on the left. 81/1440 = ~5.6%. calc(50% - 571px/2 - 320px)
                               // calc(50% - 504px/2 - 320px) left: 148px.
                               // Let's use a simpler left alignment for responsiveness.
  width: 571px;
  z-index: 3; // Above hero background elements

  ${media.tablet} {
    width: 90%;
    max-width: 500px;
    left: 5%;
    transform: translateX(0);
    bottom: 30px;
    text-align: left;
  }

  @media (max-width: 768px) {
    position: relative; // Stack normally on mobile
    width: 100%;
    left: auto;
    bottom: auto;
    transform: none;
    margin-top: 40px; // Space after main hero button
    padding: 0 10px;
    text-align: center; // Center on mobile
  }
`;

export const MidHeroBackgroundBlur = styled.div`
  /* Figma: Rectangle 43 position: absolute; width: 532px; height: 151px; left: 81px; top: 745px; */
  /* background: #080818; opacity: 0.6; filter: blur(25px); border-radius: 100px; */
  position: absolute;
  width: 100%; // Relative to MidHeroTextContainer
  height: 100%; // Relative to MidHeroTextContainer
  top: 50%; // Center the blur effect approximately
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 532px;
  max-height: 151px;
  background: ${({ theme }) => theme.colors.cardBackground}; // theme.colors.darkBlueGray with opacity
  opacity: 0.6; // Already in cardBackground for some browsers
  filter: blur(25px);
  border-radius: 100px;
  z-index: -1; // Behind the text

  @media (max-width: 768px) {
    display: none; // Blur effect might be too heavy or look odd on mobile
  }
`;

export const MidHeroTitle = styled.h3`
  /* Figma: width: 504px; height: 60px; font-size: 50px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 120%;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;

  ${media.tablet} {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const MidHeroSubtitle = styled.p`
  /* Figma: width: 440px; height: 78px; font-size: 30px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
