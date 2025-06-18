import React from 'react';
import {
  SectionContainer,
  TextContent,
  IngredientTitle,
  Subtitle,
  Description,
  BackgroundImageContainer,
} from './ResveratrolSection.styles';
const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/image 53.avif';

const resveratrolImageUrl = homepage_sec1;

const ResveratrolSection: React.FC = () => {
  return (
    <SectionContainer id="resveratrol">
      <BackgroundImageContainer data-aos="fade-right" data-aos-delay="300">
        <img src={resveratrolImageUrl} alt="Resveratrol Visual" />
      </BackgroundImageContainer>
      <TextContent>
        <IngredientTitle data-aos="fade-left" data-aos-delay="100">
          Resveratrol
        </IngredientTitle>
        <Subtitle data-aos="fade-left" data-aos-delay="200">
          The molecule that activates your body’s longevity code.
        </Subtitle>
        <Description data-aos="fade-left" data-aos-delay="300">
          Resveratrol activates sirtuins — genes that protect your DNA, reduce inflammation, and support healthy aging. It mimics the effects of fasting, helping your body function younger, longer.
        </Description>
        <Description data-aos="fade-left" data-aos-delay="400">
          The result:<br />
          Improved cellular repair. Better inflammation control.<br />
          Slower biological aging.
        </Description>
        <Description data-aos="fade-left" data-aos-delay="500">
          You don’t just slow the clock - <br />
          you shift how your body ages.
        </Description>
      </TextContent>
    </SectionContainer>
  );
};

export default ResveratrolSection;
