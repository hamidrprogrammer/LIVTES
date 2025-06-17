// src/features/CTASection/CTASection.tsx
import React from 'react';
import { CTACustomSection, CTATitleText, CTAActionButton } from './CTASection.styles';
import { theme } from '../../../../core/theme/theme';

const ctaBgGradient = `linear-gradient(180deg, ${theme.colors.ctaBackgroundStart} 0%, ${theme.colors.ctaBackgroundEnd} 100%)`;

const CTASection: React.FC = () => {
  return (
    <CTACustomSection
      id="cta"
      bgGradient={ctaBgGradient}
      minHeight="446px"
      fullWidth
    >
      <CTATitleText variant="sectionTitleLarge" as="h2">
        The Future of Longevity is light.
      </CTATitleText>
      <CTAActionButton
        href="#explore-bottle-cta" // Replace with actual link
        textWhite // White background, dark text
        isCtaLarge // For specific padding/font size/height
        largeRadius // 200px radius
      >
        Explore the bottle
      </CTAActionButton>
    </CTACustomSection>
  );
};

export default CTASection;
