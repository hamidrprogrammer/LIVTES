/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { motion } from 'framer-motion';
import logoDefault from '@assets/images/shared/logo.svg';
import globe from '@assets/images/shared/globe.svg'
import profile from '@assets/images/shared/profile.svg';
import basket from '@assets/images/shared/basket.svg';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useCartStore } from '@/features/cart/store/cartStore';
import { AvatarImage, AvatarInitials, AvatarWrapper, DropdownItem, DropdownMenu, LogoutButton, UserActionWrapper, UserMenuContainer, UserName } from './Navbar.styles';
import { useAuthStore } from '@/features/auth/stores/authStore';

// --- Global Styles ---
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Outfit', sans-serif;
  }
`;

// --- Styled Components ---
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

// Main Navigation Container
const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #000;
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* 3-column layout for true centering */
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  position: relative;

  /* Position the logo (first child) at the start */
  & > *:first-child {
    justify-self: start;
  }

  @media (max-width: 1024px) {
    display: flex; /* Revert to flexbox when links are hidden */
    justify-content: space-between;
    padding: 0 20px;
  }
`;

// Logo Placeholder
const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;

// Links Container (Group 1)
const NavLinks = styled.div`
  /* This component is automatically placed in the center grid column */
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none; /* Hide nav links on tablets and mobile */
  }
`;

// Navigation Link Item
const NavLinkItem = styled.a`
  font-family: Outfit;
  font-style: normal;
  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

// Action Icons Container
const ActionIcons = styled.div`
  justify-self: end; /* Position this at the end of the grid container */
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

// --- The React Component ---
const NavbarWeb: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const { isAuthenticated, user, logout } = useAuthStore();
  
  const getUserInitials = () => {
    if (!user || !user.username) return 'U';
    return user.username ? user.username[0] : 'U';
  };

  return (
    <>
      <GlobalStyle />
      <NavWrapper>
        <Logo src={logoDefault} alt="Logo" onClick={() => navigate('/')} />

        <NavLinks data-aos="zoom-in" data-aos-delay="300">
          <NavLinkItem href="/bottle" data-aos="fade-down" data-aos-delay="400">Bottle</NavLinkItem>
          <NavLinkItem href="/tablete" data-aos="fade-down" data-aos-delay="500">Tablets</NavLinkItem>
          <NavLinkItem href="#" data-aos="fade-down" data-aos-delay="600">Vision</NavLinkItem>
          <NavLinkItem href="#" data-aos="fade-down" data-aos-delay="700">Science</NavLinkItem>
          <NavLinkItem href="#" data-aos="fade-down" data-aos-delay="800">Revolution</NavLinkItem>
        </NavLinks>

        <ActionIcons data-aos="fade-left" data-aos-delay="200">
          <Logo src={globe} alt="globe" data-aos="zoom-in" data-aos-delay="1100" 
          onClick={handleMenuClick}/>
          {isAuthenticated && user ? (
            <>
              <AvatarWrapper>
                {user.avatar ? (
                  <AvatarImage  onClick={()=>{navigate('/account/profile')}} src={user.avatar} alt="User Avatar" />
                ) : (
                  <AvatarInitials  onClick={()=>{navigate('/account/profile')}}>{getUserInitials()}</AvatarInitials>
                )}
              </AvatarWrapper>
            </>
          ) : (
            <Logo src={profile} 
                  onClick={()=>{navigate('/login')}}
                  alt="Profile" 
                  data-aos="zoom-in"
                   data-aos-delay="1100" />
          )}
              
          <div style={{ position: 'relative' }}>
            <Logo src={basket} title="Basket" data-aos="zoom-in" data-aos-delay="1100" onClick={() => navigate('/basket')}/>
            {items.length > 0 && <CartBadge>{items.length}</CartBadge>}
          </div>      
        </ActionIcons>
        
        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </NavWrapper>
    </>
  );
};

export default NavbarWeb;