// src/sections/WhatsInBox/WhatsInBox.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import styled, { keyframes } from 'styled-components';

import { css } from 'styled-components';

export const WhatsInBoxSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* Whats in the box (بخش کلی) -> top: 3051px (شروع گالری) */
  /* What’s in the box (عنوان) -> top: 2966px */
  padding-top: ${pxToRem(50)}; // فاصله از بخش قبلی (OrderReview)
  padding-bottom: ${pxToRem(60)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(25)}; // فاصله بین عنوان و گالری (3051px - (2966px + 52px_title_height) ~ 33px)

  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.8s', '0.2s')}
`;

export const SectionTitle = styled.h2`
  /* What’s in the box */
  /* width: 302px; height: 52px; left: calc(50% - 302px/2 + 0.5px); top: 2966px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(40)};
  line-height: 1.3; // 130% or 52px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  text-align: center;
  max-width: ${pxToRem(302)};
`;

export const GalleryContainer = styled.div`
  /* Mask group (گالری) */
  /* width: 355px; height: 449px; left: 10px; top: 3051px; */
  /* Rectangle 2 (زیرین): background: #EAF9F9; */
  /* Rectangle 1 (رویی): background: #E9EBED; border-radius: 10px; */
  
  width: 100%;
  max-width: ${pxToRem(355)}; // عرض گالری
  height: ${pxToRem(449)};   // ارتفاع گالری
  background-color: ${({ theme }) => theme.colors.checkoutBg}; // #EAF9F9
  border-radius: ${pxToRem(10)}; // از Rectangle 1
  position: relative;
  overflow: hidden;
  box-shadow: 0 ${pxToRem(5)} ${pxToRem(15)} rgba(0,0,0,0.07);
`;

// انیمیشن برای اسلایدهای گالری
const slideAnimation = keyframes`
  from { opacity: 0.3; transform: translateX(30px) scale(0.95); }
  to { opacity: 1; transform: translateX(0) scale(1); }
`;
const slideOutAnimation = keyframes`
  from { opacity: 1; transform: translateX(0) scale(1); }
  to { opacity: 0.3; transform: translateX(-30px) scale(0.95); }
`;


export const SlideImage = styled(SmartImage)<{ $isCurrent: boolean, $isExiting: boolean }>`
  /* Included_Shop 1: background: url(Included_Shop.png); */
  /* width: 1144px; height: 449.19px; left: 0px; top: 3050.92px; */
  /* این ابعاد برای کل تصویر sprite است، ما تصاویر جداگانه استفاده می‌کنیم. */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; // تصویر تمام فضای گالری را پر کند
  object-fit: cover; // یا contain، بسته به نوع تصاویر
  border-radius: ${pxToRem(10)}; // برای همخوانی با کانتینر
  
  display: none; // به صورت پیش‌فرض مخفی
  opacity: 0;

  ${({ $isCurrent }) => $isCurrent && css`
    display: block;
    animation: ${slideAnimation} 0.5s ease-out forwards;
  `}
  
  ${({ $isExiting }) => $isExiting && css`
    display: block; // برای نمایش انیمیشن خروج
    animation: ${slideOutAnimation} 0.5s ease-out forwards;
  `}
`;


export const SlideTitle = styled.p`
  /* LumiVitae Hydrogen Water Bottle */
  /* width: 171px; height: 38px; left: calc(50% - 171px/2); top: 3530px; */
  /* این عنوان زیر گالری و نقاط نشانگر قرار می‌گیرد */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // font-weight: 400
  font-size: ${pxToRem(16)};
  line-height: 1.2; // 120% or 19px
  color: ${({ theme }) => theme.colors.textGrey}; // #A7B1B9
  text-align: center;
  margin-top: ${pxToRem(8)}; // فاصله از نقاط نشانگر
  min-height: ${pxToRem(38)}; // برای جلوگیری از پرش هنگام تغییر متن
  max-width: 90%;
`;

export const GalleryControlsContainer = styled.div`
  /* Group 6 & Group 7 (فلش‌ها) و Group 15 (نقاط) در CSS اصلی */
  /* موقعیت فلش‌ها و نقاط باید نسبت به GalleryContainer تنظیم شود. */
  width: 100%;
  display: flex;
  flex-direction: column; // نقاط زیر فلش‌ها (اگر فلش‌ها در کنار تصویر باشند)
  align-items: center;
  margin-top: ${pxToRem(15)}; // فاصله از گالری تا کنترل‌ها
`;

// استایل فلش‌ها می‌تواند از BottleShowcase باز استفاده شود یا سفارشی شود
// ArrowButton از BottleShowcase.styles.ts
export const ArrowButtonWhatsInBox = styled.button<{ direction: 'prev' | 'next' }>`
  background: rgba(7, 44, 61, 0.08); // پس‌زمینه کمی تیره‌تر
  border: none;
  border-radius: 50%;
  width: ${pxToRem(36)}; // Example: Increased from 32px
  height: ${pxToRem(36)}; // Example: Increased from 32px
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  pointer-events: all;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${pxToRem(20)}; // Adjusted if needed for new size
  font-weight: bold;
  position: absolute; // روی تصویر گالری
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;

  ${({ direction }) => direction === 'prev' && css`left: ${pxToRem(10)};`}
  ${({ direction }) => direction === 'next' && css`right: ${pxToRem(10)};`}

  &:hover {
    background: rgba(7, 44, 61, 0.15);
    transform: translateY(-50%) scale(1.05);
  }
`;
