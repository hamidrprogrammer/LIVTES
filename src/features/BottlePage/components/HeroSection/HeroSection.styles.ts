// BottlePage/components/HeroSection/HeroSection.styles.ts
import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme'; // Assuming Theme is correctly typed

const heroBackgroundImage = '../../../../assets/images/bottle/bottle-hand-gold-bottle-1.png';
const heroBackgroundFallbackColor = '#000000';

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 860px;
  background-color: ${heroBackgroundFallbackColor};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  overflow: hidden;

  ${media.tabletDown} {
    height: auto;
    min-height: 700px;
    padding-top: 100px;
    padding-bottom: ${({ theme }) => theme.spacing.xxl};
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 768px) { // Ensure this matches media.tabletDown if different
    min-height: 600px;
  }
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../../../assets/images/bottle_sec1.jpg') no-repeat center center/cover;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tabletDown} {
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md}; // Consistent mobile padding
  }
`;

export const TextBlock = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.tabletDown} {
    max-width: 100%;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h1Size};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.accentCyan};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${media.tabletDown} {
    font-size: 42px; // Slightly adjusted from 48px for balance
  }
  @media (max-width: 480px) { // Finer control for smaller screens
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.h4Size};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  width: 100%; /* Take available width */
  max-width: 350px; /* But not more than 350px */

  ${media.tabletDown} {
    font-size: 18px;
    max-width: 90%; /* Adjust max-width for mobile */
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens if needed */

  ${media.tabletDown} {
    flex-direction: column;
    align-items: center; // Center buttons if they don't take full width
    width: 100%;
    max-width: 320px; // Set a max-width for the buttons area on mobile
    margin-left: auto;
    margin-right: auto;
  }
`;

const BaseButton = styled.button`
  padding: 10px 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.ctaSize}; // 18px
  line-height: 23px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 150px; /* Use min-width instead of width */
  height: 45px;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  ${media.tabletDown} {
    width: 100%; // Make buttons take full width of their ButtonGroup container
    font-size: 16px;
    padding: 12px 20px;
    min-height: 48px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const SecondaryButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.1);
  border-color: ${({ theme }) => theme.colors.accentCyan};
  color: ${({ theme }) => theme.colors.accentCyan};
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const ImageBlock = styled.div`
  position: relative;
  width: 703px;
  height: 833px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media.tabletDown} {
    width: 80%;
    max-width: 450px; // Adjusted max-width
    height: auto;
    margin-top: ${({ theme }) => theme.spacing.lg}; // Reduced margin from xl
  }
  @media (max-width: 480px) {
    width: 90%;
    max-width: 320px;
  }
`;