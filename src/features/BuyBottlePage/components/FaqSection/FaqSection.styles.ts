// BuyBottlePage/components/FaqSection/FaqSection.styles.ts
import styled from 'styled-components';

export const SectionWrapper = styled.section`
  /* Removed fixed width and height */
  width: 100%;
  position: relative;
  margin: 0 auto;
  min-height: 500px; /* Provide a minimum height */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundLayer = styled.div`
  background-color: #eaf8f8;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const Content = styled.div`
  /* Replaced fixed padding with responsive padding */
  padding: 60px 24px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 910px; /* Based on original content width (1440 - 265*2) */
  box-sizing: border-box;

  @media (min-width: 1024px) {
    padding: 100px 0; /* Reduce padding on larger screens where it's centered */
  }
`;

export const Title = styled.h2`
  color: var(--x-07-2c-3d);
  font-size: clamp(1.8rem, 4vw, 2.5rem); /* Responsive font size */
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.3;
  white-space: nowrap;
  margin: 0 0 40px 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;