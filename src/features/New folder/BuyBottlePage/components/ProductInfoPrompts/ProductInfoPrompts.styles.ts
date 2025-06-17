// BuyBottlePage/components/ProductInfoPrompts/ProductInfoPrompts.styles.ts
import styled from 'styled-components';

export const PromptsContainer = styled.div`
  /* Removed position: relative. The container now uses Flexbox. */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns items to the start of the container */
  gap: 16px; /* Provides space between prompt elements */
  height: 100%;
  
  /* On desktop, center the content vertically */
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const BasePromptText = styled.p`
  color: var(--x-07-2c-3d);
  font-size: 24px; /* Responsive font size */
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.3;
  width: 100%; /* Take full width of parent */
  max-width: 435px; /* Maintain max width from original design */
  margin: 0;
  
  /* Removed absolute positioning */

  @media (min-width: 1024px) {
    font-size: 30px; /* Larger font size for desktop */
    line-height: 36px;
  }
`;

export const BottlePrompt = styled(BasePromptText)``;

export const LVQPrompt = styled(BasePromptText)``;

export const FrequencyPrompt = styled(BasePromptText)`
  /* color: transparent; -> Handled by spans */
  /* All position properties removed */
`;

export const BoldSpan = styled.span`
  color: #072c3d;
  font-weight: 700;
`;

export const RegularSpan = styled.span`
  color: #072c3d;
`;

export const FrequencyTextSpan = styled.span`
  color: #1c1f23;
`;

export const FrequencyBoldSpan = styled.span`
  color: #1c1f23;
  font-weight: 700;
`;