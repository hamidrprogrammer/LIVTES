import React from 'react';
import {
  UnderwaterSectionContainer,
  BackgroundImage29,
  DecorativeImage26,
  TextContent,
  Title,
  Subtitle,
} from './UnderwaterSection.styles';

const UnderwaterSection: React.FC = () => {
  return (
    <UnderwaterSectionContainer>
      <BackgroundImage29 data-aos="fade-in" data-aos-duration="1500" />
      <DecorativeImage26 data-aos="zoom-in" data-aos-delay="500" />
      
      <TextContent>
        <Title data-aos="fade-left" data-aos-delay="300">
          Now in Your Water.
        </Title>
        <Subtitle data-aos="fade-left" data-aos-delay="500">
          A Tablet Unlike Anything Before. Drop. Dissolve. Transform.
        </Subtitle>
      </TextContent>
      
      {/* The Figma design mentions a hidden "Mask group" containing "Rectangle 42" and "image 27".
        If these are intended for a specific state or animation, their implementation would depend on that.
        Example:
        <HiddenVisual>
          <div className="rectangle-42-styles"></div>
          <img src="path/to/image-27.png" alt="Hidden decorative element" />
        </HiddenVisual>
      */}
    </UnderwaterSectionContainer>
  );
};

export default UnderwaterSection;
