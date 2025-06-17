import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import homepage_sec1 from '@assets/images/products/Ethereal Water Droplets 1.png'

const etherealWaterDropletsBgUrl = homepage_sec1;

export const MainIngredientsBlockContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 1000px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(266.34deg, rgba(0, 0, 0, 0) 50.58%, #000000 97.39%), url(${etherealWaterDropletsBgUrl});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
    z-index: 0;
    opacity: 0.7;
  }

  ${media.tablet} {
    min-height: auto;
  }

  @media (max-width: 768px) {
    min-height: auto; // موبایل هم ارتفاع رو خودکار می‌کنیم
    padding: 60px 15px; // برای موبایل یه padding مناسب می‌زنیم
  }
`;

export const IntroTitleContainer = styled.div`
  padding: 120px 20px 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;

  ${media.tablet} {
    padding: 80px 15px 40px; // برای تبلت padding کمتر و مناسب‌تر
  }

  @media (max-width: 768px) {
    padding: 60px 10px 30px; // موبایل باز padding کوچک‌تر و متناسب
  }
`;

export const IntroTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size}; // دکستاپ مثلا 48px
  line-height: 120%;
  color: ${({ theme }) => theme.colors.white};
  max-width: 1006px;

  ${media.tablet} {
    font-size: 40px;
    max-width: 90%;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 100%; // موبایل حداکثر عرض رو می‌گیریم
    padding: 0 10px; // کمی padding افقی که متن نچسبه به لبه‌ها
  }
`;
