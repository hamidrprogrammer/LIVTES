// src/sections/ColorPicker/colorOptionsData.ts

import { ColorOptionData } from "@/core/types";

export const colorOptions: ColorOptionData[] = [
  {
    id: 'graphite',
    name: 'Graphite Sand',
    volume: '320ml',
    price: '€498.00',
    // برای colorIdentifier، می‌توانیم از گرادیانت CSS استفاده کنیم یا اگر رنگ ثابت است، یک کد رنگ.
    // در CSS اصلی از linear-gradient برای نمایش رنگ استفاده شده بود.
    colorIdentifier: 'linear-gradient(318.14deg, #3D3E42 45.22%, #636469 66.87%, #3D3E42 87.08%)',
    defaultQuantity: 1, // یا 0 اگر پیش‌فرض انتخاب نشده باشد
    image: '/assets_placeholder/Bottle_Shop_C_graphite.avif', // مسیر تصویر این رنگ
  },
  {
    id: 'gold',
    name: 'Desert Gold',
    volume: '320ml', // حجم و قیمت برای هر دو یکسان بود در CSS
    price: '€498.00',
    colorIdentifier: 'linear-gradient(135.76deg, #ADA171 14.5%, #D0C59C 31%, #ADA171 52.5%)',
    defaultQuantity: 0,
    image: '/assets_placeholder/Bottle_Shop_C_gold.avif', // مسیر تصویر این رنگ
  },
  // در صورت وجود، رنگ‌های دیگر را اینجا اضافه کنید
];