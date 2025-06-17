/* eslint-disable @typescript-eslint/no-empty-object-type */
// src/types/index.ts
// در این فایل، تایپ‌های مشترکی که در بخش‌های مختلف اپلیکیشن استفاده می‌شوند را تعریف می‌کنیم.

// تایپ برای پراپ‌های مربوط به تصویر
export interface ImageProps {
  src: string;  // آدرس تصویر
  alt: string;  // متن جایگزین برای تصویر
}

// تایپ برای داده‌های یک آیتم سوالات متداول (FAQ)
export interface FAQItemData {
  id: string;         // شناسه منحصر به فرد
  question: string;   // متن سوال
  answer: string;     // متن پاسخ
}

// تایپ برای داده‌های گزینه‌های انتخاب رنگ بطری
export interface ColorOptionData {
  id: string;               // شناسه (مثلاً 'graphite', 'gold')
  name: string;             // نام رنگ (مثلاً 'Graphite Sand', 'Desert Gold')
  volume: string;           // حجم (مثلاً '320ml')
  price: string;            // قیمت (مثلاً '€498.00')
  colorIdentifier: string;  // برای نمایش نمونه رنگ (مثلاً گرادیانت CSS یا کد رنگ)
  defaultQuantity: number;  // تعداد پیش‌فرض
  image: string;            // آدرس تصویر مخصوص این رنگ
}

// تایپ برای داده‌های گزینه‌های انتخاب باندل (بسته)
export interface BundleOptionData {
  id: string;         // شناسه
  title: string;      // عنوان بسته (مثلاً 'One pack')
  description: string;// توضیحات بسته (مثلاً 'LVQ+ 30 Tablets')
  price?: string;     // قیمت (اختیاری، چون برخی قیمت‌ها مخفی بودند)
  disabled?: boolean; // آیا گزینه غیرفعال است
  selected?: boolean; // آیا گزینه انتخاب شده است
}

// تایپ برای داده‌های گزینه‌های انتخاب فرکانس خرید
export interface FrequencyOptionData extends BundleOptionData {
  // این تایپ می‌تواند ویژگی‌های مشابه BundleOptionData داشته باشد
  // یا ویژگی‌های خاص خود را اضافه کند.
}

// تایپ برای آیتم‌های موجود در سبد خرید (برای نمایش در بخش بررسی سفارش)
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  pricePerUnit: number; // یا قیمت کل برای آن تعداد
  details?: string; // جزئیات بیشتر مانند رنگ یا نوع
  image?: string;
}

// تایپ کلی برای وضعیت سفارش (برای انتقال بین کامپوننت‌ها یا مدیریت وضعیت)
export interface OrderState {
  selectedBottle?: ColorOptionData & { quantity: number };
  selectedBundle?: BundleOptionData;
  selectedFrequency?: FrequencyOptionData;
  // سایر اطلاعات مربوط به سفارش
}

// تایپ برای اسلایدهای گالری یا کروسل
export interface SlideData {
  id: string;
  src: string;
  alt: string;
  title?: string; // عنوان برای اسلاید (مثلاً در بخش "What's in the box")
}
