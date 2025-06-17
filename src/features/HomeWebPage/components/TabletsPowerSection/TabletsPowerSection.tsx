// src/features/HomeWebPage/components/TabletsPowerSection/TabletsPowerSection.tsx
import React from 'react';
import {
  TabletsPowerSectionContainer,
  TabletsPowerContentWrapper,
  TextContent,
  SectionTitle,
  SectionDescription,
  ButtonsWrapper,
} from './TabletsPowerSection.styles';
// import { Button } from '../common/Button';

const TabletsPowerSection: React.FC = () => {
  

  return (
    <TabletsPowerSectionContainer id="tablets-power">
      <TabletsPowerContentWrapper>
        <TextContent data-aos="fade-left"> {/* Text comes from left on wider screens */}
          <SectionTitle>The Power of the Stars</SectionTitle>
          <SectionDescription>
            Encoded in a Tablet. Molecular hydrogen. Dead Sea magnesium. Longevity molecules. Drop. Dissolve. Awaken Vitality.
          </SectionDescription>
          <ButtonsWrapper>
            {/* <Button
              onClick={handleLearnMoreClick}
              variant="secondary" // White background, dark text
              size="small" // 18px font size
              ariaLabel="Learn more about the tablets"
            >
              Learn more
            </Button>
            <Button
              onClick={handleStartSubscriptionClick}
              variant="tertiary" // Transparent bg, accent border
              size="small" // 18px font size
              ariaLabel="Start subscription for tablets"
            >
              Start subscription
            </Button> */}
          </ButtonsWrapper>
        </TextContent>
      </TabletsPowerContentWrapper>
    </TabletsPowerSectionContainer>
  );
};

export default TabletsPowerSection;
