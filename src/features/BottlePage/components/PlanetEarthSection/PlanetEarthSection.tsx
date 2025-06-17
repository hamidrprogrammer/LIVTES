import React from 'react';
import * as S from './PlanetEarthSection.styles';

const PlanetEarthSection: React.FC = () => {
  return (
    <S.SectionWrapper id="planet-earth-section-1">
      <S.Title data-aos="fade-up" data-aos-duration="1000">
        We created Planet Earth in a Bottle.
      </S.Title>
      {/* This section is primarily visual. More content could be added if needed. */}
    </S.SectionWrapper>
  );
};

export default PlanetEarthSection;
