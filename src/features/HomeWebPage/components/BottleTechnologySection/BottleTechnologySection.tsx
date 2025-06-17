/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/HomeWebPage/components/BottleTechnologySection/BottleTechnologySection.tsx
import React from 'react';
import {
  BottleTechSectionContainer,
  BottleTechContentWrapper,
  TextContent,
  SectionTitle,
  SectionDescription,
  ButtonsWrapper,
  ImageWrapper,
} from './BottleTechnologySection.styles';
import homepage_sec1 from "../../../../assets/images/home/homepage_sec3 1.png"
import { useNavigate } from 'react-router-dom';

const BottleTechnologySection: React.FC = () => {
  const nvigate=useNavigate();
  
  const handleLearnMoreClick = () => {
    console.log('Bottle Tech - Learn More clicked');
  };

  const handleBuyBottleClick = () => {
    nvigate('/products-bottle/1')
    console.log('Bottle Tech - Buy Bottle clicked');
  };

  return (
    <BottleTechSectionContainer id="bottle-tech">
      <BottleTechContentWrapper>
        <TextContent data-aos="fade-right">
          <SectionTitle>LumiVitae Hydrogen Water Technology</SectionTitle>
          <SectionDescription>
            The Future of Water is Intelligent. Infused with frequency, gravity, and pure molecular hydrogen to harmonize your cells and ignite the light within.
          </SectionDescription>
          <ButtonsWrapper>
            {/* <Button
              onClick={handleLearnMoreClick}
              variant="secondary" // White background, dark text
              size="small" // 18px font size
              ariaLabel="Learn more about LumiVitae Hydrogen Water Technology"
            >
              Learn more
            </Button>
            <Button
              onClick={handleBuyBottleClick}
              variant="tertiary" // Transparent bg, accent border
              size="small" // 18px font size
              ariaLabel="Buy the LumiVitae bottle"
            >
              Buy bottle
            </Button> */}
          </ButtonsWrapper>
        </TextContent>
        <ImageWrapper data-aos="fade-left" data-aos-delay="200">
          {/* Assuming homepage_sec3.png is in public/images/ */}
          <img src={homepage_sec1} alt="LumiVitae Hydrogen Bottle Technology" />
        </ImageWrapper>
      </BottleTechContentWrapper>
    </BottleTechSectionContainer>
  );
};

export default BottleTechnologySection;
