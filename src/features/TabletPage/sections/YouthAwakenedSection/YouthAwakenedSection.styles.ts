import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import Image from '../../../../assets/images/products/image 47.png'

// اینجا مسیر تصویر زمینه رو به درستی مقدار دادم
const sectionBgImage47Url = Image;

// برای تصویر اورلی (الگوی ساده برای تست، شما جایگزین کنید)

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px; /* دسکتاپ ثابت */
  background-color: #002250; /* رنگ پس‌زمینه */

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet} {
    height: auto;
    min-height: 700px;
    padding: 80px 20px;
    justify-content: center;
    flex-direction: column-reverse; /* تصویر بالای متن */
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 600px;
    padding: 60px 15px;

    /* موبایل: چیدمان عمودی با فاصله و وسط چین */
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center; /* متن وسط چین */
  }
`;

export const BackgroundImage47 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${sectionBgImage47Url});
  background-size: cover;
  background-position: center;
  z-index: 0;
  opacity: 0.8;
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 617px;
  padding-left: clamp(30px, 10vw, 148px);
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    max-width: 90%;
    padding-left: 0;
    text-align: center;
    margin-top: 40px;
    order: 2; /* بعد از تصویر */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    text-align: center;
    margin-top: 30px;
    order: 2;
  }
`;

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size}; /* 50px دسکتاپ */
  line-height: 120%;
  margin-bottom: 30px;

  ${media.tablet} {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h3Size}; /* 30px دسکتاپ */
  line-height: 120%;
  max-width: 485px;

  ${media.tablet} {
    font-size: 26px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    max-width: 100%;
    margin: 0 auto; /* مرکز کردن اگر لازم بود */
  }
`;

export const OverlayImage46Container = styled.div`
  position: absolute;
  top: 37px;
  left: 831px;
  width: 609px;
  height: 763px;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media.tablet} {
    position: relative;
    width: 80%;
    max-width: 450px;
    height: auto;
    aspect-ratio: 609 / 763;
    left: auto;
    top: auto;
    margin: 0 auto 30px auto;
    order: 1; /* بالاتر از متن */
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;
    margin-bottom: 25px;
  }
`;
