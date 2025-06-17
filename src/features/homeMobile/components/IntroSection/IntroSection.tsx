// src/features/IntroSection/IntroSection.tsx
import React from 'react';
import { IntroCustomSection, DownArrowIcon, IntroTitle, IntroBody } from './IntroSection.styles';
// import YourDownArrowSvg from '../../assets/icons/down-arrow.svg'; // Placeholder

const IntroSection: React.FC = () => {
  return (
    <IntroCustomSection id="intro" bgColor="lightBackground">
      <DownArrowIcon>
        {/* <YourDownArrowSvg /> */}
        {/* Placeholder SVG for the arrow */}
        <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.97998 0L7.97998 22.2222M7.97998 26.6667L15.96 18.8889L7.97998 26.6667L0 18.8889L7.97998 26.6667Z" strokeWidth="2"/>
        </svg>
      </DownArrowIcon>
      <IntroTitle variant="sectionTitleLarge" as="h2" color="textDark" size="xxxxl" lh="100%" align="center">
        Blending the wisdom of nature.
      </IntroTitle>
      <IntroBody variant="bodyLarge" as="p" color="textDark" align="center">
        With pioneering advanced technology, LumiVitae’s Hydrogen Water Bottle redefines hydration for a healthy lifestyle. A testament to thoughtful design and innovation, the LumiVitae Hydrogen Water Bottle embodies a harmonious fusion of natural inspiration and scientific precision.
      </IntroBody>
      {/* Figma shows a second text block: "With pioneering advanced technology... innovation" (opacity 1)
        and another one: "With pioneering advanced technology... scientific precision." (opacity 0.25, longer)
        Current implementation shows the longer one with opacity 1.
        If truncation is needed, logic for "Read More" or showing only the shorter part would be added here.
      */}
    </IntroCustomSection>
  );
};

export default IntroSection;
