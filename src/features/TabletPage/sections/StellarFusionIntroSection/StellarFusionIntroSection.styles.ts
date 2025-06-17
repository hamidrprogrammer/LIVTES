// TabletPage/sections/StellarFusionIntroSection/StellarFusionIntroSection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import homepage_sec1 from '@assets/images/products/tablet598.png'; // tabletImageUrl
import homepage_sec2 from '@assets/images/products/star.png'; // starBgUrl

const starBgUrl = homepage_sec2;
const tabletImageUrl = homepage_sec1;

/* ─────────────────────────── SECTION ─────────────────────────── */

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 1325px; 
  background-color: #030508; 
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; 
  padding: 80px 20px; 

  ${media.tablet} {
    height: auto; 
    min-height: 1000px; 
    padding: 60px 20px;
    justify-content: center; 
    gap: 40px; 
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 40px 15px;
    gap: 30px; 
    justify-content: flex-start;
  }
`;

/* ───────────────────────── BACKGROUND ───────────────────────── */

export const StarBackgroundImage = styled.div`
  position: absolute;
  inset: 0; 
  background-image: url(${starBgUrl});
  background-size: cover;
  background-position: center;
  opacity: 0.7;
  z-index: 0; 

  ${media.tablet} {
    opacity: 1;
  }
`;

/* ───────────────────────── WRAPPER ───────────────────────── */

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  width: 100%;
  max-width: 1100px; 

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

/* ───────────────────────── TEXT BLOCK (generic) ───────────────────────── */

export const TextBlock = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 1.2; 
  color: ${({ theme }) => theme.colors.white};
  max-width: 440px; 
  
  ${media.tablet} {
    text-align: center; 
    max-width: 500px; 
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.4;
    max-width: 100%; 
    text-align: center; 
  }
`;

/* ───────────────────────── TOP TEXT BLOCKS ───────────────────────── */

export const TopTextBlocksContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  margin-bottom: 50px; 

  ${media.tablet} {
    flex-direction: column; 
    align-items: center; 
    margin-bottom: 30px;
    gap: 20px; 
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    gap: 15px;
    width: 100%;
  }
`;

export const LeftTextBlock = styled(TextBlock)`
  text-align: left; 

  ${media.tablet} {
    order: 1; 
    text-align: center; 
  }
`;

export const RightTextBlock = styled(TextBlock)`
  text-align: right; 
  padding-top: 250px;

  ${media.tablet} {
    order: 2; 
    text-align: center; 
    padding-top: 0; /* ✨ FIX: Reset padding on tablet */
  }
`;

/* ───────────────────────── CENTER IMAGE ───────────────────────── */

export const CentralTabletImage = styled.div`
  width: 230px;
  height: 589px;
  background: url(${tabletImageUrl}) center/contain no-repeat;
  margin: 40px 0; 

  ${media.tablet} {
    width: 180px;
    height: calc(180px * (589 / 230)); 
    margin: 30px 0;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: calc(120px * (589 / 230)); 
    margin: 20px 0;
  }
`;

/* ───────────────────────── FINAL QUESTION ───────────────────────── */

export const FinalQuestionText = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size}; 
  line-height: 1.3; 
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  max-width: 868px; 
  margin-top: 50px; 

  ${media.tablet} {
    font-size: 40px; 
    max-width: 90%;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.4;
    margin-top: 20px;
    max-width: 100%;
  }
`;