import React from 'react';
import {
  SectionContainer,
  StarBackgroundImage,
  ContentWrapper,
  TopTextBlocksContainer,
  LeftTextBlock,
  RightTextBlock,
  CentralTabletImage,
  FinalQuestionText,
} from './StellarFusionIntroSection.styles';

const StellarFusionIntroSection: React.FC = () => {
  return (
    <SectionContainer id="story">
      <StarBackgroundImage data-aos="fade-in" data-aos-duration="2000" />
      <ContentWrapper>
        <TopTextBlocksContainer>
          <LeftTextBlock data-aos="fade-right" data-aos-delay="300">
            In the heart of a star, hydrogen atoms press together. Under intense
            pressure, they fuse - and light is born. This is fusion. It powers
            suns. It lights galaxies. It’s the most powerful force in the
            universe. Stellar fusion. And it’s where our story begins.
          </LeftTextBlock>
          <RightTextBlock data-aos="fade-left" data-aos-delay="600">
            This is fusion. It powers suns. It lights galaxies. It’s the most
            powerful force in the universe. Stellar fusion. And it’s where our
            story begins.
          </RightTextBlock>
        </TopTextBlocksContainer>

        <CentralTabletImage data-aos="zoom-in" data-aos-delay="500" />

        <FinalQuestionText data-aos="fade-up" data-aos-delay="300">
          Because what if that same principle - could happen inside you?
        </FinalQuestionText>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default StellarFusionIntroSection;
