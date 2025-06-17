import React from 'react';
import {
  HydrogenSectionContentContainer,
  TextContent,
  IngredientTitle,
  Subtitle,
  DescriptionList,
} from './MolecularHydrogenSection.styles';

const MolecularHydrogenSection: React.FC = () => {
  const benefits = [
    "Neutralizes oxidative stress — the root cause of aging",
    "Penetrates cells deeply, even the brain — unmatched bioavailability",
    "Supercharges mitochondria — boosting energy, clarity, and endurance",
    "Focus. Recovery. Deep cellular breath.",
  ];

  return (
    <HydrogenSectionContentContainer id="hydrogen">
      <TextContent>
        <IngredientTitle data-aos="fade-left" data-aos-delay="100">
          Molecular Hydrogen (H2)
        </IngredientTitle>
        <Subtitle data-aos="fade-left" data-aos-delay="200">
          Smallest molecule. Biggest shift.
        </Subtitle>
        <DescriptionList data-aos="fade-left" data-aos-delay="300">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </DescriptionList>
      </TextContent>
    </HydrogenSectionContentContainer>
  );
};

export default MolecularHydrogenSection;
