import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
const plante = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/plante.avif'
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// Assuming image path: public/images/earth_background_0100.avif' (based on Figma '0100 1')
const sectionBackgroundImage = plante;

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1171px; // As per Figma
  background-color: ${({ theme }) => theme.colors.greyLight}; // Fallback: #EEEEEE
  background-image: url(${sectionBackgroundImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column; // To position title
  align-items: center; // Center title horizontally
  justify-content: flex-start; // Align title towards the top
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  padding-top: 150px; // (2976px - 2826px) from Figma for the title's top position

  ${media.tabletDown} {
    height: auto;
    min-height: 600px; // Ensure a decent height for the background image effect
    padding-top: ${({ theme }) => theme.spacing.xxl};
    padding-bottom: ${({ theme }) => theme.spacing.xxl};
    justify-content: center; // Center title more generally on smaller screens
  }

  @media (max-width: 768px) {
    min-height: 400px;
    padding-top: ${({ theme }) => theme.spacing.xl};
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // 300
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 1.2; // or 60px
  color: ${({ theme }) => theme.colors.white};
  max-width: 468px; // As per Figma width
  // The wrapper handles text-align: center and align-items: center
  margin: 0; // Remove default margins

  ${media.tabletDown} {
    font-size: 40px; // Adjust size for smaller screens
    max-width: 90%;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
