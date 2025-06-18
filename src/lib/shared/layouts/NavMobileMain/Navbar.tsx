// src/features/Navigation/Navbar.tsx
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { NavContainer, LogoLink, NavActions, NavIconButton } from './Navbar.styles';
import Text from '../../components/Besic/Typography/Text';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import styled from 'styled-components';
// import { YourLogoSvg } from '../../assets/icons/logo'; // Example
// import { RiMenuFill, RiShoppingBasketLine } from 'react-icons/ri'; // Example
const logoBlack = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/shared/logo.svg'; // لوگوی سیاه جدید
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { useCartStore } from '@/features/cart/store/cartStore';
import profile from '@assets/images/shared/profile.svg';

import { AvatarImage, AvatarInitials, AvatarWrapper } from '../NavbarWeb/Navbar.styles';
const CartBadge = styled.div`
  position: absolute;
  top: 10px;
  right: -6px;
  background-color: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 50%;
  line-height: 1;
`;
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const NavbarMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     
    setIsMenuOpen(!isMenuOpen);
    // Implement menu open/close logic
  };


  const handleBasketClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     
    if(isAuthenticated){
      navigate('/basket');
    }else{
      navigate('/login');
    }
    // Implement basket logic
  };

    
  const getUserInitials = () => {
    if (!user || !user.username) return 'U';
    return user.username ? user.username[0] : 'U';
  };
const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;
const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();
  const items = useCartStore((state) => state.items);

  return (
    <NavContainer initial="hidden" animate="visible" variants={navVariants}>
      <div style={{paddingLeft:"15px"}}>
             <Logo src={logoBlack } alt="Logo"  onClick={() => navigate('/')} />
</div>
      <NavActions>
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
        {/* If Menu text is needed: <MenuText>Menu</MenuText> */}
    
       
         <div style={{ position: 'relative' }}>
        <NavIconButton aria-label="View basket" onClick={handleBasketClick}>
          {/* <RiShoppingBasketLine /> */}
          {/* Placeholder Basket Icon SVG */}
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Basket</title><path d="M16 6v2h2l-2 12H4L2 8h2V6a4 4 0 118 0zm-2 0a2 2 0 10-4 0v2h4V6zm-4 4H4l1.5 9h7L14 10z"/></svg>
        </NavIconButton>
                    {items.length > 0 && <CartBadge>{items.length}</CartBadge>}

        </div>
         <NavIconButton aria-label="Open menu" onClick={handleMenuClick}>
          {/* <RiMenuFill /> */}
          {/* Placeholder Hamburger Icon SVG */}
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </NavIconButton>
      </NavActions>
            <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </NavContainer>
  );
};

export default NavbarMobile;