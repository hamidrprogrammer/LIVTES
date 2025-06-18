import React from 'react';
import { SCSectionContainer } from './ScienceCommunitySection.styles';
// InfoCard is already created and can be imported from its location.
// Assuming it's in VisionRevolutionSection for now as per previous step, adjust path if moved to common.
import { InfoCard } from '../VisionRevolutionSection/InfoCard';
import homepage_science from "../../../../assets/images/home/homepage_sec3 1.avif'"
import homepage_community from "../../../../assets/images/home/homepage_community 1.avif'"

const ScienceCommunitySection: React.FC = () => {
  const handleExploreScienceClick = () => {
     
  };

  const handleJoinCommunityClick = () => {
     
  };

  const scienceDescription = (
    <>
      Harnessing the power of molecular hydrogen to support
      <br />
      energy, immunity, and cellular vitality.
    </>
  );

  const communityDescription = (
    <>
      Be part of a living network of light where wellness is shared,
      <br />
      kindness is culture, and every journey uplifts the whole.
      <br />
      Together, we rise. Together, we shine.
    </>
  );

  return (
    <SCSectionContainer>
      <InfoCard
        title="Science"
        description={scienceDescription}
        buttonText="Explore the science"
        onButtonClick={handleExploreScienceClick}
        // Assuming homepage_science.jpg is in public/images/
        backgroundImageUrl={homepage_science}
        // Gradient from Figma: linear-gradient(202.92deg, rgba(5, 25, 38, 0) 45.09%, #051926 94.85%)
        gradientOverlay="linear-gradient(202.92deg, rgba(5, 25, 38, 0) 45.09%, #051926 94.85%)"
        dataAos="zoom-in-right"
        dataAosDelay="50" // Slight delay if previous section also animates
      />
      <InfoCard
        title="Community"
        description={communityDescription}
        buttonText="Join the community"
        onButtonClick={handleJoinCommunityClick}
        // Assuming homepage_community.jpg is in public/images/
        backgroundImageUrl={homepage_community}
        // Gradient from Figma: linear-gradient(194.15deg, rgba(30, 35, 20, 0) 53.31%, #1E2314 81.26%)
        gradientOverlay="linear-gradient(194.15deg, rgba(30, 35, 20, 0) 53.31%, #1E2314 81.26%)"
        dataAos="zoom-in-left"
        dataAosDelay="200"
      />
    </SCSectionContainer>
  );
};

export default ScienceCommunitySection;
