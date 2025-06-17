// src/sections/OrderReview/OrderReview.styles.ts
import styled from 'styled-components';
import { pxToRem } from '@/core/theme/theme';
import { animatedStyles } from '@/core/hooks/animation';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

export const ReviewSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* Review Order: position: absolute; width: 375px; height: 924px; left: 0px; top: 1942px; */
  /* Rectangle 1 (زیرین): background: #EAF9F9; */
  /* این بخش دارای پس‌زمینه متفاوتی است و تمام عرض را می‌گیرد */
  
  padding-top: ${pxToRem(60)}; // فاصله از بخش قبلی (1942px - (فرکانس پیکر باتم))
  padding-bottom: ${pxToRem(60)};
  background-color: ${({ theme }) => theme.colors.checkoutBg}; // #EAF9F9

  // برای اینکه پس‌زمینه تمام عرض صفحه را بگیرد، حتی اگر محتوای اصلی محدود شده باشد:
  width: 100vw; 
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box; // اطمینان از اینکه padding در عرض محاسبه می‌شود

  // محتوای داخلی این بخش باید دوباره به عرض اصلی صفحه محدود شود
  & > div { // کانتینر داخلی
    max-width: ${({ theme }) => theme.colors.backgroundPage === '#FBFFFF' ? pxToRem(420) : '100%'}; // تطبیق با PageWrapper
    margin: 0 auto;
    padding: 0 ${pxToRem(20)}; // پدینگ استاندارد چپ و راست
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(25)};
  }

  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.8s', '0.2s')}
`;

export const SectionTitle = styled.h2`
  /* Your new LumiVitae order */
  /* width: 322px; height: 104px; left: calc(50% - 322px/2 - 6.5px); top: 2012px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(40)};
  line-height: 1.3; // 130% or 52px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  text-align: center;
  max-width: ${pxToRem(322)};
`;

export const CheckoutImage = styled.img`
  /* Checkout_Shop 1 */
  /* width: 317px; height: 222px; left: 29px; top: 2131px; */
  /* background: url(Checkout_Shop.png); */
  width: ${pxToRem(317)};
  height: ${pxToRem(222)};
  object-fit: contain; // یا cover، بسته به تصویر
  border-radius: ${pxToRem(8)}; // کمی گردی برای تصویر
  box-shadow: 0 ${pxToRem(4)} ${pxToRem(12)} rgba(0,0,0,0.1);
  margin-top: ${pxToRem(20)}; // 2131px - (2012px + 104px_title_height) ~ 15px
  margin-bottom: ${pxToRem(20)};
`;

export const ShadowOverlay = styled.div`
  /* Rectangle 39: radial-gradient shadow under image */
  /* width: 375px; height: 30px; left: 0px; top: 2323px; */
  /* background: radial-gradient(50.97% 50% at 49.7% 100%, #000000 0%, rgba(0, 0, 0, 0) 100%); */
  /* opacity: 0.3; */
  width: 100%;
  max-width: ${pxToRem(317)}; // هم‌عرض با تصویر
  height: ${pxToRem(30)};
  background: radial-gradient(ellipse at center bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 70%);
  margin-top: -${pxToRem(15)}; // برای اینکه زیر تصویر قرار بگیرد و کمی همپوشانی داشته باشد
  margin-bottom: ${pxToRem(30)}; // فاصله تا بخش خلاصه سفارش
  z-index: -1; // پشت تصویر (اگر تصویر position:relative داشته باشد)
`;

export const OrderSummaryContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(322)}; // عرض مشخص شده برای آیتم‌های خلاصه
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)}; // فاصله بین آیتم‌های خلاصه
  padding: ${pxToRem(20)};
  background-color: ${({ theme }) => theme.colors.backgroundPage}; // پس‌زمینه سفید برای این بخش
  border-radius: ${pxToRem(10)};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(8)} rgba(0,0,0,0.05);
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};
`;

export const ItemTitle = styled.h4`
  /* LumiVitae Bottle Graphite Sand / IVQ+ Tablets */
  /* width: 322px; height: 24px; left: calc(50% - 322px/2 - 6.5px); top: 2393px / 2542px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium}; // font-weight: 600
  font-size: ${pxToRem(20)};
  line-height: 1.2; // 120% or 24px
  color: ${({ theme }) => theme.colors.textDark};
`;

export const ItemDetail = styled.p`
  /* Quantity 1 / €498.00 / €xx.xx / Two packs / One-time purchase */
  /* width: 322px; height: 22px; ... various tops */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // font-weight: 400
  font-size: ${pxToRem(18)};
  line-height: 1.2; // 120% or 22px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  
  &.placeholder { // برای مواردی که قیمت مشخصی ندارند
    color: ${({ theme }) => theme.colors.textGrey};
  }
`;

export const Divider = styled.hr`
  /* Line 1: width: 322px; height: 0px; left: 20px; top: 2512px; border: 1px solid #CCCCCC; */
  width: 100%;
  border: none;
  border-top: ${pxToRem(1)} solid ${({ theme }) => theme.colors.border}; // #CCCCCC
  margin: ${pxToRem(12)} 0; // فاصله عمودی
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: ${pxToRem(322)}; // هم‌عرض با آیتم‌های خلاصه
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)}; // فاصله بین دکمه‌ها (2754px - (2692px + 42px_button_height) = 20px)
                      // اینجا 12px برای فشرده‌تر شدن
  margin-top: ${pxToRem(30)}; // فاصله از خلاصه سفارش (2692px - (آخرین آیتم خلاصه))
`;