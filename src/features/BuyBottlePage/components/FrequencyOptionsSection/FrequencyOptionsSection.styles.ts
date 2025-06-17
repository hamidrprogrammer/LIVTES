// BuyBottlePage/components/FrequencyOptionsSection/FrequencyOptionsSection.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

// کانتینر اصلی گزینه‌ها
export const SectionContainer = styled.section`
  width: 100%;
  max-width: 500px; // A good constraint for readability
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxToRem(16)};
  /* Removed margin: auto as the parent grid handles alignment */
`;

// استایل برای پیام "لطفا یک بسته انتخاب کنید"
export const InfoMessage = styled.p`
  padding: ${pxToRem(20)};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${pxToRem(12)};
  border: 1px dashed ${({ theme }) => theme.colors.gray[300]};
`;

// این استایل‌ها به کامپوننت BuyOptionSubDesign اعمال می‌شود
// شما باید این استایل‌ها را به آن کامپوننت منتقل کنید یا از اینجا import کنید.
// در اینجا به عنوان نمونه، یک OptionWrapper جدید می‌سازیم.

export const OptionWrapper = styled.div<{ $isSelected: boolean; $isDisabled: boolean }>`
  width: 100%;
  min-height: ${pxToRem(96)};
  padding: ${pxToRem(16)} ${pxToRem(24)};
  box-sizing: border-box; /* Add box-sizing for predictable padding */
  
  display: grid;
  grid-template-areas:
    "icon title price"
    "icon description price";
  grid-template-columns: auto 1fr auto;
  gap: ${pxToRem(4)} ${pxToRem(16)};
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${pxToRem(12)};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease-out;

  // استایل برای حالت غیرفعال
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.gray[100]};
    `}

  // استایل برای هاور (وقتی غیرفعال نیست)
  ${({ $isDisabled }) =>
    !$isDisabled &&
    css`
      &:hover {
        transform: translateY(-${pxToRem(4)});
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 ${pxToRem(8)} ${pxToRem(20)} rgba(0, 0, 0, 0.07);
      }
    `}

  // استایل برای حالت انتخاب‌شده
  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.accentBlue};
      box-shadow: 0 ${pxToRem(4)} ${pxToRem(12)} rgba(65, 105, 225, 0.1);

      // اضافه کردن یک آیکون تیک در گوشه
      &::after {
        content: '✔';
        position: absolute;
        top: 10px;
        right: 15px;
        color: ${theme.colors.primary};
        font-size: ${pxToRem(18)};
        font-weight: bold;
      }
    `}
`;