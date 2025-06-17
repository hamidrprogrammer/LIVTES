// src/components/CarouselIndicator/CarouselIndicator.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(10)}; // Adjusted gap if dots are larger
  margin-top: ${pxToRem(20)};
`;

export const Dot = styled.button<{ $isActive: boolean }>`
  width: ${pxToRem(12)}; // Increased width
  height: ${pxToRem(12)}; // Increased height
  border-radius: 50%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.textDark : theme.colors.textGrey};
  border: none;
  padding: ${pxToRem(2)}; // Add some padding to make the clickable area slightly larger than the visual dot
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};

  // Create a larger effective touch area if direct size increase is limited by design,
  // for example, by using a pseudo-element or ensuring sufficient padding.
  // For this example, we increased physical size and added small padding.

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;