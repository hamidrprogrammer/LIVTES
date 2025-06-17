import React from 'react';
import {
  MainIngredientsBlockContainer,
  IntroTitleContainer,
  IntroTitle,
} from './IngredientsIntroSection.styles';
import MolecularHydrogenSection from './MolecularHydrogenSection';

const IngredientsIntroSection: React.FC = () => {
  return (
    <MainIngredientsBlockContainer>
      <IntroTitleContainer>
        <IntroTitle data-aos="fade-up">
          We begin with the most powerful one of all...
        </IntroTitle>
      </IntroTitleContainer>
      
      <MolecularHydrogenSection />
    </MainIngredientsBlockContainer>
  );
};

export default IngredientsIntroSection;
