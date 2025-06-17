// src/sections/FAQ/FAQItem.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';

export const ItemWrapper = styled.li`
  list-style-type: none; // حذف نقاط پیش‌فرض لیست
  border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.colors.border};
  padding: ${pxToRem(18)} 0; // کمی پدینگ عمودی بیشتر

  &:first-child {
    // border-top: 1px solid ${({ theme }) => theme.colors.border}; // اگر بوردر بالا هم نیاز باشد
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const QuestionRow = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 0; // پدینگ توسط ItemWrapper مدیریت می‌شود
  text-align: left;
  cursor: pointer;
  gap: ${pxToRem(15)}; // فاصله بین متن سوال و آیکون
`;

export const QuestionText = styled.h4<{ $isOpen: boolean }>`
  /* Lorem ipsum dolor sit amet, consectetur adipiscing elit? */
  /* width: 256px; height: 48px; ... top: 3912px; color: #60C9DA; */
  flex-grow: 1;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // font-weight: 400
  font-size: ${pxToRem(20)};
  line-height: 1.2; // 120% or 24px
  color: ${({ theme, $isOpen }) => $isOpen ? theme.colors.accent : theme.colors.secondary};
  transition: color 0.3s ease;
`;

export const AnswerWrapper = styled.div<{ $isOpen: boolean }>`
  /* Ut enim ad minim veniam... */
  /* width: 321px; height: 105px; ... top: 3980px; color: #405F6C; opacity: 0.5; */
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')}; // یک ارتفاع حداکثر برای انیمیشن
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.0), 
              opacity 0.3s ease-in-out, 
              margin-top 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.0),
              padding-bottom 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.0);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  margin-top: ${({ $isOpen }) => ($isOpen ? pxToRem(15) : '0')};
  padding-bottom: ${({ $isOpen }) => ($isOpen ? pxToRem(5) : '0')}; // کمی پدینگ پایین برای پاسخ
`;

export const AnswerText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // font-weight: 300
  font-size: ${pxToRem(16)};
  line-height: 1.4; // 130% or 21px -> کمی بیشتر برای خوانایی بهتر
  color: #405F6C; // رنگ مشخص شده در CSS
  // opacity: 0.8; // در CSS اصلی 0.5 بود، کمی خواناتر می‌کنیم. یا مستقیم روی رنگ اعمال شود.
  // رنگ #405F6C خود به اندازه کافی کنتراست ندارد اگر opacity خیلی کم باشد.
`;
