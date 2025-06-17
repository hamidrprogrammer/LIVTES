/* eslint-disable @typescript-eslint/no-empty-object-type */
/** eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bubbles from '../../../../assets/images/home/bubbles-bg.png';
import battel from '../../../../assets/images/home/battel.png';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/core/hooks/useIsMobile';

/* ───────────────────────────
   Breakpoints
   ─────────────────────────── */
const BP_TABLET_LARGE = '1024px';
const BP_TABLET_SMALL = '768px';
const BP_MOBILE = '576px';

/* ───────────────────────────
   Containers
   ─────────────────────────── */
const BottleContainer = styled.section`
  background-color: #000000;
  position: relative;
  overflow: hidden;
  color: white;
  height: auto;
  padding: 4rem 1rem;

  @media (min-width: ${BP_TABLET_SMALL}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${BP_TABLET_LARGE}) {
    min-height: 780px; /* Use min-height to prevent overflow */
    padding: 0;
    display: flex;
    align-items: center;
  }
`;

const BottleContentBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BottleContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;

  @media (min-width: ${BP_TABLET_SMALL}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 2rem;
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
      padding: 0 5%;
  }
`;

/* ───────────────────────────
   Info
   ─────────────────────────── */
const BottleInfo = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;

  @media (min-width: ${BP_TABLET_SMALL}) {
    text-align: left;
    max-width: 45%;
  }
`;

/* ───────────────────────────
   Typography
   ─────────────────────────── */
const BottleTitle = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #3ffff8;
  line-height: 1.3;
  font-weight: 400;

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 2.5rem;
  }
`;

const BottleDescription = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 1.1rem;
  }
`;

/* ───────────────────────────
   Features / Buttons
   ─────────────────────────── */
const BottleFeatures = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
`;

const FeatureButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${BP_MOBILE}) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: ${BP_TABLET_SMALL}) {
    justify-content: flex-start;
  }
`;

const SharedButtonStyles = `
  color: #1C1F23;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  max-width: 280px;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
    transform: translateY(-2px);
  }
  
  @media (min-width: ${BP_MOBILE}) {
    width: auto;
    min-width: 160px;
  }
`;

const BottleButton = styled(motion.button)`
  ${SharedButtonStyles}
  background: #FFFFFF;
  color: #1C1F23;
`;

const BottleButtonTwo = styled(motion.button)`
  ${SharedButtonStyles}
  color: #3FFFF8;
  background: transparent;
  border: 1px solid #3FFFF8;
`;

/* ───────────────────────────
   Image
   ─────────────────────────── */
const BottleImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 300px;

  @media (min-width: ${BP_TABLET_SMALL}) {
    max-width: 50%;
    align-items: flex-end;
  }
   @media (min-width: ${BP_TABLET_LARGE}) {
     min-height: 780px;
   }
`;

const BottleImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: contain;

  @media (min-width: ${BP_TABLET_SMALL}) {
    max-height: 65vh;
  }
  
  @media (min-width: ${BP_TABLET_LARGE}) {
    max-height: 700px;
  }
`;

/* ───────────────────────────
   Background Decoration
   ─────────────────────────── */
const BackgroundBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('${bubbles}');
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
`;

/* ───────────────────────────
   Component
   ─────────────────────────── */
interface BottleShowcaseProps {}

const BottleShowcase: React.FC<BottleShowcaseProps> = () => {
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
    tap: { scale: 0.95 },
  };
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

    const navigate =useNavigate();
  
  const handleBuyBottleClick = () => {
    navigate('/products-bottle/1')
  };
  return (
    <BottleContainer>
      <BackgroundBubbles />
      <BottleContentBack>
        <BottleContent style={{ zIndex: 2, position: 'relative' }}>
          <BottleInfo ref={infoRef}>
            <BottleTitle variants={titleVariants} initial="hidden" animate={infoInView ? 'visible' : 'hidden'}>
              LumiVitae <br />
              Hydrogen Water Technology
            </BottleTitle>

            <BottleDescription variants={descriptionVariants} initial="hidden" animate={infoInView ? 'visible' : 'hidden'}>
              The Future of Water is Intelligent.<br/>
              Infused with frequency, gravity, and <br/>pure molecular hydrogen to harmonize <br/>your cells and ignite the light within.
            </BottleDescription>

            <FeatureButton>
              <BottleButton variants={buttonVariants} initial="hidden" animate={infoInView ? 'visible' : 'hidden'} whileHover="hover" whileTap="tap">
                Learn more
              </BottleButton>

              <BottleButtonTwo variants={buttonVariants} initial="hidden" animate={infoInView ? 'visible' : 'hidden'} whileHover="hover" whileTap="tap" onClick={()=>{handleBuyBottleClick()}}>
                Buy bottle
              </BottleButtonTwo>
            </FeatureButton>
          </BottleInfo>

          <BottleImageWrapper ref={imageRef}>
            <BottleImage
              src={battel}
              alt="LumiVitae Hydrogen Water Bottle"
              variants={imageVariants}
              initial="hidden"
              animate={imageInView ? 'visible' : 'hidden'}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            />
          </BottleImageWrapper>
        </BottleContent>
      </BottleContentBack>
    </BottleContainer>
  );
};

export default BottleShowcase;