import React from 'react';
import SharedButton from '../../components/SharedButton/SharedButton';
import {
  HeroSectionContainer,
  HeroContent,
  IntroducingText,
  SubtitleText,
  MidHeroTextContainer,
  MidHeroBackgroundBlur,
  MidHeroTitle,
  MidHeroSubtitle,
} from './HeroSection.styles';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

  const handleBuyTabletsClick = () => {
          navigate('/products-bottle/10'); // replace "1" with your default ID
    // Implement navigation or modal logic here
  };

  return (
    <HeroSectionContainer>
      <HeroContent>
        <IntroducingText data-aos="fade-up" data-aos-delay="100">
          Introducing LVQ+
        </IntroducingText>
        <SubtitleText data-aos="fade-up" data-aos-delay="300">
          H2 + NAD Fusion Tablets
        </SubtitleText>
        <SharedButton
          variant="primary" // White background, dark text
          onClick={handleBuyTabletsClick}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Buy Tablets
        </SharedButton>
      </HeroContent>

      {/* Mid Hero Text section as described in Figma */}
      <MidHeroTextContainer data-aos="fade-right" data-aos-delay="700" data-aos-anchor-placement="center-bottom">
        <MidHeroBackgroundBlur />
        <MidHeroTitle>The Power of the Stars</MidHeroTitle>
        <MidHeroSubtitle>
          A first-of-its-kind breakthrough in longevity science.
        </MidHeroSubtitle>
      </MidHeroTextContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
