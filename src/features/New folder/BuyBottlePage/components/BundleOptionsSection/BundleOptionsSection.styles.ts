// BuyBottlePage/components/BundleOptionsSection/BundleOptionsSection.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  /* This container is well-structured for responsiveness */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Consistent spacing between options */
  width: 100%;
`;

export const OptionWrapper = styled.div<{ $isSelected: boolean; $left: string; $opacity?: number }>`
  opacity: 1;
  width: 100%; /* Changed from 95% to 100% to fill the container */
  /* Replaced fixed height with min-height for content flexibility */
  min-height: ${pxToRem(96)}; 
  border: ${pxToRem(2)} solid ${({ theme, $isSelected }) => $isSelected ? theme.colors.black : theme.colors.greyLight};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.colors.backgroundPage};
  padding: ${pxToRem(12)} ${pxToRem(15)};
  box-sizing: border-box;
  
  display: grid; 
  gap: ${pxToRem(4)} ${pxToRem(12)};
  align-items: center;
  
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-${pxToRem(2)});
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(0, 0, 0, 0.08);
  }
  background-color: rgb(255, 255, 255);

  ${props =>
    props.$isSelected &&
    css`
      border-color: ${({ theme }) => theme.colors.black};
      /* The original file had a different background color for selected, which seems to have been removed. 
         Restoring it based on the variable name for clarity. */
      background-color: ${({ theme }) => theme.colors.cardBackground || theme.colors.backgroundPage};
    `}
`;