import React from 'react';
import * as S from './MagneticFieldInfoSection.styles';

const MagneticFieldInfoSection: React.FC = () => {
  return (
    <S.SectionWrapper id="magnetic-field-info-section">
      <S.ContentContainer>
        <S.TextContainer data-aos="fade-left">
          <S.Title>Magnetic Field</S.Title>
          <S.Subtitle>Earth’s Energy. Infused in Every Sip.</S.Subtitle>
          <S.Paragraph>
            Water in nature is never still—it moves, flows, and interacts with
            the Earth’s magnetic field, maintaining its natural vitality.
            LumiVitæ’s Magnetic Base recreates this effect, using intricately
            calibrated magnets to mimic the Earth’s core energy. This subtle
            yet powerful field enhances the structure of water, supporting
            natural alignment, bioavailability, and cellular balance.
            Hydration, as nature intended—alive, energized, and in harmony
            with the world around you.
          </S.Paragraph>
        </S.TextContainer>
      </S.ContentContainer>
    </S.SectionWrapper>
  );
};

export default MagneticFieldInfoSection;
