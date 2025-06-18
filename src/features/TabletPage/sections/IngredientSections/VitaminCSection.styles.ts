import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/image%2049.avif';
const image50Url = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/image%2050.avif';

// تصاویر
const image49Url = homepage_sec1;

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px; // فیکس ارتفاع دسکتاپ طبق فیگما
  background-color: #000101; // پس‌زمینه خیلی تیره
  overflow: hidden;
  display: flex;
  align-items: center;
  // justify-content: space-between; // کامنت شده، یعنی متن و تصویر در دو طرف بدون فشردگی

  ${media.tablet} {
    height: auto; // حذف فیکس ارتفاع برای تبلت
    min-height: 700px;
    padding: 80px 20px;
    flex-direction: column-reverse; // در تبلت تصویر بالا و متن پایین
  }

  @media (max-width: 768px) {
    height: auto; // ریسپانسیو برای موبایل
    min-height: 600px;
    padding: 60px 15px;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  flex-basis: 45%; // 45 درصد فضای کل برای متن (دسکتاپ)
  max-width: 520px;
  padding-left: clamp(30px, 10vw, 148px); // فاصله چپ متناسب با صفحه
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    flex-basis: auto; // حذف اندازه ثابت برای تبلت
    max-width: 600px;
    padding-left: 0;
    text-align: center; // متن وسط چین
    margin-top: 40px; // فاصله از تصویر
  }

  @media (max-width: 768px) {
    max-width: 100%; // موبایل پر عرض
  }
`;

export const IngredientTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px دسکتاپ
  line-height: 120%;
  margin-bottom: 15px;

  ${media.tablet} {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px; // کاهش اندازه فونت موبایل
  }
`;

export const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 440px;

  ${media.tablet} {
    font-size: 18px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%; // یا 24px
  margin-bottom: 20px;
  max-width: 485px;

  ${media.tablet} {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ImagesContainer = styled.div`
  position: relative;
  flex-basis: 55%; // 55 درصد فضا برای تصاویر دسکتاپ
  height: 100%; // ارتفاع کامل بخش
  z-index: 1;

  ${media.tablet} {
    flex-basis: auto;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; // فاصله بین تصاویر وقتی عمودی چیده میشن
    min-height: 300px; // حداقل ارتفاع
  }
`;

// تصویر 49 - ابعاد و موقعیت دسکتاپ دقیق از فیگما
export const Image49 = styled.div`
  position: absolute;
  width: 70%; // نسبت به کانتینر تصاویر
  max-width: 800px;
  aspect-ratio: 1024 / 309;
  background-image: url(${image49Url});
  background-size: cover;
  background-position: center;
  right: 5%;
  bottom: 10%;
  opacity: 0.8;

  ${media.tablet} {
    position: relative; // حذف پوزیشن مطلق در تبلت
    right: auto;
    bottom: auto;
    width: 80%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 90%; // تصویر بزرگ‌تر در موبایل برای بهتر دیده شدن
  }
`;

// تصویر 50 - ابعاد و موقعیت دسکتاپ دقیق از فیگما
export const Image50 = styled.div`
  position: absolute;
  width: 35%; // نسبت به کانتینر تصاویر
  max-width: 350px;
  aspect-ratio: 436 / 456;
  background-image: url(${image50Url});
  background-size: cover;
  background-position: center;
  right: 15%;
  top: 15%;
  opacity: 0.9;

  ${media.tablet} {
    position: relative; // حذف پوزیشن مطلق در تبلت
    right: auto;
    top: auto;
    width: 60%;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    width: 70%; // بزرگ‌تر شدن تصویر در موبایل
  }
`;
