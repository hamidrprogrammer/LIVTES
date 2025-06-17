import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';

// ۱. والد اصلی: عرض و ارتفاع ثابت حذف شد تا کامپوننت انعطاف‌پذیر باشد
export const SelectorWrapper = styled.div`
  background: #E8E8EA;
  border-radius: ${pxToRem(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* محتوا کاملا در مرکز قرار می‌گیرد */
  padding: ${pxToRem(10)} ${pxToRem(8)}; /* کمی پدینگ برای فضای داخلی */
  text-align: center;
  user-select: none;
  min-width: ${pxToRem(85)}; /* یک حداقل عرض برای حفظ ظاهر */
  box-sizing: border-box;
`;

// ۲. کنترل‌کننده‌ها: چیدمان به 'center' تغییر کرد تا تراز وسط حفظ شود
export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* کلیدی‌ترین تغییر برای تراز وسط */
  width: 100%;
`;

// ۳. دکمه‌ها: کمی متعادل‌تر و تمیزتر شدند
export const QuantityButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  padding: 0; /* پدینگ حذف شد چون با فلکس وسط‌چین شده */
  border-radius: 50%; /* افکت هاور دایره‌ای شکل می‌شود */

  svg {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    fill: currentColor; /* آیکون از دکمه رنگ می‌گیرد */
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textGrey};
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: rgba(0,0,0,0.05);
  }
`;

// ۴. عدد: مارجین بیشتری گرفت تا از دکمه‌ها فاصله بگیرد
export const QuantityNumberDisplay = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${pxToRem(18)};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textDark};
  min-width: ${pxToRem(24)};
  text-align: center;
  margin: 0 ${pxToRem(10)}; /* افزایش فاصله از دکمه‌ها */
`;

export const QuantityLabelText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${pxToRem(12)};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: ${pxToRem(6)}; /* کمی فاصله از بالا */
`;

// آیکون‌ها بدون تغییر باقی می‌مانند
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
);
const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 13H5v-2h14v2z"/></svg>
);

export { PlusIcon, MinusIcon };