import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import bottle_chromatherapy from "@assets/images/bottle/bottle_chromatherapy.png"
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// Assumed image path: public/images/bottle_chromatherapy.jpg
const sectionBackgroundImage =bottle_chromatherapy;

export const SectionWrapper = styled(SmartImage)`
  position: relative;
  width: 100%;
  height: 800px; // As per Figma
  background-color: ${({ theme }) => theme.colors.greyLight}; // Fallback: #EEEEEE
  background-image: url(${sectionBackgroundImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // Center text block vertically and horizontally
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl}; // Padding for content

  ${media.tabletDown} {
    height: auto;
    min-height: 500px; // Ensure a decent height for the background image effect
    justify-content: center; 
  }
`;

export const TextContainer = styled.div`
  max-width: 500px; // Based on subtitle width 449px
  z-index: 1; // Ensure text is above any potential pseudo-elements on wrapper
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 1.2; // or 60px
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: 1.2; // or 36px
  color: ${({ theme }) => theme.colors.white};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
