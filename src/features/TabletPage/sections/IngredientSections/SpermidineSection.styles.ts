import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/image%2052.avif';

const spermidineBgImageUrl = homepage_sec1;

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #002250;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet} {
    height: auto;
    min-height: 600px;
    padding: 80px 20px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px;
    padding: 60px 15px;
    /* برای موبایل متن وسط چین بهتره */
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${spermidineBgImageUrl});
  background-size: cover;
  background-position: center;
  transform: scaleX(-1);
  z-index: 0;
  opacity: 0.7;

  @media (max-width: 768px) {
    /* مطمئن شدن که تصویر درست نمایش داده می شود */
    background-position: center center;
    background-size: cover;
    opacity: 0.7; /* ثابت بمونه */
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 520px;
  padding-left: clamp(30px, 10vw, 148px);
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    max-width: 600px;
    padding-left: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const IngredientTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size};
  line-height: 120%;
  margin-bottom: 15px;

  ${media.tablet} {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 440px;

  ${media.tablet} {
    font-size: 18px;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 485px;

  ${media.tablet} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
