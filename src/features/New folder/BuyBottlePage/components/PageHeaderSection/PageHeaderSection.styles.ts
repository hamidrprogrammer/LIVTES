import styled from 'styled-components';

export const HeaderText = styled.h1`
  color: var(--x-07-2c-3d);
  /* Replaced fixed font-size with a responsive clamp() function */
  font-size: clamp(2.25rem, 5vw, 3.125rem); /* min, preferred, max */
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.2; /* Use relative line-height for better scaling */
  width: 100%; /* Take full width of parent */
  margin: 0;
`;