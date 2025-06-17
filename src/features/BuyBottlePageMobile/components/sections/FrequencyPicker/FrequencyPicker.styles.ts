// src/sections/FrequencyPicker/FrequencyPicker.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';


export const PickerSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* Select your frequency. -> top: 1408px */
  /* First disabled Buy Option Design -> top: 1458px */
  padding-top: ${pxToRem(30)}; // 1408px - (bundle picker bottom)
  padding-bottom: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(16)}; // فاصله مشابه بخش‌های قبلی

  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.7s', '0.4s')}
`;

export const SectionTitle = styled.h2`
  /* Select your frequency. */
  /* width: 315px; height: 30px; left: calc(50% - 315px/2 - 10px); top: 1408px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // font-weight: 400
  font-size: ${pxToRem(25)};
  line-height: 1.2; // 120% or 30px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  text-align: center;
  max-width: ${pxToRem(315)};
  margin-bottom: ${pxToRem(20)}; // فاصله از اولین کارت (1458px - (1408px + 30px_title_height) ~ 20px)
`;