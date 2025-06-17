// src/hooks/useScrollAnimation.ts
// یک هوک سفارشی برای تشخیص اینکه آیا یک عنصر در معرض دید کاربر (viewport) قرار گرفته است یا خیر.
// از Intersection Observer API برای عملکرد بهینه استفاده می‌کند.

import { useEffect, useRef, useState, RefObject } from 'react';

// گزینه‌های قابل تنظیم برای Intersection Observer
interface ScrollAnimationOptions {
  threshold?: number;     // درصدی از عنصر که باید قابل مشاهده باشد تا فعال شود (0 تا 1)
  triggerOnce?: boolean;  // آیا انیمیشن فقط یک بار اجرا شود؟
  rootMargin?: string;    // حاشیه‌ای به root اضافه می‌کند (مشابه margin در CSS)
}

// مقدار بازگشتی هوک: یک ref برای اتصال به عنصر DOM و یک boolean که نشان می‌دهد آیا عنصر قابل مشاهده است.
type UseScrollAnimationReturn<T extends HTMLElement> = [RefObject<T>, boolean];

const useScrollAnimation = <T extends HTMLElement>(
  options?: ScrollAnimationOptions
): UseScrollAnimationReturn<T> => {
  const [isVisible, setIsVisible] = useState(false); // وضعیت نمایش عنصر
  const elementRef = useRef<T>(null); // Ref برای اتصال به عنصر DOM

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return; // اگر عنصر وجود ندارد، کاری انجام نده

    // ایجاد یک Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => { // entry اطلاعات مربوط به تقاطع عنصر با viewport را دارد
        if (entry.isIntersecting) { // اگر عنصر در حال تقاطع با viewport است
          setIsVisible(true); // وضعیت نمایش را true کن
          if (options?.triggerOnce && currentElement) {
            observer.unobserve(currentElement); // اگر فقط یکبار باید اجرا شود، مشاهده را متوقف کن
          }
        } else {
          // اگر انیمیشن نباید فقط یکبار اجرا شود، می‌توان در اینجا isVisible را false کرد
          // تا با خروج از دید و ورود مجدد، انیمیشن دوباره اجرا شود.
          if (!options?.triggerOnce) {
            // setIsVisible(false); // فعال کردن این خط باعث اجرای مکرر انیمیشن می‌شود
          }
        }
      },
      {
        threshold: options?.threshold || 0.1, // پیش‌فرض: 10% از عنصر دیده شود
        rootMargin: options?.rootMargin || '0px 0px -50px 0px', // کمی قبل از دید کامل فعال شود
      }
    );

    // شروع مشاهده عنصر
    observer.observe(currentElement);

    // تابع پاکسازی: هنگام unmount شدن کامپوننت، مشاهده را متوقف کن
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // اجرای مجدد effect فقط در صورت تغییر options

  return [elementRef, isVisible];
};

export default useScrollAnimation;
