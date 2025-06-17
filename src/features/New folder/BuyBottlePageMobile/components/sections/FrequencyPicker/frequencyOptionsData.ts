// src/sections/FrequencyPicker/frequencyOptionsData.ts

import { FrequencyOptionData } from "@/core/types";

export const frequencyOptions: FrequencyOptionData[] = [
  {
    id: 'freq-one-time', // این گزینه فعال و اصلی است
    title: 'One-time purchase', // بر اساس متن یکی از گزینه‌ها در بخش Review Order
    description: 'Standard price', // توضیحات نمونه
    // price: '€XX.XX', // قیمت در این بخش معمولاً نمایش داده نمی‌شود یا بخشی از عنوان است
    selected: true, // پیش‌فرض انتخاب شده
  },
  {
    id: 'freq-monthly',
    title: 'Monthly delivery', // عنوان نمونه، بر اساس اولین Buy Option Design خاکستری
    description: 'Save 15% - Cancel anytime', // توضیحات نمونه
    disabled: false, // در CSS opacity: 0.2 داشت، که به معنی disabled یا کمتر مهم بودن است.
                     // اینجا فرض می‌کنیم قابل انتخاب هستند اما شاید ظاهر متفاوتی داشته باشند.
                     // اگر کاملا غیرفعال باشند، disabled: true
  },
  {
    id: 'freq-bi-monthly',
    title: 'Every 2 months', // عنوان نمونه
    description: 'Save 10%',
    disabled: false,
  },
  {
    id: 'freq-quarterly',
    title: 'Every 3 months', // عنوان نمونه
    description: 'Save 5%',
    disabled: false,
  },
  // یک گزینه که در CSS مشخصا visibility: hidden برای قیمتش داشت و opacity: 0.2 برای کل کارت
  // این می‌تواند یک گزینه "Coming Soon" یا گزینه‌ای باشد که شرایط خاصی دارد.
  {
    id: 'freq-special',
    title: 'Annual Plan (Best Value)', // عنوان نمونه، بر اساس آخرین Buy Option Design خاکستری
    description: 'Pay once, receive 12 packs over year',
    // price: '€XXX', // قیمت برای این گزینه ممکن است متفاوت باشد یا نمایش داده نشود.
    disabled: true, // این گزینه را غیرفعال در نظر می‌گیریم
  },
];