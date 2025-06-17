// src/sections/BundlePicker/BundleOptionCard.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{ $isSelected: boolean; $isDisabled?: boolean }>`
  /* Buy Option Design */
  /* box-sizing: border-box; */
  /* width: 335px; height: 96px; left: 20px; top: 1030px; (برای اولین گزینه) */
  /* border: 1px solid #072C3D; border-radius: 10px; */

  width: 100%;
  height: ${pxToRem(96)}; // ارتفاع ثابت برای کارت‌ها
  border: ${pxToRem(1)} solid ${({ theme, $isSelected }) => $isSelected ? theme.colors.accent : theme.colors.primary};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.colors.backgroundPage};
  padding: ${pxToRem(18)} ${pxToRem(20)}; // پدینگ داخلی بر اساس موقعیت عناصر در CSS

  display: flex;
  flex-direction: column; // چیدمان عمودی برای عنوان و توضیحات/قیمت
  justify-content: center; // توزیع محتوا در مرکز کارت
  gap: ${pxToRem(8)}; // فاصله بین عنوان و ردیف پایینی

  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  ${({ $isDisabled, theme }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
      border-color: ${theme.colors.textGrey};
      background-color: ${theme.colors.backgroundLight}; // کمی متفاوت برای نشان دادن غیرفعال بودن
    `}

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-${pxToRem(2)});
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(0, 0, 0, 0.08);
  }

  ${({ $isSelected, theme, $isDisabled }) =>
    $isSelected &&
    !$isDisabled &&
    css`
      box-shadow: 0 0 0 ${pxToRem(2)} ${theme.colors.accent}, 0 ${pxToRem(4)} ${pxToRem(12)} rgba(96, 201, 218, 0.3);
      border-color: ${theme.colors.accent};
    `}
`;

export const Title = styled.h3`
  /* One pack: width: 85px; height: 24px; left: calc(50% - 85px/2 - 106px); top: 20px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium}; // font-weight: 500
  font-size: ${pxToRem(20)};
  line-height: 1.2; // 120% or 24px
  color: ${({ theme }) => theme.colors.textDark}; // #1C1F23
  white-space: nowrap;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  /* LVQ+ 30 Tablets: width: 131px; height: 22px; left: calc(50% - 131px/2 - 83px); top: 54px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(18)};
  line-height: 1.2; // 120% or 22px
  color: ${({ theme }) => theme.colors.textGrey}; // #A7B1B9
`;

export const Price = styled.p`
  /* €xx.xx: width: 54px; height: 22px; left: calc(50% - 54px/2 + 219.5px); top: 54px; text-align: right; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(18)};
  line-height: 1.2; // 120% or 22px
  color: ${({ theme }) => theme.colors.textGrey}; // #A7B1B9
  text-align: right;
  min-width: ${pxToRem(60)}; // برای حفظ چیدمان
`;