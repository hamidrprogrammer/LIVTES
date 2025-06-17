// src/features/Navigation/Navbar.tsx
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { NavContainer, LogoLink, NavActions, NavIconButton } from './Navbar.styles';
import Text from '../../components/Besic/Typography/Text';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import styled from 'styled-components';
// import { YourLogoSvg } from '../../assets/icons/logo'; // Example
// import { RiMenuFill, RiShoppingBasketLine } from 'react-icons/ri'; // Example
import logoBlack from '../../../../assets/images/shared/logo.svg'; // لوگوی سیاه جدید
import { useNavigate } from 'react-router-dom';

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const NavbarMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Menu clicked", event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
    // Implement menu open/close logic
  };


  const handleBasketClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Basket clicked", event.currentTarget);
    // Implement basket logic
  };
const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;
const navigate = useNavigate();

  return (
    <NavContainer initial="hidden" animate="visible" variants={navVariants}>
             <Logo src={logoBlack } alt="Logo"  onClick={() => navigate('/')} />

      <NavActions>
        {/* If Menu text is needed: <MenuText>Menu</MenuText> */}
        <NavIconButton aria-label="Open menu" onClick={handleMenuClick}>
          {/* <RiMenuFill /> */}
          {/* Placeholder Hamburger Icon SVG */}
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </NavIconButton>
        <NavIconButton aria-label="View basket" onClick={handleBasketClick}>
          {/* <RiShoppingBasketLine /> */}
          {/* Placeholder Basket Icon SVG */}
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Basket</title><path d="M16 6v2h2l-2 12H4L2 8h2V6a4 4 0 118 0zm-2 0a2 2 0 10-4 0v2h4V6zm-4 4H4l1.5 9h7L14 10z"/></svg>
        </NavIconButton>
      </NavActions>
            <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </NavContainer>
  );
};

export default NavbarMobile;