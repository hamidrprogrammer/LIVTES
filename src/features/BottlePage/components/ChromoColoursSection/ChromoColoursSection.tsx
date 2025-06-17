import React, { useState } from 'react';
import * as S from './ChromoColoursSection.styles';
import bottleImageUrl from "../../../../assets/images/bottle/decorativeBgUrl.png"
const chromaColors = [
  { id: 'purple', hex: '#8919F5' },
  { id: 'deepBlue', hex: '#1840F5' },
  { id: 'lightBlue', hex: '#19D6F5' },
  { id: 'green', hex: '#22F51B' },
  { id: 'yellow', hex: '#F5DF19' },
  { id: 'orange', hex: '#FE781C' },
  { id: 'red', hex: '#FE241C' },
];

const ChromoColoursSection: React.FC = () => {
  const [activeColor, setActiveColor] = useState<string | null>(chromaColors[0].id);

  const handleColorSelect = (colorId: string) => {
    setActiveColor(colorId);
    console.log('Selected Chromo Color:', colorId);
    // Here you would typically update the bottle's light color in a real app
  };

  return (
    <S.SectionWrapper id="chromo-colours-section">
      <S.DecorativeBackground />
      <S.ContentGrid>
        <S.BottleVisualContainer data-aos="fade-right" data-aos-delay="200">
          <S.BottleImage src={bottleImageUrl} alt="LumiVitae Bottle with Chromo Light" />
        </S.BottleVisualContainer>
        <S.TextContentContainer data-aos="fade-left" data-aos-delay="0">
          <S.Title>Colour Your Hydration. Align Your Energy.</S.Title>
          <S.Paragraph>
            With LumiVitæ’s Chromotherapy, you can personalize your hydration
            experience by choosing from seven unique light colours. Each color
            carries its own energetic signature, aligning with your body’s
            natural rhythm to support balance, clarity, and vitality. Let your
            water become an expression of how you feel. Choose the color that
            fits your moment.
          </S.Paragraph>
        </S.TextContentContainer>
      </S.ContentGrid>
      <S.PaletteContainer data-aos="fade-up" data-aos-delay="300">
        {chromaColors.map((color) => (
          <S.ColorDot
            key={color.id}
            color={color.hex}
            isActive={activeColor === color.id}
            onClick={() => handleColorSelect(color.id)}
            aria-label={`Select ${color.id} color`}
          />
        ))}
      </S.PaletteContainer>
    </S.SectionWrapper>
  );
};

export default ChromoColoursSection;
