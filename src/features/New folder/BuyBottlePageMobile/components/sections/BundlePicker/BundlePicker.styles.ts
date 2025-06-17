// src/sections/BundlePicker/BundlePicker.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';


export const PickerSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* LVQ+. Choose your bundle. -> top: 980px */
  /* First Buy Option Design -> top: 1030px */
  padding-top: ${pxToRem(30)}; // 980px - (color picker bottom)
  padding-bottom: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  align-items: center; // برای وسط‌چین کردن عنوان و کارت‌ها
  gap: ${pxToRem(16)}; // فاصله بین عنوان و اولین کارت، و بین کارت‌ها (1030px - (980px + 30px_title_height) ~ 20px)
                        // (1136px - (1030px + 96px_card_height) = 10px)

  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.7s', '0.3s')}
`;

export const SectionTitle = styled.h2`
  /* LVQ+. Choose your bundle. */
  /* width: 330px; height: 30px; left: calc(50% - 330px/2 - 2.5px); top: 980px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // font-weight: 700
  font-size: ${pxToRem(25)};
  line-height: 1.2; // 120% or 30px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  text-align: center;
  max-width: ${pxToRem(330)};
  margin-bottom: ${pxToRem(20)}; // فاصله از اولین کارت
`;