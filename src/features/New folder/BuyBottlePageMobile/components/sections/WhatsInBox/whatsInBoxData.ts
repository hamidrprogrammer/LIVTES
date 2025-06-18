// src/sections/WhatsInBox/whatsInBoxData.ts
import { SlideData } from '@/core/types';
; // تایپ از فایل تایپ‌های مشترک
const Included_Shop = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/Included_Shop 1.avif";

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
