import styled from 'styled-components'; 
import { media } from '../../../../core/theme/theme';
const whyYouFeelItBgUrl = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/e85a450827%201-1440.avif";

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.black};
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
    text-align: center;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(258.37deg, rgba(0, 0, 0, 0) 33.04%, #000000 96.6%), url(${whyYouFeelItBgUrl});
  background-size: cover;
  background-position: center;
  z-index: 0;
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
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size};
  line-height: 120%;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  max-width: 440px;

  ${media.tablet} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
