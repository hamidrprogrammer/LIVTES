// src/features/Navigation/Navbar.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.nav)`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* From Figma */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background: black;
`;

export const LogoLink = styled.a`
  display: inline-block;
  /* Placeholder for logo styling - SVG or Image */
  /* From Figma: logo width: 140px; height: 18px; left: 20px; top: 21px; */
  svg, img {
    width: 140px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.white}; /* If SVG and needs fill */
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}; /* Approx 8px-10px from Figma */
`;

export const NavIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin:8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%; /* Ellipse 22 */
  cursor: pointer;
  
  svg {
    width: 20px; /* Approx size for icons within */
    height: 20px;
    fill: ${({ theme }) => theme.colors.black}; /* For basket, menu icons */
  }
`;

// If "Menu" text is used (Figma showed it next to icon)
// export const MenuText = styled(Text)`
//   font-size: ${({ theme }) => theme.typography.fontSizes.xs}; /* 14px */
//   color: ${({ theme }) => theme.colors.white};
//   margin-right: 5px; // Space before icon
// `;
