import React from 'react';
import {
  SectionContainer,
  BackgroundImage,
  TopTitle,
  TextBlocksWrapper,
  LeftTextBlock,
  RightTextBlock,
  RotatedTabletImage,
} from './StarWithinSection.styles';

const StarWithinSection: React.FC = () => {
  return (
    <SectionContainer>
      <BackgroundImage data-aos="fade-in" data-aos-duration="2000" />
      <TopTitle data-aos="fade-up">
        And when they come together...
      </TopTitle>
      <TextBlocksWrapper>
        <LeftTextBlock data-aos="fade-right" data-aos-delay="200">
          This isn’t stimulation. It’s cellular remembrance. Each molecule in LVQ+ speaks your body’s original code - activating energy, clarity, and repair from within. You don’t just feel better. You become who you were always meant to be. This is fusion. Tuned to your original design.
        </LeftTextBlock>
       
      </TextBlocksWrapper>
      <RotatedTabletImage data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1000" />
   <RightTextBlock data-aos="fade-left" data-aos-delay="200">
          <h3>Because the Star has always been in You...</h3>
          <p>
            You didn’t come here to dim your light.<br/> You were born of stardust - <br/>pulsing with ancient intelligence.<br/> Now embodied in this very moment as a radiant, awakened human.
          </p>
        </RightTextBlock>
    </SectionContainer>
  );
};

export default StarWithinSection;
