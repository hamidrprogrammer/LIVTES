import React from 'react';
import {
  SectionContainer,
  BackgroundImage47,
  TextContent,
  MainTitle,
  Subtitle,
  OverlayImage46Container,
} from './YouthAwakenedSection.styles';
const Image = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/image 46.avif'

// Placeholder for the image path
const overlayImage46Url = Image;


const YouthAwakenedSection: React.FC = () => {
  return (
    <SectionContainer>
      <BackgroundImage47 data-aos="fade-in" data-aos-duration="1500" />
      <TextContent>
        <MainTitle data-aos="fade-right" data-aos-delay="200">
          It’s light - coded as fuel. It’s time to shine like you were designed to.
        </MainTitle>
        <Subtitle data-aos="fade-right" data-aos-delay="400">
          Your Youth remembered. <br />Reactived. Your time is now.
        </Subtitle>
      </TextContent>
      <OverlayImage46Container data-aos="fade-left" data-aos-delay="300">
        <img src={overlayImage46Url} alt="Youth Awakened Visual" />
      </OverlayImage46Container>
    </SectionContainer>
  );
};

export default YouthAwakenedSection;
