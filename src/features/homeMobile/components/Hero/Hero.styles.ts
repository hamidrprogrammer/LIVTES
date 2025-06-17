// src/features/Hero/Hero.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../../components/Section/Section'; // Using the Section base
import Text from '../../../../lib/shared/components/Besic/Typography/Text';
import Button from '../../components/Button/Button';

export const HeroSection = styled(Section)`
  justify-content: space-between; /* Push content to top/center/bottom */
  color: ${({ theme }) => theme.colors.white};
  /* Padding is handled by Section component, ensure noPaddingY and noPaddingX are set correctly */
  /* min-height: 780px is set by Section component prop */
  /* background image is set by Section component prop */
`;

export const HeroContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Takes available space to center content vertically */
  padding-top: 80px; /* Offset for Navbar + some breathing room */
  width: 100%; /* Ensure it spans the width of the section */
`;

export const HeroTitleText = styled(Text)`
  max-width: 333px; /* From Figma */
  /* Variant 'heroTitle' handles styling */
  margin-bottom: ${({ theme }) => theme.spacing.xl}; /* More space after title */
`;

export const HeroCtaContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xl}; /* approx 60px from bottom */
  margin-top: auto; /* Pushes this container to the bottom of its flex parent */
`;

export const HeroSubtitleText = styled(Text)`
  /* Variant 'heroSubtitle' handles styling */
  margin-bottom: ${({ theme }) => theme.spacing.medium}; /* Space before button */
`;

export const HeroActionButton = styled(Button)`
  /* Styling for secondary button is handled by Button component props */
`;
