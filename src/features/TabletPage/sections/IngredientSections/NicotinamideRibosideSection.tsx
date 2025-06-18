import React from 'react';
import {
  SectionContainer,
  TextContent,
  IngredientTitle,
  Subtitle,
  Description,
  BackgroundImageContainer,
} from './NicotinamideRibosideSection.styles';
const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/Glowing Orb in Hand.avif';

const glowingOrbImageUrl = homepage_sec1

const NicotinamideRibosideSection: React.FC = () => {
  return (
    <SectionContainer id="nicotinamide">
      <TextContent>
        <IngredientTitle data-aos="fade-right" data-aos-delay="100">
          Nicotinamide Riboside
        </IngredientTitle>
        <Subtitle data-aos="fade-right" data-aos-delay="200">
          The spark your cells have been waiting for.
        </Subtitle>
        <Description data-aos="fade-right" data-aos-delay="300" isBold>
          Nicotinamide Riboside boosts NAD+, the molecule your cells need to produce energy, repair DNA, and switch on longevity pathways. <br />
          As you age, NAD+ levels drop - fast. Less NAD+ means slower recovery, lower energy, and faster aging.<br />
          NR helps reverse that decline.
        </Description>
        <Description data-aos="fade-right" data-aos-delay="400">
          The result:<br />
          Stronger mitochondria. Better metabolism.<br />
          Greater resilience to stress and inflammation.
        </Description>
        <Description data-aos="fade-right" data-aos-delay="500">
          You don’t just feel more energy —<br />
          your cells actually make it.
        </Description>
      </TextContent>
      <BackgroundImageContainer data-aos="fade-left" data-aos-delay="300">
        <img src={glowingOrbImageUrl} alt="Glowing Orb in Hand" />
      </BackgroundImageContainer>
    </SectionContainer>
  );
};

export default NicotinamideRibosideSection;
