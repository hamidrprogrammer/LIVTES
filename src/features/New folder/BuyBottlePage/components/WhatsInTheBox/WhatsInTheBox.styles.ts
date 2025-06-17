// BuyBottlePage/components/WhatsInTheBox/WhatsInTheBox.styles.ts
import styled from 'styled-components';
const maskGroupImage = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/buy/mask_group.png';

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 16px; /* Add horizontal padding for smaller screens */
  box-sizing: border-box;
`;

export const Title = styled.h2`
  color: var(--x-07-2c-3d);
  font-size: clamp(2rem, 5vw, 3.125rem); /* Responsive font size */
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const BoxImage = styled.img.attrs({ src: maskGroupImage })`
  /* Removed fixed height and width */
  width: 100%;
  max-width: 1144px; /* Maintain max size from original design */
  height: auto; /* Maintain aspect ratio */
  display: block;
  margin-bottom: 30px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack on mobile */
  justify-content: space-around;
  width: 100%;
  max-width: 1144px;
  gap: 16px; /* Add gap for spacing on mobile */

  @media (min-width: 768px) {
    flex-direction: row; /* Side-by-side on larger screens */
    gap: 24px;
  }
`;

export const ItemDescription = styled.p`
  color: #a7b1b9;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  flex: 1; /* Allow items to grow and shrink equally */
`;