import React from 'react';
import {
  SectionContainer,
  BackgroundImage,
  TextContent,
  IngredientTitle,
  Subtitle,
  Description,
} from './VitaminB12Section.styles';

const VitaminB12Section: React.FC = () => {
  return (
    <SectionContainer id="vitamin-b12"> {/* Specific ID, or could be part of a wrapper with id="vitamins" */}
      <BackgroundImage data-aos="fade-in" data-aos-duration="1500" />
      <TextContent>
        <IngredientTitle data-aos="fade-left" data-aos-delay="100">
          Vitamin B12
        </IngredientTitle>
        <Subtitle data-aos="fade-left" data-aos-delay="200">
          Nervous system protector. Energy clarity from within.
        </Subtitle>
        <Description data-aos="fade-left" data-aos-delay="300">
          Vitamin B12 plays a critical role in nerve health, mood balance, and DNA repair. It supports red blood cell formation and keeps your brain clear, sharp, and resilient.
        </Description>
        <Description data-aos="fade-left" data-aos-delay="400">
          LVQ+ uses the active form of B12 (methylcobalamin) — highly bioavailable and gentle on the body.
        </Description>
        <Description data-aos="fade-left" data-aos-delay="500">
          The result:<br />
          Steadier focus. Deeper calm. More energy that feels clean — not rushed.
        </Description>
        <Description data-aos="fade-left" data-aos-delay="600">
          This isn’t stimulation.<br />
          It’s nervous system nourishment.
        </Description>
      </TextContent>
    </SectionContainer>
  );
};

export default VitaminB12Section;
