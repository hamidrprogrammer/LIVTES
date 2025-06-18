// src/features/InfoCardSection/InfoCardSection.tsx
import React from 'react';
import InfoCard, { InfoCardProps } from './InfoCard';
import { InfoCardsCustomSection } from './InfoCardSection.styles';
import { theme } from '../../../../core/theme/theme';
const imagecardOne =  'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/homepage_visionbob.avif'
/* ==========  Styled Components  ========== */
const imagecardtwo =  'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/homepage_revolution 1.avif'
const imagecardtree =  'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/homepage_science 1.avif'
const imageFure =  'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/homepage_communitymob.avif'
const infoCardsData: InfoCardProps[] = [
  {
    id: 'vision',
    title: 'Vision',
    subtitle: 'Turning water into wellness, kindness into culture, vision into light.',
    buttonText: 'View our mission',
    buttonLink: '#vision-mission',
    backgroundImageSrc:imagecardOne, // Placeholder
    backgroundImageAlt: 'Abstract representation of vision',
    backgroundImageClassName: 'vision-image', // For specific art direction
    gradientOverlay: `linear-gradient(212.76deg, ${theme.colors.cardOverlayLight} 49.33%, ${theme.colors.cardOverlayDark} 97.41%)`,
    imageObjectPosition: 'left center', // homepage_vision 1 left: -90px
  },
  {
    id: 'revolution',
    title: 'Revolution',
    subtitle: 'Join the movement to light up the world - empowering health, wealth, and purpose through our brand partnership.',
    buttonText: 'Become a partner',
    buttonLink: '#revolution-partner',
    backgroundImageSrc: imagecardtwo, // Placeholder
    backgroundImageAlt: 'Dynamic abstract representation of revolution',
    gradientOverlay: 'linear-gradient(197.29deg, rgba(8, 53, 66, 0) 44.19%, #083542 93.71%)',
  },
  {
    id: 'science',
    title: 'Science',
    subtitle: 'Harnessing the power of molecular hydrogen to support energy, immunity, and cellular vitality.',
    buttonText: 'Explore the science',
    buttonLink: '#science-explore',
    backgroundImageSrc:imagecardtree, // Placeholder
    backgroundImageAlt: 'Scientific imagery related to water molecules',
    gradientOverlay: 'linear-gradient(202.92Dia, rgba(5, 25, 38, 0) 45.09%, #051926 94.85%)',
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'Be part of a vibrant, supportive community transforming lives through shared wellness journeys.',
    buttonText: 'Join the community',
    buttonLink: '#community-join',
    backgroundImageSrc: imageFure, // Placeholder
    backgroundImageAlt: 'Diverse group of people in a community setting',
    gradientOverlay: 'linear-gradient(194.15deg, rgba(30, 35, 20, 0) 53.31%, #1E2314 81.26%)',
  },
];

const InfoCardSection: React.FC = () => {
  return (
    // This section from Figma (Rectangle 35) has top: 3464px and height: 2470px
    // and background: #FBFFFF. It acts as a container for these 4 cards.
    <InfoCardsCustomSection id="features" bgColor="lightBackground" noPaddingY>
        {/* The Section component handles vertical padding.
            If the 2470px height is strict, internal padding might be needed
            or the cards themselves fill that space.
            Assuming standard section padding for now, can adjust.
        */}
      {infoCardsData.map(card => (
        <InfoCard
          key={card.id}
          id={card.id}
          title={card.title}
          subtitle={card.subtitle}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
          backgroundImageSrc={card.backgroundImageSrc}
          backgroundImageAlt={card.backgroundImageAlt}
          backgroundImageClassName={card.backgroundImageClassName}
          gradientOverlay={card.gradientOverlay}
          imageObjectPosition={card.imageObjectPosition}
        />
      ))}
    </InfoCardsCustomSection>
  );
};

export default InfoCardSection;
