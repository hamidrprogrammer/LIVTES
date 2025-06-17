/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/InfoCardSection/InfoCard.tsx
import React from 'react';
import { Variants } from 'framer-motion';
import {
  CardOuterWrapper,
  CardBgImage,
  CardGradientOverlay,
  CardContentWrapper,
  InfoCardTitle,
  InfoCardSubtitle,
  InfoCardButton,
} from './InfoCard.styles';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export interface InfoCardProps {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  backgroundImageClassName?: string; // For specific image styling
  gradientOverlay: string;
  imageObjectPosition?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
  backgroundImageSrc,
  backgroundImageAlt,
  backgroundImageClassName,
  gradientOverlay,
  imageObjectPosition = 'center center',
}) => {
  return (
    <CardOuterWrapper initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
      <CardBgImage
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        className={backgroundImageClassName}
        objectFit="cover"
        // objectPosition={imageObjectPosition}
        loading="lazy"
      />
      <CardGradientOverlay $gradient={gradientOverlay} />
      <CardContentWrapper>
        <InfoCardTitle variant="sectionTitleSmall" as="h3">
          {title}
        </InfoCardTitle>
        <InfoCardSubtitle variant="bodySmall" as="p">
          {subtitle}
        </InfoCardSubtitle>
        {buttonText && (
          <InfoCardButton href={buttonLink} primary>
            {buttonText}
          </InfoCardButton>
        )}
      </CardContentWrapper>
    </CardOuterWrapper>
  );
};

export default InfoCard;
