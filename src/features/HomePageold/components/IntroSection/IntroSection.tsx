/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ───────────────────────────
   Breakpoints
   ─────────────────────────── */
const BP_TABLET_LARGE = '1024px';
const BP_TABLET_SMALL = '768px';
const BP_MOBILE = '576px';

/* ───────────────────────────
   Containers
   ─────────────────────────── */
const IntroContainer = styled.section`
  padding: 4rem 1rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  height: auto;

  @media (min-width: ${BP_TABLET_SMALL}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${BP_TABLET_LARGE}) {
    padding: 6rem 5%;
    min-height: 860px; /* Use min-height to prevent overflow */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IntroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: ${BP_TABLET_SMALL}) {
    gap: 3rem;
  }
  
  @media (min-width: ${BP_TABLET_LARGE}) {
     gap: 4rem;
  }
`;

const IntroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: ${BP_TABLET_SMALL}) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: 2rem;
  }
`;

/* ───────────────────────────
   Typography
   ─────────────────────────── */
const IntroTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 200;
  flex: 1;
  color: #002030;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #33BFBC; /* Example color, assuming from a theme */
  }

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 2.25rem;
    &:after {
      left: 0;
      transform: translateX(0);
      width: 60px;
    }
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 2.5rem;
  }
`;

const IntroDescriptionContainer = styled.div`
  flex: 1;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
`;


const IntroDescription = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 100;
  color: #555;

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 1.1rem;
  }
  
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 1.2rem;
  }
`;

/* ───────────────────────────
   Features
   ─────────────────────────── */
const IntroFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${BP_TABLET_SMALL}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`;

/* ───────────────────────────
   Background Decoration
   ─────────────────────────── */
const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 224, 255, 0.03) 0%, rgba(0, 0, 0, 0) 60%),
    radial-gradient(circle at 80% 70%, rgba(0, 160, 255, 0.03) 0%, rgba(0, 0, 0, 0) 60%);
  z-index: 1;
  opacity: 0.5;

  @media (min-width: ${BP_TABLET_SMALL}) {
    opacity: 1;
     background:
        radial-gradient(circle at 20% 30%, rgba(0, 224, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%),
        radial-gradient(circle at 80% 70%, rgba(0, 160, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%);
  }
`;

/* ───────────────────────────
   Component
   ─────────────────────────── */
interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <IntroContainer>
      <BackgroundGlow />
      <IntroContent style={{ zIndex: 2, position: 'relative' }}>
        <IntroHeader ref={headerRef}>
          <IntroTitle variants={titleVariants} initial="hidden" animate={headerInView ? 'visible' : 'hidden'}>
            <>
              Two Innovations. <br />
               One Purpose.
            </>
          </IntroTitle>

          <IntroDescriptionContainer>
                 <IntroTitle style={{  fontSize: '1.9rem'}}variants={titleVariants} initial="hidden" animate={headerInView ? 'visible' : 'hidden'}>
            To Light You Up From Within.
          </IntroTitle>
            <IntroDescription
              variants={descriptionVariants}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
            >
             LumiVitaes Light-Backed Wellness is a revolution in vitality where ancient intelligence meets modern bio-science.
            </IntroDescription>

            <IntroDescription
              variants={descriptionVariants}
              initial="hidden"
              style={{marginLeft: '20px'}}
              animate={headerInView ? 'visible' : 'hidden'}
            >
             <span style={{ color: '#000'}}>•</span>
             Our hydrogen-powered bottle infuses your water with molecular light.
             <br/>
             <span style={{ color: '#000'}}>•</span>
              Our LVQ tablets deliver cellular-level nourishment through a fusion of longevity molecules, deep-sea minerals, and frequency. 
            </IntroDescription>
              <IntroDescription
              variants={descriptionVariants}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
            >
Together, they awaken your blueprint hydrating your body, supporting your nervous system, and turning stress into strength. This is hydration as healing. Supplementation as activation. This is the future of wellness.  Powered by light.
            </IntroDescription>
          </IntroDescriptionContainer>
        </IntroHeader>
        <IntroFeatures ref={featuresRef}>
        </IntroFeatures>
      </IntroContent>
    </IntroContainer>
  );
};

export default IntroSection;