import React from 'react';
import SharedButton from '../../components/SharedButton/SharedButton';
import {
  SectionContainer,
  LeftColumn,
  RightColumn,
  MainTitle,
  PillsImage,
  BoldSubtitle,
  BenefitsList,
  Tagline,
  Divider,
  PriceText,
  IngredientsLink,
} from './CtaSection.styles';
import { useNavigate } from 'react-router-dom';

const CtaSection: React.FC = () => {
  const benefits = [
    "A calm, regulated nervous system",
    "A clear, focused mind",
    "Limitless energy from your core",
    "Regeneration from the inside out",
    "Light flowing through every cell",
  ];
  const navigator = useNavigate();

  const handleStartSubscription = () => {
 navigator("/tablete")
    // Navigation or modal logic
  };

  const handleIngredientsTableClick = () => {
     
    // Navigation or modal logic
  };

  return (
    <SectionContainer>
      <LeftColumn data-aos="fade-right" data-aos-delay="200">
        <MainTitle>
          Light in the form of tablets
        </MainTitle>
        <PillsImage />
      </LeftColumn>

      <RightColumn data-aos="fade-left" data-aos-delay="200">
        <BoldSubtitle>
          With LVQ+, that spark is remembered. Activated.
        </BoldSubtitle>
        <BenefitsList>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </BenefitsList>
        <Tagline>
          This is the universe in motion - in a glass of water.
        </Tagline>
        <Divider />
       
      </RightColumn>
    </SectionContainer>
  );
};
//  <PriceText>
//           Monthly Subscription €XX.XX {/* Replace XX.XX with actual price */}
//         </PriceText>
//         <SharedButton variant="secondary" onClick={handleStartSubscription}>
//           Start Subscription
//         </SharedButton>
//         <IngredientsLink onClick={handleIngredientsTableClick}>
//           Ingredients Table?
//         </IngredientsLink>
export default CtaSection;
