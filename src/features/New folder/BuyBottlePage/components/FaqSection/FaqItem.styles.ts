// BuyBottlePage/components/FaqSection/FaqItem.styles.ts
import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e0e0; /* Add a subtle separator */
  padding-bottom: 10px;
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 16px; /* Ensure space between text and icon */
`;

export const QuestionText = styled.p`
  color: #60c9da;
  /* Replaced fixed font-size with a responsive clamp() function */
  font-size: clamp(1.1rem, 3vw, 1.25rem);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.4; /* Relative line-height */
  margin: 0;
`;

export const ToggleIcon = styled.img`
  height: 13px;
  width: 22px;
  transition: transform 0.3s ease-in-out; /* Smooth rotation */
  flex-shrink: 0; /* Prevent icon from shrinking */
`;

export const AnswerText = styled.p<{ $isOpen: boolean }>`
  color: #405f6c;
  /* Replaced fixed font-size with a responsive clamp() function */
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.5; /* Relative line-height for readability */
  margin: 0;
  padding: 8px 0 0 5px; /* Adjust padding for better alignment */
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, padding 0.35s ease-in-out;
  
  /* Remove padding when collapsed to prevent jump */
  ${props => !props.$isOpen && `
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
  `}
`;