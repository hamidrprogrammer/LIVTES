/* eslint-disable @typescript-eslint/no-unused-vars */
// src/sections/Header/Header.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';
// انیمیشن fadeIn برای نمایش نرم هدر می‌تواند استفاده شود
// import { animatedStyles, fadeInAnimation } from '../../styles/animations';

export const HeaderContainer = styled.header<{ $isSticky?: boolean }>`
  /* Nav: position: absolute; width: 375px; height: 60px; left: 0px; top: 0px; */
  /* ما آن را fixed یا sticky می‌کنیم تا در بالای صفحه بماند */
  position: sticky; // یا 'fixed' اگر می‌خواهید همیشه در یک موقعیت باشد
  top: 0;
  left: 0; // اگر fixed است، باید برای پوشش کامل عرض تنظیم شود
  right: 0; // اگر fixed است
  width: 100%; // اگر fixed است
  
  // محدود کردن عرض محتوای داخلی هدر به همان عرض اصلی صفحه
  max-width: ${({ theme }) => theme.colors.backgroundPage === '#FBFFFF' ? pxToRem(420) : '100%'}; // مثال برای تطبیق با عرض صفحه
  margin: 0 auto; // برای وسط‌چین کردن محتوای داخلی اگر max-width اعمال شود

  height: ${pxToRem(60)}; // ارتفاع هدر از CSS
  background: ${({ theme, $isSticky }) => 
    $isSticky ? 'rgba(251, 255, 255, 0.85)' : theme.colors.backgroundPage
  }; // پس‌زمینه اصلی صفحه یا کمی شفاف وقتی چسبان است
  backdrop-filter: ${({ $isSticky }) => $isSticky ? 'blur(10px)' : 'none'}; // افکت بلور برای حالت چسبان
  
  display: flex;
  align-items: center;
  justify-content: space-between; // لوگو در یک سمت، آیکون‌ها در سمت دیگر
  padding: 0 ${pxToRem(20)}; // پدینگ چپ و راست از CSS (left: 20px for logo)
  z-index: 1000; // بالاتر از سایر عناصر صفحه
  box-shadow: ${({ $isSticky, theme }) =>
    $isSticky ? `0 ${pxToRem(2)} ${pxToRem(10)} rgba(0, 0, 0, 0.07)` : 'none'
  }; // سایه ملایم برای حالت چسبان
  transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;

 
`;
export const NavIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin:8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%; /* Ellipse 22 */
  cursor: pointer;
  
  svg {
    width: 20px; /* Approx size for icons within */
    height: 20px;
    fill: ${({ theme }) => theme.colors.black}; /* For basket, menu icons */
  }
`;
export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)}; // فاصله بین آیکون‌های منو و سبد خرید (275px to 325px for icons)
`;

export const IconWrapper = styled.button` // تغییر به button برای دسترسی‌پذیری بهتر
  /* Ellipse 22: background: #EAF9F9; width: 40px; height: 40px; */
  width Distance: 0px; top: 0px; */
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  background-color: ${({ theme }) => theme.colors.backgroundLight}; // رنگ پس‌زمینه دایره آیکون
  border-radius: 50%; // دایره کامل
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  border: none; // حذف بوردر پیش‌فرض دکمه
  padding: 0; // حذف پدینگ پیش‌فرض دکمه

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLight}; // کمی تغییر رنگ در هاور
  }

  &:active {
    transform: scale(0.95); // افکت کلیک
  }
`;