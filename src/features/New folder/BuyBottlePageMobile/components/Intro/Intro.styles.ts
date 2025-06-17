// src/sections/Intro/Intro.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';
// مسیر به فایل انیمیشن‌ها

export const IntroSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* CSS اصلی:
    Place your LumiVitae order
    position: absolute;
    width: 305px;
    height: 80px;
    left: calc(50% - 305px/2 - 15px); // یعنی 305px عرض، وسط‌چین و سپس 15px به چپ
    top: 110px;
  */
  
  // فاصله از بالا با در نظر گرفتن ارتفاع هدر (60px)
  // 110px (top اصلی) - 60px (ارتفاع هدر) = 50px padding-top
  padding-top: ${pxToRem(50)}; 
  padding-bottom: ${pxToRem(40)}; // یک فاصله برای جدا کردن از بخش بعدی
  display: flex;
  justify-content: center; // برای وسط‌چین کردن محتوای داخلی
  align-items: center;
  text-align: center; // متن عنوان هم وسط‌چین باشد
  min-height: ${pxToRem(80 + 40)}; // حداقل ارتفاع برای جلوگیری از فشرده شدن

  // اعمال انیمیشن با استفاده از هوک
  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.8s', '0.2s')}
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(40)}; // font-size: 40px
  line-height: 1; // 100% or 40px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  max-width: ${pxToRem(305)}; // عرض مشخص شده در CSS
  
  // مدیریت آفست 15px به چپ:
  // اگر کل بخش IntroSectionContainer وسط‌چین باشد،
  // و Title هم max-width داشته باشد و text-align: center باشد،
  // برای آفست می‌توان از transform: translateX استفاده کرد.
  // اما چون در CSS اصلی left با calc بود، به نظر می‌رسد کل بلاک 305px باید آفست داشته باشد.
  // در اینجا، با توجه به اینکه IntroSectionContainer با flex وسط‌چین می‌شود،
  // اگر بخواهیم دقیقا همان آفست را داشته باشیم، باید یک والد دیگر برای Title در نظر بگیریم
  // یا اینکه کل IntroSectionContainer را با margin تنظیم کنیم.
  // ساده‌ترین راه این است که Title را کمی به چپ ببریم اگر واقعا لازم است.
  // در اینجا فرض می‌کنیم که عنوان باید در مرکز بلاک خود باشد و کل بلاک در مرکز صفحه.
  // آفست -15px از CSS اصلی می‌تواند ناشی از یک گرید نامرئی در طرح Figma باشد.
  // برای سادگی، فعلا آفست را نادیده می‌گیریم و عنوان را کاملا وسط‌چین می‌کنیم.
  // اگر آفست ضروری است: transform: translateX(${pxToRem(-7.5)});  (نصف -15px چون خود بلاک ۳۰۵ است و نه ۳۷۵)
  // یا transform: translateX(calc(${pxToRem(-15)} / 2));
  // بهتر است این آفست در سطح گرید کلی صفحه مدیریت شود.
  // در اینجا، ما عنوان را در مرکز بخش قرار می‌دهیم.

  @media (max-width: ${pxToRem(360)}) { // برای صفحه‌های خیلی کوچک
    font-size: ${pxToRem(32)};
    max-width: 90%;
  }
`;