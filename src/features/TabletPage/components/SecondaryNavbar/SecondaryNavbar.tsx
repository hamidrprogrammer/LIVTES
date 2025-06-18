import React, { useState, useEffect, useRef } from 'react';
import SharedButton from '../SharedButton/SharedButton';
import {
  SecondaryNavWrapper,
  NavContainer,
  NavLinksList,
  NavLink,
  BuyButtonContainer,
  MobileSecondaryNavBurger,
  MobileSecondaryNavLinks
} from './SecondaryNavbar.styles';
import { useNavigate } from 'react-router-dom';

const secondaryNavLinks = [
  { name: 'Story', href: '#story' },
  { name: 'Cellular Fusion', href: '#cellular-fusion' },
  { name: 'Feeling It', href: '#feeling-it' },
  { name: 'Hydrogen', href: '#hydrogen' },
  { name: 'Nicotinamide Riboside', href: '#nicotinamide' },
  { name: 'Resveratrol', href: '#resveratrol' },
  { name: 'Spermidine', href: '#spermidine' },
  { name: 'Magnesium', href: '#magnesium' },
  { name: 'Vitamins', href: '#vitamins' },
];

const SecondaryNavbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const handleResize = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobileView(mobile);
    if (!mobile) {
      setIsMobileMenuOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.boundingClientRect.top < 0 && !entry.isIntersecting);
      },
      { threshold: [0], rootMargin: `0px 0px 0px 0px` }
    );

    observer.observe(nav);

    return () => {
      if (nav) {
        observer.unobserve(nav);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      secondaryNavLinks.forEach(link => {
        const sectionElement = document.getElementById(link.href.substring(1));
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = link.href;
          }
        }
      });
      if(activeLink !== currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  const handleNavLinkClick = (href: string) => {
     
    setActiveLink(href);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = isSticky ? 60 : 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleBuyTabletsClick = () => {
          navigate('/products-bottle/10'); // replace "1" with your default ID
  };

  return (
    <SecondaryNavWrapper ref={navRef} data-aos="fade-in" data-aos-offset="2300">
      <NavContainer isSticky={isSticky}>
        {isMobileView ? (
          <MobileSecondaryNavBurger onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileSecondaryNavBurger>
        ) : (
          <NavLinksList>
            {secondaryNavLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                isActive={activeLink === link.href}
                onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.href); }}
              >
                {link.name}
              </NavLink>
            ))}
          </NavLinksList>
        )}

        {!isMobileView && (
          <BuyButtonContainer>
            <SharedButton variant="secondary" onClick={handleBuyTabletsClick} style={{ fontSize: '14px', padding: '9px 15px 10px' }}>
              Buy Tablets
            </SharedButton>
          </BuyButtonContainer>
        )}

        {isMobileView && (
          <MobileSecondaryNavLinks isOpen={isMobileMenuOpen}>
            {secondaryNavLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                isActive={activeLink === link.href}
                onClick={(e) => { e.preventDefault(); handleNavLinkClick(link.href); }}
              >
                {link.name}
              </NavLink>
            ))}
            <BuyButtonContainer style={{display: 'block', marginTop: '15px'}}>
              <SharedButton variant="secondary" onClick={handleBuyTabletsClick} style={{ fontSize: '14px', padding: '9px 15px 10px' }}>
                Buy Tablets
              </SharedButton>
            </BuyButtonContainer>
          </MobileSecondaryNavLinks>
        )}
      </NavContainer>
    </SecondaryNavWrapper>
  );
};

export default SecondaryNavbar;
