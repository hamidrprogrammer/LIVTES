// src/components/Icon/BasketIcon.tsx
import { pxToRem } from '@/core/theme/theme';
import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  font-size: ${pxToRem(20)}; // اندازه آیکون نمونه
  color: ${({ theme }) => theme.colors.textDark}; // رنگ آیکون
  // در CSS اصلی، یک path SVG برای basket وجود داشت.
  // اینجا از یک متن نمونه استفاده می‌کنیم.
  //  basket: background: #010406; (این رنگ برای path SVG است)
`;

// Placeholder for basket icon. Ideally, use an SVG.
const BasketIcon: React.FC = () => (
  <IconWrapper aria-label="Basket Icon">
    {/* Use a real SVG or an icon font here */}
    🛒
  </IconWrapper>
);

export default BasketIcon;