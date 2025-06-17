// src/components/Logo/Logo.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';

// اینترفیس برای پراپ‌های استایل لوگو
interface LogoStyleProps {
  color?: string;
  fontSize?: string;
}

// در CSS اصلی، لوگو از چندین عنصر Vector تشکیل شده بود.
// بازسازی دقیق آن با CSS بسیار پیچیده است.
// در اینجا یک نمایش متنی ساده ارائه می‌دهیم.
// برای لوگوی واقعی، استفاده از SVG توصیه می‌شود.
export const LogoWrapper = styled.div<LogoStyleProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ fontSize }) => fontSize || pxToRem(22)}; // یک اندازه پیش‌فرض
  color: ${({ theme, color }) => color || theme.colors.primary}; // رنگ پیش‌فرض
  letter-spacing: -${pxToRem(0.5)}; // کمی فاصله حروف کمتر برای زیبایی
  /* cursor: pointer; // اگر لوگو لینک به صفحه اصلی است */
`;