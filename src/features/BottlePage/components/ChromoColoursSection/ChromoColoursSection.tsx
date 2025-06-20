import React, { useState } from 'react';
import * as S from './ChromoColoursSection.styles';
const bottleImageUrl = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/decorativeBgUrl.avif';
import bottleI from '@assets/images/bottle/decorativeBgUrltree.webp'
const chromaColors = [
  { id: 'purple', hex: '#8919F5' },
  { id: 'deepBlue', hex: '#1840F5' },
  { id: 'lightBlue', hex: '#19D6F5' },
  { id: 'green', hex: '#22F51B' },
  { id: 'yellow', hex: '#F5DF19' },
  { id: 'orange', hex: '#FE781C' },
  { id: 'red', hex: '#FE241C' },
];
type ColorId = keyof typeof colorFilters; // 'purple' | 'deepBlue' | 'lightBlue' | ...

const colorFilters = {
  purple: 'sepia(1) hue-rotate(280deg) saturate(6)',
  deepBlue: 'sepia(1) hue-rotate(200deg) saturate(5)',
  lightBlue: 'sepia(1) hue-rotate(170deg) saturate(4.5)',
  green: 'sepia(1) hue-rotate(100deg) saturate(6)',
  yellow: 'sepia(1) hue-rotate(40deg) saturate(5)',
  orange: 'sepia(1) hue-rotate(10deg) saturate(5)',
  red: 'sepia(1) hue-rotate(-20deg) saturate(6)',
} as const;
const ChromoColoursSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorId>('purple');

 const handleColorSelect = (colorId: ColorId) => {
  setSelectedColor(colorId);

  const selected = chromaColors.find((color) => color.id === colorId);
  if (selected) {
    setColor(selected.hex);
  } else {
    console.warn(`Color ID '${colorId}' not found in chromaColors.`);
    setColor(''); // fallback or keep previous color if you prefer
  }

  // Optionally: update bottle appearance here
};
  const [color, setColor] = useState(chromaColors[0].hex)
  return (
    <S.SectionWrapper id="chromo-colours-section">
      <S.DecorativeBackground />
      <S.ContentGrid>
        <S.BottleVisualContainer data-aos="fade-right" data-aos-delay="200">
          <S.BottleImage src={bottleImageUrl} alt="LumiVitae Bottle with Chromo Light" />
          <S.BottleImageTwo $filter={colorFilters[selectedColor]} src={bottleI} alt="LumiVitae Bottle with Chromo Light" />

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
            isActive={selectedColor === color.id}
            onClick={() => handleColorSelect(color.id as ColorId)}
            aria-label={`Select ${color.id} color`}
          />
        ))}
      </S.PaletteContainer>
    </S.SectionWrapper>
  );
};

export default ChromoColoursSection;
