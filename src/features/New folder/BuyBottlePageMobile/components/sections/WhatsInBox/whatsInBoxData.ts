// src/sections/WhatsInBox/whatsInBoxData.ts
import { SlideData } from '@/core/types';
; // تایپ از فایل تایپ‌های مشترک
import Included_Shop from '@assets/images/bottle/Included_Shop 1.png'
// Included_Shop 1: width: 1144px; height: 449.19px; left: 0px; top: 3050.92px;
// این تصویر بزرگ احتمالاً شامل چندین آیتم است که در کروسل نمایش داده می‌شوند
// یا اینکه یک تصویر عریض است که به صورت افقی اسکرول می‌شود.
// در اینجا فرض می‌کنیم چندین تصویر مجزا برای کروسل داریم.
export const whatsInBoxSlides: SlideData[] = [
  {
    id: 'item1',
    src: Included_Shop, // تصویر نمونه برای آیتم اول
    alt: 'LumiVitae Hydrogen Water Bottle',
    title: 'LumiVitae Hydrogen Water Bottle', // از CSS: LumiVitae Hydrogen Water Bottle -> top: 3530px
  },
  {
    id: 'item2',
    src: Included_Shop, // تصویر نمونه برای آیتم دوم
    alt: 'Charging Cable & Adapter',
    title: 'Charging Cable & Adapter',
  },
  {
    id: 'item3',
    src: Included_Shop, // تصویر نمونه برای آیتم سوم
    alt: 'Cleaning Brush',
    title: 'Cleaning Brush',
  },
  {
    id: 'item4',
    src: Included_Shop, // تصویر نمونه برای آیتم چهارم
    alt: 'User Manual',
    title: 'User Manual & Welcome Kit',
  },
  // سایر آیتم‌های موجود در جعبه
];
