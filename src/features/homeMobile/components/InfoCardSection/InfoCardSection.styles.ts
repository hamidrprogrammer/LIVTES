// src/features/InfoCardSection/InfoCardSection.styles.ts
import styled from 'styled-components';
import Section from '../../components/Section/Section'; // Using Section as base

export const InfoCardsCustomSection = styled(Section)`
  /* Section base provides padding and max-width.
     This section has a light background: Rectangle 35 (#FBFFFF)
     Individual cards (355px wide) are centered by Section's align-items: center.
  */
  /* Ensure padding accommodates the 10px horizontal gap for cards from edge */
  padding-left: 10px;
  padding-right: 10px;
  margin-top:50px;

  /* For the specific background from Rectangle 35 */
  /* The section itself starts at top: 3464px and seems to span 2470px height,
     containing the four info cards. The light background applies to this whole area.
  */
`;
