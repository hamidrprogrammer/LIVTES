// src/components/Icon/MenuIcon.tsx
import { pxToRem } from '@/core/theme/theme';
import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: ${pxToRem(21)}; // بر اساس CSS (Group -> Vector ها در بخش menu)
  height: ${pxToRem(15)}; // محاسبه شده بر اساس ارتفاع کل و فاصله بین خطوط
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: ${pxToRem(2.5)}; // ضخامت خطوط منو
    background-color: ${({ theme }) => theme.colors.textDark}; // رنگ خطوط منو (از CSS: #000000)
    border-radius: ${pxToRem(1)};
  }
`;

const MenuIcon: React.FC = () => (
  <IconWrapper aria-label="Menu Icon">
    <span />
    <span />
    <span />
  </IconWrapper>
);

export default MenuIcon;