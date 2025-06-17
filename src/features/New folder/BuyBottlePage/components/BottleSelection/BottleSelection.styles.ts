// BuyBottlePage/components/BottleSelection/BottleSelection.styles.ts
import styled from 'styled-components';

export const SectionContainer = styled.section`
  /* Removed all absolute positioning. This is now a layout container. */
  display: flex;
  flex-direction: column;
  gap: 16px; /* Adds space between bottle options */
  width: 100%;
`;

/* The GraphiteWrapper and GoldWrapper are no longer needed as absolute positioning
  has been removed. The BottleOptionCard components will now be rendered directly
  inside SectionContainer and will flow naturally.
*/
export const GraphiteWrapper = styled.div``;
export const GoldWrapper = styled.div``;