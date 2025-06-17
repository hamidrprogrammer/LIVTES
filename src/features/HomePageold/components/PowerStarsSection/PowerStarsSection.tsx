import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const background = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/water-waves.png';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import { useNavigate } from 'react-router-dom';

const HOMEPAGE_SEC4_BACKGROUND_URL = background;

const ProductsContainer = styled(SmartImage)`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 750px;
  background-color: #EEEEEE;
  background-image: url(${HOMEPAGE_SEC4_BACKGROUND_URL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  font-family: 'Outfit', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 600px;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
  max-width: 450px;

 @media (max-width: 768px) {
   align-items: center;
   text-align: center;
  }
`;

const SectionTitle = styled(motion.h2)`
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 1.2;
  text-align: left;
  color: #FFFFFF;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SectionDescription = styled(motion.p)`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: left;
  line-height: 1.4;
  color: #FFFFFF;
  margin: 0 0 40px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const LearnMoreButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  height: 42px;
  background: #FFFFFF;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #1C1F23;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;

const SubscriptionButton = styled(motion.button)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  height: 42px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #3FFFF8;
  backdrop-filter: blur(10px);
  border-radius: 200px;
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #3FFFF8;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(63, 255, 248, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;


interface ProductsSectionProps {}

const ProductsSection: React.FC<ProductsSectionProps> = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const buttonHoverTapProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const navigator = useNavigate();

  return (
    <ProductsContainer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <ContentWrapper>
        <SectionTitle variants={itemVariants}>
          The Power of the Stars
        </SectionTitle>
        <SectionDescription variants={itemVariants}>
          Encoded in a Tablet. Molecular hydrogen. Dead Sea magnesium. Longevity molecules. Drop. Dissolve. Awaken Vitality.
        </SectionDescription>
        <ButtonsContainer variants={itemVariants}>
          <LearnMoreButton {...buttonHoverTapProps}>
            Learn more
          </LearnMoreButton>
          <SubscriptionButton {...buttonHoverTapProps} onClick={()=>{navigator("/tablete")}}>
            Start subscription
          </SubscriptionButton>
        </ButtonsContainer>
      </ContentWrapper>
    </ProductsContainer>
  );
};

export default ProductsSection;