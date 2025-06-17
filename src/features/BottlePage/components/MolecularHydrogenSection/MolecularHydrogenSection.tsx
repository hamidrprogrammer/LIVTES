import React from 'react';
import * as S from './MolecularHydrogenSection.styles';

const MolecularHydrogenSection: React.FC = () => {
  return (
    <S.SectionWrapper id="molecular-hydrogen-section">
      <S.BackgroundImage mode='background' />
      <S.ContentContainer>
        <S.TextBlock data-aos="fade-right" data-aos-duration="1200">
          <S.Title>Molecular Hydrogen</S.Title>
          <S.Subtitle>The Smallest Molecule. The Biggest Impact.</S.Subtitle>
          <S.Paragraph>
            It’s the simplest element in the universe—yet one of the most
            powerful for the human body. Molecular hydrogen (H2) is redefining
            what’s possible in cellular health, recovery, and longevity. So
            small, it reaches where others can’t. H2 is the lightest, most
            bioavailable molecule, penetrating deep into cells and even
            crossing the blood-brain barrier. It works at the source of
            oxidative stress, targeting and neutralizing the most harmful free
            radicals before they cause damage.
          </S.Paragraph>
        </S.TextBlock>
      </S.ContentContainer>
    </S.SectionWrapper>
  );
};

export default MolecularHydrogenSection;
