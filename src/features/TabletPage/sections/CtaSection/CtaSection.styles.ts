// pillsSection.styled.tsx

import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
const homepage_sec1 = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/pills-sec7-1.avif";

const pillsSec7ImageUrl = homepage_sec1;

export const SectionContainer = styled.section`
  width: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.ctaGradientStart} 0%,
    ${({ theme }) => theme.colors.ctaGradientEnd} 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px clamp(20px, 7vw, 100px);
  flex-wrap: wrap;

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
    gap: 40px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;

  ${media.tablet} {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;

  ${media.tablet} {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(28px, 5vw, 50px);
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  max-width: 100%;
`;

export const PillsImage = styled.div`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 401 / 435.35;
  background-image: url(${pillsSec7ImageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const BoldSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: clamp(16px, 4vw, 20px);
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(15px, 3.8vw, 20px);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;

  li {
    margin-bottom: 10px;
    padding-left: 25px;
    position: relative;

    &::before {
      content: '✓';
      color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 0;
      top: 1px;
    }
  }

  ${media.tablet} {
    li {
      padding-left: 20px;
      &::before {
        content: '›';
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: 768px) {
    li {
      padding-left: 15px;
      font-size: 16px;
    }
  }
`;

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(15px, 4vw, 20px);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: 440px;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.2;
  margin-bottom: 30px;
`;

export const PriceText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(16px, 4vw, 20px);
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

export const IngredientsLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(16px, 4vw, 20px);
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
