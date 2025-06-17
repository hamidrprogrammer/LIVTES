import React from 'react';
import {
  SectionContainer,
  TextContent,
  IngredientTitle,
  Subtitle,
  Description,
  ImagesContainer,
  Image49,
  Image50,
} from './VitaminCSection.styles';

const VitaminCSection: React.FC = () => {
  return (
    <SectionContainer id="vitamins"> {/* ID for SecondaryNavbar "Vitamins" link */}
      <TextContent>
        <IngredientTitle data-aos="fade-right" data-aos-delay="100">
          Vitamin C
        </IngredientTitle>
        <Subtitle data-aos="fade-right" data-aos-delay="200">
          The antioxidant that amplifies everything.
        </Subtitle>
        <Description data-aos="fade-right" data-aos-delay="300">
          Vitamin C does more than boost immunity - it recharges your body's entire defense system. It regenerates other antioxidants, enhances iron absorption, and supports collagen production at the cellular level.
        </Description>
        <Description data-aos="fade-right" data-aos-delay="400">
          Working in synergy with hydrogen and resveratrol, it helps reduce oxidative stress and extend cellular vitality.
        </Description>
        <Description data-aos="fade-right" data-aos-delay="500">
          This isn’t just protection — it’s amplification.
        </Description>
      </TextContent>
      <ImagesContainer>
        {/* The exact layering and precise overlap of image 49 and 50 might need finessing */}
        <Image50 data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="center-bottom"/>
        <Image49 data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="center-bottom"/>
      </ImagesContainer>
    </SectionContainer>
  );
};

export default VitaminCSection;
