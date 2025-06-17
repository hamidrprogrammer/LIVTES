import React from 'react';
import {
  SectionContainer,
  BackgroundImage,
  TextContent,
  Title,
  Paragraph,
} from './WhyYouFeelItSection.styles';

const WhyYouFeelItSection: React.FC = () => {
  return (
    <SectionContainer id="feeling-it">
      <BackgroundImage data-aos="fade-in" data-aos-duration="1500" />
      <TextContent>
        <Title data-aos="fade-right" data-aos-delay="200">
          Why You Feel It
        </Title>
        <Paragraph data-aos="fade-right" data-aos-delay="400">
          That feeling isn’t random.<br />
          It’s the result of precise cellular design.<br />
          LVQ+ was formulated by Taryn Lee, Founder & CEO of LumiVitae and Dr. Tyler LeBaron, founder of the Molecular Hydrogen Institute — exclusively for LumiVitae. Every ingredient serves one purpose:<br />
          To bring Cellular Fusion to life inside your body.
        </Paragraph>
      </TextContent>
    </SectionContainer>
  );
};

export default WhyYouFeelItSection;
