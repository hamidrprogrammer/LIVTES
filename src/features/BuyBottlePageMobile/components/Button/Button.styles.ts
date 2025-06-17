// src/components/Button/Button.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

// اینترفیس برای پراپ‌های استایل دکمه
interface StyledButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'; // انواع مختلف دکمه
  fullWidth?: boolean; // آیا دکمه تمام عرض والد خود را بگیرد؟
  disabled?: boolean; // آیا دکمه غیرفعال است؟
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex; // برای هم‌ترازی محتوای داخلی
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(9)} ${pxToRem(20)} ${pxToRem(10)}; // پدینگ داخلی بر اساس CSS
  border-radius: ${pxToRem(100)}; // گردی گوشه‌ها، مشابه Frame 13 و Frame 14
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${pxToRem(18)}; // اندازه فونت دکمه‌ها
  line-height: ${pxToRem(23)}; // ارتفاع خط
  color: ${({ theme }) => theme.colors.textLight}; // رنگ متن پیش‌فرض برای دکمه‌ها سفید است
  border: none; // حذف بوردر پیش‌فرض
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')}; // عرض دکمه

  // استایل برای نوع primary (مثلاً دکمه Add to Bag)
  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors.accent}; /* #60C9DA */
      &:hover:not(:disabled) {
        background-color: ${theme.colors.secondary}; // کمی تیره‌تر یا روشن‌تر برای hover
        box-shadow: 0px 4px 15px rgba(96, 201, 218, 0.4);
      }
    `}

  // استایل برای نوع secondary (مثلاً دکمه Checkout Now)
  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors.primary}; /* #072C3D */
      &:hover:not(:disabled) {
        background-color: ${theme.colors.primaryDark}; // کمی روشن‌تر برای hover
        box-shadow: 0px 4px 15px rgba(7, 44, 61, 0.4);
      }
    `}
  
  // استایل برای نوع tertiary (مثلاً دکمه با بوردر)
  ${({ variant, theme }) =>
    variant === 'tertiary' &&
    css`
      background-color: transparent;
      color: ${theme.colors.primary};
      border: ${pxToRem(1)} solid ${theme.colors.primary};
      &:hover:not(:disabled) {
        background-color: ${theme.colors.backgroundLight};
        border-color: ${theme.colors.accent};
        color: ${theme.colors.accent};
      }
    `}

  // استایل برای حالت فشرده شدن دکمه
  &:active:not(:disabled) {
    transform: scale(0.98); // کمی کوچک‌تر شدن
  }

  // استایل برای حالت غیرفعال
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textGrey};
    color: ${({ theme }) => theme.colors.backgroundPage};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;