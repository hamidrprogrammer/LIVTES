// magnesiumSection.styled.tsx
// نسخهٔ نهاییِ بهینه‌سازی شده – دسکتاپ دست‌نخورده، موبایل کاملاً ریسپانسیو

import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';


/* ────────────────────────── Shell ────────────────────────── */

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px;                     /* ← طبق طرح دسکتاپ */
  background-color: #000101;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;         /* محتوا در سمت راست */

  ${media.tablet} {
    height: auto;
    min-height: 700px;
    padding: 80px 20px;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    height: auto;                    /* ← جلوگیری از اسکرول عمودی کاذب */
    min-height: 600px;
    padding: 60px 15px;
    overflow-x: hidden;              /* ← جلوگیری از اسکرول افقی احتمالی */
  }
`;

/* ────────────────────────── Wrapper ────────────────────────── */

export const ContentWrapper = styled.div`
  position: relative;
  width: calc(100% - clamp(30px, 10vw, 148px)); /* فضای خالی چپ در دسکتاپ */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.tablet} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

/* ────────────────────────── Text Block ────────────────────────── */

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 520px;
  padding-right: clamp(30px, 8vw, 100px);
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  word-break: break-word;

  ${media.tablet} {
    max-width: 600px;
    padding-right: 0;
    text-align: center;
    margin-top: 30px;
    order: 2;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
  }
`;

/* ────────────────────────── Typography ────────────────────────── */

export const IngredientTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: clamp(24px, 5vw, ${({ theme }) => theme.typography.h3Size});
  line-height: 120%;
  margin-bottom: 15px;
`;

export const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(16px, 4.5vw, 20px);
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 492px;

  ${media.tablet} {
    max-width: 100%;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(16px, 4.5vw, 20px);
  line-height: 140%;
  margin-bottom: 20px;
  max-width: 487px;

  ${media.tablet} {
    max-width: 100%;
  }
`;

/* ────────────────────────── Image ────────────────────────── */

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: -5px;
  left: -150px;
  width: 881px;
  height: 881px;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    position: relative;
    width: 80%;
    max-width: 450px;
    height: auto;
    margin: 0 auto 30px;
    order: 1;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;
  }
`;
