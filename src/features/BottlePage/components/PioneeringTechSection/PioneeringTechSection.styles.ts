import styled from 'styled-components';
import { FullWidthSection, SectionContent as BaseSectionContent } from '../common/PageSection';
// تصویر پس زمینه برای این بخش در CSS اصلی مشخص نشده بود، اما رنگ پس زمینه دارد
// اگر تصویر خاصی دارد، آن را ایمپورت کنید.
// import sectionFourBg from '../../../../assets/images/bottle/section-four-bg.png';

export const SectionContainer = styled(FullWidthSection)`
  background-color: #072C3D; /* رنگ پس زمینه اصلی */

  min-height: 1166px;
  padding-top: 150px; /* فاصله از بالا */
  padding-bottom: 50px;
`;

export const SectionContent = styled(BaseSectionContent)`
  color: #ffffff;
  max-width: 1100px; /* تنظیم عرض محتوا برای این بخش */
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 20px;
  /* width: 588px; در موبایل 100% شود */
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 60px;
  max-width: 643px;
   @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
  }
`;

export const SliderWrapper = styled.div`
  /* استایل های مربوط به کانتینر اسلایدر */
  /* .slider class in original CSS */
  /* height: 408px; */ /* ارتفاع ممکن است توسط محتوای اسلایدر تعیین شود */
  margin-bottom: 60px;
  position: relative;
`;


export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px; /* فاصله از اسلایدر یا کنترل‌های آن */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const TextBlock = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 323px; /* عرض اصلی */
  margin:0;

  span {
    font-weight: 600; /* .text-wrapper-36 */
  }
   @media (max-width: 768px) {
    font-size: 18px;
    max-width: 90%;
  }
`;

export const SliderControls = styled.div`
  display: flex;
  justify-content: flex-end; /* یا center اگر ترجیح می دهید */
  align-items: center;
  gap: 10px;
  margin-top: 20px; /* فاصله از متن های پایینی */

  img {
    cursor: pointer;
    width: 23px; /* اندازه اصلی */
    height: 18px;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
`;