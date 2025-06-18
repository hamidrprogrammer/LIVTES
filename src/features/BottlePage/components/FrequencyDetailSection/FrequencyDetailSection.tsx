import React from 'react';
import * as S from './FrequencyDetailSection.styles';

export interface VisualProps {
  type: 'sun_lid' | 'animated_lid';
  mainVisualUrl?: string; // For sun_lid (Bottle_Page-Lid_sun.avif')
  lidImageUrl?: string; // For animated_lid (Top_View.avif')
  haloImageUrl?: string; // For animated_lid (halo.avif')
  animationAssetUrl?: string; // For animated_lid (anim_pink.avif', anim_blue.avif')
}

interface FrequencyDetailSectionProps {
  id: string;
  backgroundImageUrl: string;
  category: string;
  categoryColor?: string;
  headline: React.ReactNode; // Allows for <br /> tags
  description: React.ReactNode; // Allows for <br /> tags or more complex markup
  visuals: VisualProps;
  textSide?: 'left' | 'right';
  aosTextAnimation?: string;
  aosVisualAnimation?: string;
  descriptionFontWeight?: number; // For specific cases like LumiVitae's bold description
}

const FrequencyDetailSection: React.FC<FrequencyDetailSectionProps> = ({
  id,
  backgroundImageUrl,
  category,
  categoryColor,
  headline,
  description,
  visuals,
  textSide = 'left',
  aosTextAnimation = "fade-right",
  aosVisualAnimation = "fade-left",
  descriptionFontWeight,
}) => {
  const textContent = (
    <S.TextContainer data-aos={textSide === 'left' ? aosTextAnimation : aosVisualAnimation}>
      <S.CategoryText color={categoryColor}>{category}</S.CategoryText>
      <S.HeadlineText>{headline}</S.HeadlineText>
      <S.DescriptionText style={{ fontWeight: descriptionFontWeight }}>
        {description}
      </S.DescriptionText>
    </S.TextContainer>
  );

  const visualContent = (
    <S.VisualContainer data-aos={textSide === 'left' ? aosVisualAnimation : aosTextAnimation}>
      {/* {visuals.type === 'sun_lid' && visuals.mainVisualUrl && (
        <S.SunLidImage src={visuals.mainVisualUrl} alt={`${category} Lid Visual`} />
      )} */}
      {/* {visuals.type === 'animated_lid' && (
        <S.AnimatedLidWrapper>
          {visuals.lidImageUrl && <S.LidImage src={visuals.lidImageUrl} alt="Bottle Lid Top View" />}
          {visuals.haloImageUrl && <S.HaloImage src={visuals.haloImageUrl} alt="Halo Effect" />}
          {visuals.animationAssetUrl && <S.AnimationAsset src={visuals.animationAssetUrl} alt={`${category} Animation`} />}
        </S.AnimatedLidWrapper>
      )} */}
    </S.VisualContainer>
  );

  return (
    <S.SectionWrapper id={id} textSide={textSide}>
      <S.BackgroundImage imageUrl={backgroundImageUrl} />
      <S.ContentGrid textSide={textSide}>
        {textSide === 'left' ? (
          <>
            {textContent}
            {visualContent}
          </>
        ) : (
          <>
            {visualContent}
            {textContent}
          </>
        )}
      </S.ContentGrid>
    </S.SectionWrapper>
  );
};

export default FrequencyDetailSection;
