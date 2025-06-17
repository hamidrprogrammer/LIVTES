/* eslint-disable @typescript-eslint/no-unused-vars */
/* File: src/components/FeatureCardsSection.tsx */

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ----------  Local assets  ---------- */
const imageCardOne   = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imagecardOne.png';
const imageCardTwo   = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imagecardtwo.png';
const imageCardThree = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imagecardtree.png';
const imageCardFour  = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imageFure.png';

/* -------------------------------------------------------------------------- */
/* STYLES                                     */
/* -------------------------------------------------------------------------- */

const Section = styled.section`
  padding: 2.5rem 0;
  background: #fff;
  position: relative;
  overflow: hidden;

  @media (min-width: 769px) {
    padding: 3rem 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 769px) {
     padding: 0 2rem;
  }
  @media (min-width: 1025px) {
     padding: 0 5%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(7, 1fr);
    grid-template-areas:
      'big1 big1 big1 big1 small1 small1 small1'
      'small2 small2 small2 big2 big2 big2 big2';
    gap: 1.5rem;
  }
`;

interface CardProps {
  $area: string;
  $big?: boolean;
}

const Card = styled(motion.div)<CardProps>`
  grid-area: ${({ $area }) => $area};
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center;
  transition: box-shadow 0.3s ease;
  
  height: 350px;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 769px) {
    height: 450px;
  }
  
  @media (min-width: 1025px) {
    height: 600px;
  }
`;

/* -------------------------------------------------------------------------- */
/* COMPONENT                                   */
/* -------------------------------------------------------------------------- */

const FeatureCardsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  /* datasource */
  // The logic for cards remains untouched, but the data is commented out in the original file.
  // The following is for structure reference based on original file.
  const cards = [
    { id: 1, area: 'big1', title: 'Vision', desc: '...', img: imageCardOne, btn: 'Our Mission', big: true },
    { id: 2, area: 'small1', title: 'Revolution', desc: '...', img: imageCardTwo, btn: 'Become a Partner', big: false },
    { id: 3, area: 'small2', title: 'Science', desc: '...', img: imageCardThree, btn: 'Explore the Science', big: false },
    { id: 4, area: 'big2', title: 'Community', desc: '...', img: imageCardFour, btn: 'Join the Community', big: true },
  ];

  return (
    <Section>
      <Wrapper>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid>
            {/* The mapping is kept as is from the original file, which was commented out. */}
            {/* If uncommented, it will now work with the corrected grid styles. */}
            {/*
            {cards.map(({ id, area, title, desc, img, btn: cta, big }) => (
              <Card
                key={id}
                $area={area}
                $big={big}
                style={{ backgroundImage: `url(${img.src || img})` }}
                variants={card}
              >
              </Card>
            ))}
            */}
          </Grid>
        </motion.div>
      </Wrapper>
    </Section>
  );
};

export default FeatureCardsSection;