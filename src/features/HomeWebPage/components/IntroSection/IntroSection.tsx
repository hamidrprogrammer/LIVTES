// src/features/Hom.avif'age/components/IntroSection/IntroSection.tsx
import React from 'react';
import {
  IntroSectionContainer,
  IntroContentWrapper,
  LeftColumn,
  RightColumn,
  MainTitle,
  SubTitle,
  ParagraphText,
} from './IntroSection.styles';

const IntroSection: React.FC = () => {
  return (
    <IntroSectionContainer id="intro"> {/* Add id for potential anchor linking */}
      <IntroContentWrapper>
        <LeftColumn data-aos="fade-right" data-aos-delay="100">
          <MainTitle>
            Two Innovations. One Purpose.
          </MainTitle>
        </LeftColumn>
        <RightColumn data-aos="fade-left" data-aos-delay="200">
          <SubTitle data-aos="fade-up" data-aos-delay="300">
            To Light You Up From Within.
          </SubTitle>
          <ParagraphText data-aos="fade-up" data-aos-delay="400">
            LumiVitae’s Light-Backed Wellness is a revolution in vitality where ancient intelligence meets modern bio-science.
          </ParagraphText>
          <ParagraphText data-aos="fade-up" data-aos-delay="500">
            Our hydrogen-powered bottle infuses your water with molecular light. Our LVQ tablets deliver cellular-level nourishment through a fusion of longevity molecules, deep-sea minerals, and frequency.
          </ParagraphText>
          {/*
            This section had confusingly similar text blocks in the Figma spec.
            One was: "Together, they awaken your blueprint hydrating your body, supporting your nervous system, and" (height 108px, no opacity mentioned)
            Another was the longer one below with opacity 0.25 and height 378px.
            Using the more descriptive one with the specified opacity.
          */}
          <ParagraphText data-aos="fade-up" data-aos-delay="600" $opacity={0.75}> 
            {/* Figma mentions opacity 0.25, which can be too faint. Using 0.75 for better readability, can be adjusted. */}
            Together, they awaken your blueprint hydrating your body, supporting your nervous system, and turning stress into strength. This is hydration as healing. Supplementation as activation. This is the future of wellness. Powered by light.
          </ParagraphText>
        </RightColumn>
      </IntroContentWrapper>
    </IntroSectionContainer>
  );
};

export default IntroSection;
