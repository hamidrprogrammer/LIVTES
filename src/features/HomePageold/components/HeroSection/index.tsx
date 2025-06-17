/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import whater from '../../../../assets/images/home/whater.png';
import ExploreButton from './ExploreButton';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';



const HeroBackground = styled(SmartImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url(${whater});
  background-size: cover;
  background-position: center;
  opacity: 0.6;
`;

const HeroOverlay = styled(SmartImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
    background-size: cover;
  background-position: center;
  background-image: url(${whater});
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;




const HeroButton = styled(motion.button)`
  background: linear-gradient(45deg, #00e0ff, #00a0ff);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;



const WaterRipple = styled(SmartImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-image: url('/assets/images/home/water-ripple.png');
  background-size: cover;
  opacity: 0.3;
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 15vh;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  z-index: 10;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
  height: auto;
  min-height: 50px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ScrollIcon = styled.div`
  width: 35px;
  height: 55px;
  border: 2px solid #fff;
  border-radius: 25px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 40px;

    &:before {
      width: 5px;
      height: 5px;
      top: 6px;
    }
  }
`;

const ScrollText = styled.span`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const rippleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  useEffect(() => {
    if (rippleRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 20 - 10;
        const y = (clientY / window.innerHeight) * 20 - 10;
        
        if (rippleRef.current) {
          rippleRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  const titleVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const subtitleVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  
  const scrollIconVariants = {
    initial: { y: 0 },
    animate: {
      y: 10,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  const handleExploreClick = () => {
    window.location.href = '/bottle';
  };
  
  return (
    <HeroContainer ref={ref}>
      <HeroBackground />
      <WaterRipple 
        ref={rippleRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />
      <HeroOverlay />
      
      <HeroContent>
        <motion.div style={{ opacity, y }}>
          <HeroTitle
            variants={titleVariants}
            initial=""
            animate={controls}
          >
            {t('home.hero.title')} <br/>{t('home.hero.titleHighlight')}
          </HeroTitle>
       
          <HeroSubtitle
            variants={subtitleVariants}
            initial="hidden"
            animate={controls}
          >
            {t('home.hero.subtitle')}
          </HeroSubtitle>
          
       <ExploreButton onClick={handleExploreClick}/>
    
        </motion.div>
      </HeroContent>
      
      <ScrollIndicator
        onClick={handleScrollDown}
        variants={scrollVariants}
        initial="hidden"
        animate={controls}
      >
        <ScrollText>{t('common.scrollDown')}</ScrollText>
        <ScrollIcon
          // variants={scrollIconVariants}
          initial="initial"
          animate="animate"
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;