import React from 'react';
import {
  SectionContainer,
  BackgroundImage,
  TextContent,
  IngredientTitle,
  Subtitle,
  Description,
} from './SpermidineSection.styles';

const SpermidineSection: React.FC = () => {
  return (
    <SectionContainer id="spermidine">
      <BackgroundImage data-aos="fade-in" data-aos-duration="1500" />
      <TextContent>
        <IngredientTitle data-aos="fade-right" data-aos-delay="100">
          Spermidine
        </IngredientTitle>
        <Subtitle data-aos="fade-right" data-aos-delay="200">
          The Cellular Renewal Catalyst
        </Subtitle>
        <Description data-aos="fade-right" data-aos-delay="300">
          Spermidine triggers autophagy — your body’s natural process of clearing out old, damaged cells so new ones can thrive. It supports deep cellular cleanup, cognitive function, and long-term health.
        </Description>
        <Description data-aos="fade-right" data-aos-delay="400">
          The result:<br />
          Fresher cells. Sharper mind. A body that regenerates instead of just coping.
        </Description>
        <Description data-aos="fade-right" data-aos-delay="500">
          You're not just maintaining health —<br />
          you're renewing it at the source.
        </Description>
      </TextContent>
    </SectionContainer>
  );
};

export default SpermidineSection;
