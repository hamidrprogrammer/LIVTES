/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  NavContainer,
  LogoContainer,
  NavLinks,
  NavLinkItem,
  NavIcons,
  MobileMenuButton,
} from './NavbarProduct.styles';
import { FiGlobe, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logoBlack from '../../../../assets/images/shared/logoblack.svg'; // لوگوی سیاه جدید
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/features/cart/store/cartStore';
const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;

  const CartBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 50%;
  line-height: 1;
`;
export const NavbarProduct: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);

  const navigate = useNavigate();

  const handleNavAction = (action: string) => {
    navigate(`${action}`);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <NavContainer data-aos="fade-down">
      <Logo src={logoBlack} alt="Logo" onClick={() => navigate('/')} />

      <NavLinks>
        <NavLinkItem href="/bottle" >Bottle</NavLinkItem>
        <NavLinkItem href="/tablete">Tablets</NavLinkItem>
        <NavLinkItem onClick={() => handleNavAction('Vision')}>Vision</NavLinkItem>
        <NavLinkItem onClick={() => handleNavAction('Science')}>Science</NavLinkItem>
        <NavLinkItem onClick={() => handleNavAction('Revolution')}>Revolution</NavLinkItem>
      </NavLinks>

      <NavIcons>
        <FiGlobe onClick={() => toggleMobileMenu()} />
        <FiUser onClick={() => handleNavAction('/account/profile')} />
        <div style={{ position: 'relative' }}>
          <FiShoppingCart onClick={() => handleNavAction('/basket')} />
          {items.length > 0 && <CartBadge>{items.length}</CartBadge>}
        </div>      
        </NavIcons>

      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>

      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 60px)',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          zIndex: 999
        }}>
          <NavLinkItem onClick={() => { handleNavAction('Bottle'); toggleMobileMenu(); }} style={{ padding: '10px 0' }}>Bottle</NavLinkItem>
          <NavLinkItem onClick={() => { handleNavAction('Tablets'); toggleMobileMenu(); }} style={{ padding: '10px 0' }}>Tablets</NavLinkItem>
          <NavLinkItem onClick={() => { handleNavAction('Vision'); toggleMobileMenu(); }} style={{ padding: '10px 0' }}>Vision</NavLinkItem>
          <NavLinkItem onClick={() => { handleNavAction('Science'); toggleMobileMenu(); }} style={{ padding: '10px 0' }}>Science</NavLinkItem>
          <NavLinkItem onClick={() => { handleNavAction('Revolution'); toggleMobileMenu(); }} style={{ padding: '10px 0' }}>Revolution</NavLinkItem>
        </div>
      )}
      <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </NavContainer>
  );
};