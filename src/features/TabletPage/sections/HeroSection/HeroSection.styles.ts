import styled from 'styled-components';
import homepage_sec1 from '@assets/images/products/image-26.png';
import { media } from '../../../../core/theme/theme';

const starsHeroBgUrl = homepage_sec1;

// 🔲 سکشن اصلی
export const HeroSectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: url(${starsHeroBgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 24px;
  padding-top: ${({ theme }) => theme.sizes.navbarHeight};
  text-align: center;

  @media (max-width: 480px) {
    padding-inline: 16px;
  }
`;

// 🔲 تصویر تزئینی (سمت راست بالا)
export const HeroDecorativeImage = styled.div`
  position: absolute;
  top: -50px;
  right: -800px;
  width: 1606px;
  height: 918px;
  background-image: url('https://via.placeholder.com/1606x918/555555/FFFFFF?text=Decorative+Image+26');
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  transform-origin: top left;
  opacity: 0.25;
  z-index: 1;

  ${media.tablet} {
    opacity: 0.15;
    right: -1000px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// 🔲 محتوای اصلی داخل Hero
export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  gap: 16px;
`;
export const DivIntroducingText = styled.div`
 width:100%;
`;
// 🔲 عنوان اصلی (مثلاً: "ما آینده را می‌سازیم")
export const IntroducingText = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: clamp(28px, 6vw, 60px);
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primary};
  word-break: break-word;
  max-width: 100%;
`;

// 🔲 زیرعنوان (مثلاً: "سیستمی هوشمند برای اسناد شما")
export const SubtitleText = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(18px, 4vw, 30px);
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
  word-break: break-word;
  max-width: 100%;
`;

// 🔲 بخش وسطی پایین Hero
export const MidHeroTextContainer = styled.div`
  margin-top: 340px;
  width: 100%;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-left:150px;

  @media (max-width: 768px) {
    margin-top: 40px;
    align-items: center;
    padding-left: 0;
  }
  
  @media (max-width: 480px) {
    margin-top: 32px;
    padding-inline: 8px;
  }
`;

// 🔲 بکگراند بلور پشت متن وسطی
export const MidHeroBackgroundBlur = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 532px;
  max-height: 151px;
  height: 100%;
  background: ${({ theme }) => theme.colors.cardBackground};
  filter: blur(30px);
  opacity: 0.5;
  border-radius: 100px;
  transform: translate(-50%, -50%);
  z-index: -1;

  @media (max-width: 768px) {
    filter: blur(10px);
    opacity: 0.35;
  }
`;

// 🔲 عنوان داخل MidHero (مثلاً: "قدرت در دستان شما")
export const MidHeroTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: clamp(20px, 5vw, 36px);
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

// 🔲 متن زیرعنوان داخل MidHero
export const MidHeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: clamp(16px, 3.5vw, 24px);
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding-inline: 8px;
`;