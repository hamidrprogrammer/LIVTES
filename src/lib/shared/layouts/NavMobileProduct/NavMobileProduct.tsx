// src/sections/Header/Header.tsx
import React, { useState, useEffect } from 'react';

import { HeaderContainer, NavActions,  NavIconButton } from './NavMobileProduct.styles';
import { pxToRem } from '@/core/theme/theme';
import Logo from '../../components/Besic/Logo/Logo';

// import useScrollAnimation from '../../hooks/useScrollAnimation'; // اگر بخواهیم با اسکرول ظاهر شود

const NavMobileProduct: React.FC = () => {
  // const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: false });
  // برای هدر ثابت، انیمیشن اسکرول معمولاً استفاده نمی‌شود مگر اینکه در ابتدا مخفی باشد.

  const [isSticky, setIsSticky] = useState(false);

  // مدیریت حالت چسبان (sticky) بودن هدر بر اساس اسکرول صفحه
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // بعد از 50 پیکسل اسکرول، هدر چسبان شود
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // پاکسازی event listener هنگام unmount شدن کامپوننت
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMenuClick = () => {
     
    // در اینجا منطق باز شدن منوی همبرگری پیاده‌سازی می‌شود
  };

  const handleBasketClick = () => {
     
    // در اینجا منطق نمایش سبد خرید یا رفتن به صفحه سبد خرید پیاده‌سازی می‌شود
  };

  return (
    <HeaderContainer $isSticky={isSticky} /* $isVisible={isVisible} ref={elementRef as React.RefObject<HTMLElement>} */>
      {/* لوگو با اندازه فونت مشخص شده در CSS اصلی برای لوگوی هدر (کوچکتر از لوگوی فوتر) */}
      {/* CSS: logo -> width: 142.57px; height: 18px; */}
      <Logo fontSize={pxToRem(18)} /> {/* اندازه تقریبی بر اساس ارتفاع 18px */}
      
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
           
    </HeaderContainer>
  );
};

export default NavMobileProduct;