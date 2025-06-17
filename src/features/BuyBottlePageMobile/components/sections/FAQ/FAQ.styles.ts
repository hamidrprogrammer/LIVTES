// src/sections/FAQ/FAQ.styles.ts
import { animatedStyles } from '@/core/hooks/animation';
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';


export const FAQSectionContainer = styled.section<{ $isVisible: boolean }>`
  /* FAQs (بخش کلی) -> top: 3668px */
  /* Rectangle 31 (پس‌زمینه): background: #EAF9F9; opacity: 0.5; */
  
  padding-top: ${pxToRem(60)}; // فاصله از بخش قبلی
  padding-bottom: ${pxToRem(80)};
  background-color: rgba(234, 249, 249, 0.5); // #EAF9F9 با شفافیت 0.5

  // برای اینکه پس‌زمینه تمام عرض صفحه را بگیرد:
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box;

  // محتوای داخلی
  & > div {
    max-width: ${({ theme }) => theme.colors.backgroundPage === '#FBFFFF' ? pxToRem(420) : '100%'};
    margin: 0 auto;
    padding: 0 ${pxToRem(20)}; // پدینگ استاندارد چپ و راست
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(30)}; // فاصله بین عنوان و لیست سوالات
  }

  ${({ $isVisible }) => animatedStyles($isVisible, 'fadeInUp', '0.8s', '0.3s')}
`;

export const SectionTitle = styled.h2`
  /* Frequently Asked Questions */
  /* width: 300px; height: 104px; left: calc(50% - 300px/2 - 17.5px); top: 3768px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(40)};
  line-height: 1.3; // 130% or 52px
  color: ${({ theme }) => theme.colors.textDark}; // #072C3D
  text-align: center;
  max-width: ${pxToRem(300)};
`;

export const FAQList = styled.ul`
  width: 100%;
  max-width: ${pxToRem(335)}; // عرضی که سوالات و آیکون‌ها در آن جا می‌شوند
  padding: 0;
  margin: 0;
`;
