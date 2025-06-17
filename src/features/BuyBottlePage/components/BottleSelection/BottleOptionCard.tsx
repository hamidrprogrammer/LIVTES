// BuyBottlePage/components/BottleSelection/BottleOptionCard.styles.ts
import styled from 'styled-components';

export const OptionWrapper = styled.div<{ $isSelected: boolean }>`
  border: 2px solid;
  border-color: ${props => (props.$isSelected ? '#072c3d' : '#E0E0E0')};
  border-radius: 10px;
  /* Replaced fixed height with min-height for flexibility */
  min-height: 96px; 
  /* Replaced fixed width with 100% to fill the parent container */
  width: 100%; 
  position: relative;
  padding: 12px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 8px; /* Add space between elements */
  transition: border-color 0.3s ease;

  @media (min-width: 768px) {
    padding: 10px 20px;
    gap: 12px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1; /* Allows this container to take up available space */
`;

export const Title = styled.div`
  color: #1c1f23;
  font-size: clamp(1rem, 4vw, 1.25rem); /* Responsive font size */
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow details to wrap on small screens */
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`;

const DetailText = styled.div`
  color: #a7b1b9;
  font-size: clamp(0.9rem, 3vw, 1.125rem); /* Responsive font size */
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
`;

export const Volume = styled(DetailText)``;

export const Price = styled(DetailText)``;

export const ColorPreview = styled.div<{ $gradient: string }>`
  background: ${props => props.$gradient};
  border-radius: 100px;
  /* Use aspect-ratio and a flexible width for the preview circle */
  width: 60px;
  aspect-ratio: 1 / 1;
  margin-left: auto; /* Push it to the right before the quantity control */
  flex-shrink: 0; /* Prevent from shrinking */

  @media (min-width: 768px) {
    width: 75px;
  }
`;

export const QuantityControl = styled.div`
  background-color: #e8e8ea;
  border-radius: 10px;
  height: 76px;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Prevent from shrinking */
`;

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityText = styled.div`
  color: #1c1f23;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  min-width: 20px;
  text-align: center;
`;

export const VectorIcon = styled.img`
  height: 8px;
  width: 12px;
  margin-left: 8px;
  cursor: pointer;
`;

export const QuantityLabel = styled.div`
  color: #a7b1b9;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  margin-top: 4px;
`;