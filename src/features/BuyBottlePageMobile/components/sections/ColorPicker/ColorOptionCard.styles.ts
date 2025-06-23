// src/sections/ColorPicker/ColorOptionCard.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  max-width: ${pxToRem(500)};
  border: ${pxToRem(2)} solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.accent : theme.colors.primary};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.colors.backgroundPage};
  padding: ${pxToRem(12)} ${pxToRem(15)};
  display: grid;

  grid-template-columns: 1fr ${pxToRem(56)} auto; /* ستون اول قابل کشش */
  grid-template-areas:
    "name swatch quantity"
    "details swatch quantity";

  gap: ${pxToRem(4)} ${pxToRem(12)};
  align-items: center;

  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-${pxToRem(2)});
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(0, 0, 0, 0.08);
  }

  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      box-shadow: 0 0 0 ${pxToRem(2)} ${theme.colors.accent},
        0 ${pxToRem(4)} ${pxToRem(12)} rgba(96, 201, 218, 0.3);
      border-color: ${theme.colors.accent};
    `}

  @media (max-width: ${pxToRem(480)}) {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'swatch name'
      'swatch details'
      'swatch quantity';
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ColorName = styled.h3`
  grid-area: name;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: clamp(${pxToRem(16)}, 4vw, ${pxToRem(20)});
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${pxToRem(4)};
  
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`;
export const ColorNameR = styled.h3`
  grid-area: name;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: clamp(${pxToRem(12)}, 4vw, ${pxToRem(2)});
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${pxToRem(4)};
  
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`;
export const DetailsRow = styled.div`
  grid-area: details;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  width: 100%;
  gap: ${pxToRem(8)};
`;

export const DetailText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: clamp(${pxToRem(14)}, 3.5vw, ${pxToRem(18)});
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.textGrey};

  &.price {
    text-align: left;
  }
  &.volume {
    /* No min-width needed, flexbox will handle spacing */
  }
`;

export const ColorSwatch = styled.div<{ $colorStyle: string }>`
  grid-area: swatch;
  width: ${pxToRem(56)};
  height: ${pxToRem(56)};
  border-radius: 50%;
  background: ${({ $colorStyle }) => $colorStyle};
  align-self: center;
  justify-self: center;
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);

  @media (max-width: ${pxToRem(480)}) {
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};
  }
`;

export const QuantitySelectorContainer = styled.div`
  grid-area: quantity;
  align-self: center;
  justify-self: flex-end;

  @media (max-width: ${pxToRem(480)}) {
    justify-self: flex-start;       /* در موبایل زیرِ InfoColumn قرار می‌گیرد */
    margin-top: ${pxToRem(8)};
  }
`;