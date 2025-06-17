// src/sections/ColorPicker/ColorPicker.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';


export const PickerSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* فاصله از بخش قبلی (BottleShowcase) */
  /* BottleShowcase bottom was roughly 639px (dots) + some margin */
  /* Graphite card top was 698px */
  padding-top: ${pxToRem(30)}; // 698px - 667px (gallery bottom) ~ 30px
  padding-bottom: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(16)}; // فاصله بین کارت‌های رنگ (814px - (698px + 96px_card_height) = 20px)
                        // اما چون کارت‌ها والد مشترک دارند، gap بین آن‌ها اعمال می‌شود.

  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.7s', '0.2s')}
`;

// اگر عنوان جداگانه‌ای برای این بخش وجود داشت، اینجا اضافه می‌شد
// export const SectionTitle = styled.h2` ... `;