import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import styled from 'styled-components';

export const FullWidthSection = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #000; /* Default background */
`;

export const SectionContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

export const SectionBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'none')};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const BaseButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  padding: 10px 24px; /* Standardized padding */
  border-radius: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  line-height: normal;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px; /* Consistent height for desktop */
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 20px;
    width: 100%; /* Buttons take full width on mobile inside containers */
    min-height: 48px; /* Ensure a good tap height on mobile */
  }
`;

export const PrimaryButton = styled(BaseButton)`
  color: #1c1f23;
  background-color: #ffffff;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(BaseButton)`
  color: #3ffff8;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #3ffff8;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;