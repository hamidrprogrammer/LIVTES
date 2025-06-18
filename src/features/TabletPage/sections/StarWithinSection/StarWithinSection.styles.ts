// mainIngredientsSection.styled.tsx
// نسخهٔ نهایی—دسکتاپ بدون تغییر؛ موبایل 100٪ ریسپانسیو و بهینه

import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/imagesec.avif';
const tabletShopCUrl = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/Tablet_Shop_C%201.avif';

const sectionBgImageUrl = homepage_sec1;

/* ───────────────────────────────── SECTION ───────────────────────────────── */

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 1500px;
  background-color: #010101;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center; /* Center content for stacking */
  justify-content: flex-start;
  padding: 80px 20px;

  ${media.tablet} {
    height: auto;
    min-height: 1200px;
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    height: auto;
    min-height: 900px;
    padding: 40px 15px;
  }
`;

/* ─────────────────────────────── BACKGROUND ─────────────────────────────── */

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${sectionBgImageUrl});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

/* ─────────────────────────────── TITLES ─────────────────────────────── */

export const TopTitle = styled.h2`
  position: relative;
  z-index: 1;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size};
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  margin: 0 auto 80px auto; /* Center title */

  ${media.tablet} {
    font-size: 40px;
    max-width: 90%;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 40px;
    padding: 0 10px;
  }
`;

/* ──────────────────────────── TEXT BLOCK WRAPPER ─────────────────────────── */

export const TextBlocksWrapper = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 60px auto; /* Center wrapper */

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

/* ──────────────────────────── LEFT TEXT BLOCK ─────────────────────────── */

export const LeftTextBlock = styled.div`
  flex-basis: 45%;
  max-width: 440px;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    flex-basis: auto;
    max-width: 500px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

/* ──────────────────────────── RIGHT TEXT BLOCK ─────────────────────────── */

export const RightTextBlock = styled.div`
  width: 45%;
  max-width: 440px;
  position: absolute;
  top: 400px; /* Align with bottom part of the section */
  right: 100px;
  text-align: right;
  z-index: 1;

  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    font-size: 30px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
  }

  p {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    font-size: 20px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.white};
  }

  ${media.tablet} {
    /* ✨ FIX: Change positioning to be part of the normal flow */
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    max-width: 500px;
    text-align: center;
    margin-top: 40px;

    h3, p {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }
`;

/* ─────────────────────────────── IMAGE ─────────────────────────────── */

export const RotatedTabletImage = styled.div`
  position: relative;
  z-index: 1;
  width: 650.33px;
  height: 817.94px;
  background-image: url(${tabletShopCUrl});
  background-size: contain;
  right: 35vw;
  background-repeat: no-repeat;
  transform: rotate(0deg);
  margin: 0 auto; /* Center the image container */

  ${media.tablet} {
    width: 80%;
    max-width: 500px;
    aspect-ratio: 650.33 / 817.94;
    height: auto;
    margin: 40px auto 0;
    transform: rotate(15deg);
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 350px;
      right: 25vw;

    margin: 30px auto 0;
    transform: rotate(5deg);
  }
`;