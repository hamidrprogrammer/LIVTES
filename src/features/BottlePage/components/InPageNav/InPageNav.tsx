import React from 'react';
import * as S from './InPageNav.styles';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/core/hooks/useIsMobile';

interface NavItem {
  label: string;
  targetId: string; // ID of the section to scroll to
}

const navItems: NavItem[] = [
  { label: 'Frequency', targetId: 'frequency-intro-section' }, // Assuming this will be the ID for the main Frequency section
  { label: 'Chromotherapy', targetId: 'chromotherapy-intro-section' },
  { label: 'Hydrogen', targetId: 'molecular-hydrogen-section' }, // We already have this, link back or to a more detailed one
  { label: 'Magnetic Field', targetId: 'magnetic-field-info-section' },
];

const InPageNav: React.FC = () => {
  const handleLinkClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with ID "${targetId}" not found.`);
    }
  };

   const navigate =useNavigate();
  
  const handleBuyBottleClick = () => {
     
            navigate('/products-bottle/1')

    // Add navigation to shop or modal logic here
  };

  return (
    <S.NavWrapper data-aos="fade-in" data-aos-anchor-placement="top-center">
      <S.LinksGroup>
        {navItems.map((item) => (
          <S.NavLink key={item.label} onClick={() => handleLinkClick(item.targetId)}>
            {item.label}
          </S.NavLink>
        ))}
      </S.LinksGroup>
      <S.BuyButton onClick={handleBuyBottleClick}>
        Buy bottle
      </S.BuyButton>
    </S.NavWrapper>
  );
};

export default InPageNav;
