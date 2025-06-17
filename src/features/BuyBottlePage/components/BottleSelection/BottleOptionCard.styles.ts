import styled, { css } from 'styled-components';

export const OptionWrapper = styled.div<{ $isSelected: boolean }>`
  border: 2px solid;
  border-color: ${props => (props.$isSelected ? '#072c3d' : '#E0E0E0')}; /* Adjusted non-selected color */
  border-radius: 10px;
  height: 96px;
  width: 435px;
  position: relative;
  margin-bottom:15px;
  padding: 10px 20px;
  box-sizing: border-box;
  bakcground-color:white;
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const Title = styled.div`
  color: #1c1f23;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px; /* Spacing between title and details */
`;

export const Volume = styled.div`
  color: #a7b1b9;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  white-space: nowrap;
`;

export const Price = styled.div`
  color: #a7b1b9;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  white-space: nowrap;
  text-align: right;
  margin-left: 10px; /* Spacing from volume */
`;

export const ColorPreview = styled.div<{ $gradient: string }>`
  background: ${props => props.$gradient};
  border-radius: 100px;
  height: 76px;
  width: 75px;
  margin-left: 20px; /* Spacing from info text */
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
  margin-left: 10px; /* Spacing from color preview */
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
  white-space: nowrap;
  text-align: right; /* Align text to right if number varies in width */
  min-width: 20px; /* Give some space for number */
`;

export const VectorIcon = styled.img`
  height: 8px;
  width: 12px;
  margin-left: 8px; /* Space from quantity number */
  cursor: pointer; /* Indicate it's interactive */
`;

export const QuantityLabel = styled.div`
  color: #a7b1b9;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  white-space: nowrap;
  margin-top: 4px;
`;
