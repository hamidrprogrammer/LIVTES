// src/features/CTASection/CTASection.styles.ts
import styled from 'styled-components';
import Section from '../../components/Section/Section';
import Text from '../../../../lib/shared/components/Besic/Typography/Text';
import Button from '../../components/Button/Button';

export const CTACustomSection = styled(Section)`
  /* min-height: 446px; from Section prop */
  /* bgGradient from Section prop */
  justify-content: center; /* Center content vertically and horizontally */
`;

export const CTATitleText = styled(Text)`
  /* variant 'sectionTitleLarge' (50px) */
  color: ${({ theme }) => theme.colors.primary}; /* Teal */
  max-width: 300px; /* From Figma */
  margin-bottom: ${({ theme }) => theme.spacing.xl}; /* Space before button, 32px-40px */
  line-height: 100%; /* or 50px */
  text-align: center;
`;

export const CTAActionButton = styled(Button)`
  /* 'isCtaLarge' prop handles specific sizing and textWhite for styling */
  /* textWhite prop makes BG white, text #072C3D */
`;
