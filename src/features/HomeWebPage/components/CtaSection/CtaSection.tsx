/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  CtaSectionContainer,
  CtaContentWrapper,
  CtaHeadline,
} from './CtaSection.styles';

const CtaSection: React.FC = () => {
  const handleExploreBottleClick = () => {
     
  };

  return (
    <CtaSectionContainer id="cta">
      <CtaContentWrapper>
        <CtaHeadline data-aos="fade-right" data-aos-delay="100">
          The Future of Longevity is light.
        </CtaHeadline>
        <div data-aos="fade-left" data-aos-delay="300"> {/* Wrapper for button animation */}
          {/* <Button
            onClick={handleExploreBottleClick}
            variant="secondary"
            size="xlarge" // Use the new xlarge size
            ariaLabel="Explore the bottle"
          >
            Explore the bottle
          </Button> */}
        </div>
      </CtaContentWrapper>
    </CtaSectionContainer>
  );
};

export default CtaSection;
