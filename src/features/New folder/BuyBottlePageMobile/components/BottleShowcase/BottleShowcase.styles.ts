// src/sections/BottleShowcase/BottleShowcase.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';


export const ShowcaseSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* CSS اصلی:
    Bottle. Select your color. -> top: 260px
    Gallery -> top: 316px
  */
  // فاصله از بخش قبلی. Intro تا حدود 110px + 80px = 190px ارتفاع دارد.
  // پس این بخش از حدود 260px شروع می‌شود.
  // برای سادگی، یک padding-top کلی در نظر می‌گیریم.
  padding-top: ${pxToRem(30)}; 
  padding-bottom: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  align-items: center; // محتوا وسط‌چین باشد
  
  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.8s', '0.3s')}
`;

export const SectionTitle = styled.h2`
  /* Bottle. Select your color. */
  /* width: 335px; height: 30px; left: calc(50% - 335px/2); top: 260px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // font-weight: 700
  font-size: ${pxToRem(25)}; // font-size: 25px
  line-height: 1.2; // 120% or 30px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  text-align: center;
  max-width: ${pxToRem(335)};
  margin-bottom: ${pxToRem(25)}; // فاصله بین عنوان و گالری (316px - 260px - height_of_title(30px) ~ 26px)
`;

export const GalleryWrapper = styled.div`
  /* Gallery / Mask group / Rectangle 1 / Rectangle 2 */
  /* position: absolute; width: 375px; height: 351.7px; left: 0px; top: 316px; */
   background-color: #EAF9F9;
  
  width: 100%; // تمام عرض والد (که خود محدود شده است)
  // اگر بخواهیم پس‌زمینه گالری تمام عرض صفحه را بگیرد ولی محتوای صفحه محدود باشد:
  // width: 100vw; 
  // margin-left: calc(50% - 50vw);
  // margin-right: calc(50% - 50vw);
  // اما چون صفحه اصلی خودش max-width دارد، 100% کافی است.

  height: ${pxToRem(351.7)};
  background-color: ${({ theme }) => theme.colors.backgroundLight}; // #EAF9F9
  position: relative; // برای موقعیت‌دهی عناصر داخلی گالری (تصویر، فلش‌ها)
  overflow: hidden; // برای جلوگیری از نمایش بخش‌های اضافی تصویر بزرگ بطری
  border-radius: ${pxToRem(10)}; // یک گردی ملایم برای زیبایی
  box-shadow: 0 ${pxToRem(4)} ${pxToRem(12)} rgba(0,0,0,0.05);
`;

// انیمیشن برای تصویر بطری
const bottleAppear = keyframes`
  from {
    transform: translate(-50%, -45%) scale(0.8); // شروع از کمی پایین‌تر و کوچک‌تر
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1); // حرکت به مرکز و اندازه اصلی
    opacity: 1;
  }
`;

export const BottleImage = styled.img<{ $isAnimating: boolean }>`
  /* Bottle_Shop_C_gold 1 */
  /* width: 712.49px; height: 400.77px; left: -157.39px; top: 272.04px; */
  /* این مقادیر left و top نسبت به والد اصلی صفحه (Buy Bottle Mobile) هستند. */
  /* گالری در top: 316px قرار دارد. */
  /* پس top تصویر نسبت به گالری: 272.04px - 316px = -43.96px */
  /* left تصویر نسبت به گالری: -157.39px (چون گالری left: 0px دارد) */
  background-color:rgb(0, 255, 255);
  
  position: absolute;
  width: ${pxToRem(712.49)}; // عرض واقعی تصویر
  height: ${pxToRem(400.77)}; // ارتفاع واقعی تصویر
  
  // برای وسط‌چین کردن یک تصویر بزرگتر در یک کانتینر کوچکتر و سپس اعمال آفست‌ها:
  left: 50%; 
  top: 50%;
  
  // آفست‌ها برای تطبیق با طراحی Figma:
  // translateX: آفست افقی + (عرض کانتینر گالری / 2 - آفست left تصویر نسبت به گالری) - (عرض خود تصویر / 2)
  // translateX(-50%) برای وسط‌چین کردن اولیه، سپس آفست left اصلی تصویر:
  // آفست افقی -157.39px نسبت به گالری 375px.
  // تصویر 712px است. مرکز تصویر در 356px. مرکز گالری در 187.5px.
  // اگر تصویر در -157.39px شروع شود، مرکز آن در -157.39 + 356 = 198.61px از لبه گالری است.
  // این تقریباً با مرکز گالری (187.5px) هم‌خوانی دارد با کمی اختلاف.
  // translateY: مشابه برای ارتفاع. آفست -43.96px.
  // مرکز عمودی تصویر: 400.77/2 = 200.385. مرکز گالری: 351.7/2 = 175.85
  // اگر تصویر در -43.96px شروع شود، مرکز آن در -43.96 + 200.385 = 156.425px از بالای گالری است.
  // این نزدیک به مرکز گالری (175.85px) است.
  
  // ساده‌ترین راه: از transform: translate(-50%, -50%) برای وسط‌چین کردن استفاده کرده
  // و سپس با margin یا تغییرات کوچک در translate، موقعیت دقیق را تنظیم می‌کنیم.
  // در اینجا فرض می‌کنیم تصویر باید تقریباً وسط کادر گالری باشد با توجه به ابعاد بزرگش.
  // مقادیر left و top از CSS اصلی برای این تصویر به نظر می‌رسد که تصویر را به گونه‌ای قرار می‌دهند
  // که بخش خاصی از آن در کادر 375x351.7 گالری نمایش داده شود.
  // transform: translate(${pxToRem(-157.39 - (712.49-375)/2)}, ${pxToRem(-43.96 - (400.77-351.7)/2)}); // محاسبه پیچیده تر
  // برای سادگی، فعلا تصویر را وسط‌چین می‌کنیم و اجازه می‌دهیم overflow:hidden کار خود را انجام دهد.
  // بعداً می‌توان با آفست‌های دقیق‌تر در translate تنظیم کرد.
  transform: translate(-50%, -50%); // وسط‌چین کردن تصویر بزرگ
  
  object-fit: contain; // یا cover، بسته به اینکه چگونه باید نمایش داده شود
  
  // اعمال انیمیشن
  opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)}; // شروع با شفافیت 0 اگر انیمیشن فعال است
  animation: ${({ $isAnimating }) => ($isAnimating ? css`${bottleAppear} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards` : 'none')};
`;

export const GalleryControlsContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%; // برای فلش‌ها
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 ${pxToRem(5)}; // کمی فاصله از لبه‌ها برای فلش‌ها
  z-index: 10; // بالاتر از تصویر
  pointer-events: none; // خود کانتینر کلیک‌پذیر نباشد
`;

export const ArrowButton = styled.button<{ direction: 'prev' | 'next' }>`
  background: rgba(255, 255, 255, 0.5); // پس‌زمینه نیمه‌شفاف برای خوانایی بهتر روی تصویر
  border: none;
  border-radius: 50%;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  pointer-events: all; // دکمه‌ها کلیک‌پذیر باشند
  box-shadow: 0 ${pxToRem(1)} ${pxToRem(3)} rgba(0,0,0,0.1);

  // آیکون‌های فلش با استفاده از کاراکتر یا SVG
  // در CSS اصلی از Vector ها استفاده شده بود.
  // Group 6 & 7. Vector ها با background: #1C1F23 یا #1E1E1E
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${pxToRem(20)};
  font-weight: bold;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: ${pxToRem(15)}; // فاصله از پایین گالری
  left: 50%;
  transform: translateX(-50%);
  z-index: 10; // بالاتر از تصویر
`;