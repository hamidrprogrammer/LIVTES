import React from 'react';
import * as S from './ChromotherapyIntroSection.styles';

const ChromotherapyIntroSection: React.FC = () => {
  return (
    <S.SectionWrapper id="chromotherapy-intro-section">
      <S.TextContainer data-aos="fade-up" data-aos-duration="1000">
        <S.Title>Chromotherapy</S.Title>
        <S.Subtitle>Color your style and fit your mood</S.Subtitle>
      </S.TextContainer>
    </S.SectionWrapper>
  );
};

export default ChromotherapyIntroSection;
