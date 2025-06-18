import React from 'react';
import {
  SectionContainer,
  ContentWrapper,
  TextContent,
  IngredientTitle,
  Subtitle,
  Description,
  BackgroundImageContainer,
} from './MagnesiumSection.styles';
const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/image%2051.avif';

// Placeholder for the image path
const magnesiumImageUrl =homepage_sec1;

const MagnesiumSection: React.FC = () => {
  return (
    <SectionContainer id="magnesium"> {/* ID for SecondaryNavbar link */}
      <ContentWrapper>
        <BackgroundImageContainer data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="center-center">
          <img src={magnesiumImageUrl} alt="Magnesium Visual Abstract" />
        </BackgroundImageContainer>
        <TextContent>
          <IngredientTitle data-aos="fade-up" data-aos-delay="100">
            Magnesium
          </IngredientTitle>
          <Subtitle data-aos="fade-up" data-aos-delay="200">
            The master mineral
          </Subtitle>
          <Description data-aos="fade-up" data-aos-delay="300">
            Magnesium fuels over 600 enzymatic reactions — from muscle function to sleep, stress resilience, and ATP energy production. Yet nearly 1 in 2 people are deficient, and your system can’t function optimally without it.
          </Description>
          <Description data-aos="fade-up" data-aos-delay="400">
            LVQ+ delivers a source like no other:<br />
            Born in stardust. Formed in the Dead Sea.<br />
            Now reawakened in your cells.
          </Description>
          <Description data-aos="fade-up" data-aos-delay="500">
            Not just replenishment —<br />
            a reconnection to your core.
          </Description>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MagnesiumSection;
