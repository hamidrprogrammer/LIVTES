import React, { useMemo, useState } from 'react';
import * as S from './ProductGallery.styles';
import { ProductVariation } from '@/core/types/api/shop'; // Import کردن تایپ مربوطه
const galleryBackgroundImage = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/buy/image.png'; // Assuming image.png was renamed

// تعریف پراپ‌های کامپوننت برای دریافت داده
interface ProductGalleryProps {
  data?: { data: ProductVariation[] };
}

export const ProductGallery = ({ data }: ProductGalleryProps): JSX.Element => {
  // START: منطق جدید برای ساختن لیست تصاویر
  const imageSources = useMemo(() => {
    if (!data?.data) {
      return [];
    }

    const sources: { src: string; alt: string }[] = [];
    data.data.forEach(variation => {
      // اولویت اول: بررسی productVariationFiles
      if (variation.productVariationFiles && variation.productVariationFiles.length > 0) {
        variation.productVariationFiles.forEach(file => {
          if (file.content_hash) {
            sources.push({
              src: `https://imagedelivery.net/27K6Yc6t29u6bZ_lbtodBw/${file.content_hash}/public`,
              alt: variation.name,
            });
          }
        });
      }
      // اولویت دوم (Fallback): اگر قبلی تصویری نداشت، product.file را چک کن
      else if (variation.product?.file) {
        sources.push({
          src: variation.product.file,
          alt: variation.name,
        });
      }
    });
    return sources;
  }, [data]);
  // END: منطق جدید

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = imageSources.length;

  // اگر هیچ تصویری وجود نداشت، یک جایگزین نمایش بده
  if (totalSlides === 0) {
    return (
      <S.GalleryWrapper>
        <img src={galleryBackgroundImage} alt="No product image available" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </S.GalleryWrapper>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <S.GalleryWrapper>
      {/* نمایش تصویر اصلی */}
      <img
        key={currentIndex} // برای اجرای انیمیشن با هر تغییر
        src={imageSources[currentIndex].src}
        alt={imageSources[currentIndex].alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'fadeIn 0.5s' }}
      />

      {/* نمایش کنترل‌ها فقط اگر بیش از یک تصویر وجود داشته باشد */}
      {totalSlides > 1 && (
        <>
          <S.PrevArrow alt="Previous" onClick={handlePrev} />
          <S.NextArrow alt="Next" onClick={handleNext} />
          <S.DotsContainer>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <S.Dot key={index} $active={index === currentIndex} onClick={() => handleDotClick(index)} />
            ))}
          </S.DotsContainer>
        </>
      )}
    </S.GalleryWrapper>
  );
};

export default React.memo(ProductGallery);