import React from 'react';
import { InfoCard } from './InfoCard';
import { VRSectionContainer } from './VisionRevolutionSection.styled';
import homepage_vision from "../../../../assets/images/home/homepage_vision 1.avif'"
import homepage_revolution from "../../../../assets/images/home/homepage_sec3 1.avif'"

const VisionRevolutionSection: React.FC = () => {
  const handleViewMissionClick = () => {
     
  };

  const handleBecomePartnerClick = () => {
     
  };

  const visionDescription = (
    <>
      To light up the world: turning water into wellness,
      <br />
      kindness into culture, and light into legacy.
    </>
  );

  const revolutionDescription = (
    <>
      The Light-Backed Revolution is here.
      <br />
      Wellness. Wealth. Leadership powered by light.
      <br />
      Join the movement to light up the world from the inside out.
    </>
  );

  return (
    <VRSectionContainer>
      <InfoCard
        title="Our Vision"
        description={visionDescription}
        buttonText="View our mission"
        onButtonClick={handleViewMissionClick}
        // Assuming homepage_vision.jpg is in public/images/
        backgroundImageUrl={homepage_vision}
        // Gradient from Figma: linear-gradient(212.76deg, rgba(2, 22, 19, 0) 49.33%, #021613 97.41%)
        gradientOverlay="linear-gradient(212.76deg, rgba(2, 22, 19, 0) 49.33%, #021613 97.41%)"
        dataAos="zoom-in-right"
      />
      <InfoCard
        title="Revolution"
        description={revolutionDescription}
        buttonText="Become a partner"
        onButtonClick={handleBecomePartnerClick}
        // Assuming homepage_revolution.jpg is in public/images/
        backgroundImageUrl={homepage_revolution}
        // Gradient from Figma: linear-gradient(197.29deg, rgba(8, 53, 66, 0) 44.19%, #083542 93.71%)
        gradientOverlay="linear-gradient(197.29deg, rgba(8, 53, 66, 0) 44.19%, #083542 93.71%)"
        dataAos="zoom-in-left"
        dataAosDelay="150"
      />
    </VRSectionContainer>
  );
};

export default VisionRevolutionSection;
