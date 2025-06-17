// src/sections/BundlePicker/bundleOptionsData.ts

import { BundleOptionData } from "@/core/types";

export const bundleOptions: BundleOptionData[] = [
  {
    id: 'bundle-one-pack',
    title: 'One pack', // بر اساس اولین Buy Option Design در CSS
    description: 'LVQ+ 30 Tablets',
    price: '€XX.XX', // قیمت نمونه، در CSS هم €xx.xx بود
    selected: true, // یکی از گزینه‌ها به صورت پیش‌فرض انتخاب شده است
  },
  {
    id: 'bundle-two-packs', // عنوان بر اساس متن یکی از گزینه‌ها در بخش Review Order
    title: 'Two packs', // بر اساس دومین Buy Option Design در CSS
    description: 'LVQ+ 30 Tablets x2', // توضیحات نمونه
    price: '€YY.YY',
  },
  {
    id: 'bundle-three-packs',
    title: 'Three packs', // بر اساس سومین Buy Option Design در CSS
    description: 'LVQ+ 30 Tablets x3', // توضیحات نمونه
    price: '€ZZ.ZZ',
  },
  // سایر گزینه‌های باندل در صورت وجود
];