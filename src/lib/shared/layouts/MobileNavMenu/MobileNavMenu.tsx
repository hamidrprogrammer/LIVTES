/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useListContactGroupsQuery } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { useIsMobile } from '@/core/hooks/useIsMobile';
import { useListLanguagesQuery, useGetConfigDataQuery } from '@/features/settings/hooks/useSettingsQueries';
import { ListContactGroupsParams, Country } from '@/core/types/api/contactGroup';
import { useSettingsStore } from '@/features/settings/stores/settingsStore';
import { useCartStore } from '@/features/cart/store/cartStore';
import { showToast } from '@/lib/shared/stores/toastStore';

import buttle from '@assets/images/shared/imageme9.png';
import tablte from '@assets/images/shared/imageme10.png';
import logoBlack from '../../../../assets/images/shared/logoblack.svg';

import {
  GlobalMenuFonts, MenuOverlay, MenuDrawer, MenuHeader, CloseButton, MenuContentWrapper,
  CategoryCard, CategoryTitle, ArrowButton, NavLinkItem, LegalsLink, SocialIconsContainer,
  SocialIconLink, SelectorItem, DropdownList, DropdownItem, SelectorContainer
} from './MobileNavMenu.styled';
import { MobileNavMenuProps } from './MobileNavMenu.types';

const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;

// آیکون‌ها
const ArrowRightIcon: React.FC = () => ( <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L8.5 8L1.5 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const GlobeIcon: React.FC = () => ( <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"/><path d="M12 4C9.163 4 6.638 5.353 5 7.503L5.002 7.504C6.639 5.354 9.164 4.001 12.001 4.001C14.837 4.001 17.362 5.354 18.999 7.504L19 7.503C17.362 5.353 14.837 4 12 4Z" opacity="0.3"/><path d="M12 20C14.837 20 17.362 18.647 19 16.497L18.998 16.496C17.361 18.646 14.836 19.999 11.999 19.999C9.163 19.999 6.638 18.646 5.001 16.496L5 16.497C6.638 18.647 9.163 20 12 20Z" opacity="0.3"/><path d="M4 12C4 11.185 4.081 10.391 4.233 9.622L4.234 9.623C4.082 10.392 4.001 11.186 4.001 12.001C4.001 12.815 4.082 13.609 4.234 14.378L4.233 14.379C4.081 13.61 4 12.816 4 12Z" opacity="0.3"/><path d="M19.767 9.622C19.919 10.391 20 11.185 20 12C20 12.816 19.919 13.61 19.767 14.379L19.766 14.378C19.918 13.609 19.999 12.815 19.999 12.001C19.999 11.186 19.918 10.392 19.766 9.623L19.767 9.622Z" opacity="0.3"/></svg> );
const LanguageIcon: React.FC = () => ( <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6.02H18V4H11V2H9V4H2V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.65L4 19.07L9.09 14.01L12.87 17.75L14.02 16.6L12.87 15.07ZM10.5 10.5H12.5L10.5 12.5V10.5Z"/></svg> );
const ChevronDownIcon: React.FC = () => ( <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 5.5L11 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const FacebookIcon: React.FC = () => <svg viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.36 9.5 5.32v2.14H6.1v3.56H9.5v8.46h5V11.02h3.77l.8-3.56z"/></svg>;
const TikTokIcon: React.FC = () => <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.18 3.05.28 4.58.04.66.08 1.32.12 1.98.01.09.02.18.04.27.14.51.29.99.46 1.46.13.36.28.72.44 1.07.2.43.43.85.68 1.26.22.36.47.71.73.99.11.11.23.19.35.26.28.18.58.31.9.38.1.03.2.07.3.1.28.08.56.13.84.13.28-.02.55-.06.83-.08q-.08.4-.15.79c-.02.11-.05.22-.07.33a2.845 2.845 0 0 1-.16.41c-.09.2-.2.38-.32.55-.35.51-.82.9-1.36 1.18-.21.11-.43.19-.65.26-.37.11-.75.18-1.13.21-.66.06-1.32.03-1.98.01h-.11c-.68.01-1.35.03-2.03.03-.37 0-.74 0-1.11-.02a10.467 10.467 0 0 1-3.11-.54c-.47-.13-.92-.33-1.35-.58-.43-.26-.84-.57-1.22-.93a4.912 4.912 0 0 1-.92-1.18c-.19-.31-.35-.65-.49-.99-.09-.23-.17-.47-.23-.71-.09-.35-.15-.72-.2-1.09-.03-.28-.05-.56-.07-.84l-.03-.33c0-.64.01-1.28.01-1.92.01-.95.02-1.91.04-2.86.01-.35.01-.7.02-1.05.09-1.32.23-2.64.42-3.95C5.73 3.67 7.13 2.32 8.73.95 9.77.27 10.95-.05 12.525.02zM11.8 5.68c-.09.43-.16.86-.23 1.29-.14 1.03-.22 2.07-.33 3.11-.02.2-.05.4-.07.6-.07.51-.13 1.02-.17 1.53-.03.34-.04.67-.04 1.01 0 .13.01.26.02.39.08.51.17 1 .3 1.47.18.69.45 1.34.82 1.92.22.34.48.65.78.92.25.22.53.41.82.55.38.18.79.3 1.21.35.28.03.57.05.85.05.25 0 .5-.02.75-.04.49-.04.98-.12 1.45-.28l.11-.04c.28-.12.54-.28.79-.47.45-.35.83-.8 1.11-1.32.16-.29.29-.6.41-.91.12-.33.23-.67.31-1.02.05-.21.1-.42.13-.63.09-.57.14-1.14.16-1.71.02-.51.02-1.02.01-1.53-.01-.72-.04-1.43-.1-2.15-.07-.84-.18-1.68-.31-2.51-.14-.89-.32-1.77-.54-2.64-.09-.35-.2-.69-.32-1.03l-.02-.04C14.33 5.7 13.07 5.67 11.8 5.68z"/></svg>;
const InstagramIcon: React.FC = () => <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.66-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163S15.403 5.838 12 5.838zm0 10.333c-2.302 0-4.171-1.869-4.171-4.171s1.869-4.172 4.171-4.172 4.171 1.869 4.171 4.172S14.302 16.171 12 16.171zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const YouTubeIcon: React.FC = () => <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const LegalIcon: React.FC = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 7L12 12M22 7L12 12M12 22V12M16.5 4.5L7.5 9.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>);


const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const setSelectedCountryId = useSettingsStore(state => state.setSelectedCountryId);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const clearCart = useCartStore(state => state.clearCart);
  
  const [isLangOpen, setLangOpen] = useState(false);
  const [isCountryOpen, setCountryOpen] = useState(false);
  const [isLegalOpen, setLegalOpen] = useState(false);

  const { data: languagesData } = useListLanguagesQuery({ page: 1, per_page: 50, isActive: 1 });
  const listParams = useMemo((): ListContactGroupsParams => ({ page: 1, per_page: 50, isArchive: false }), []);
  const { data: contactGroupsData } = useListContactGroupsQuery(
    listParams,
    {
      enabled: isAuthenticated,
    }
  );

  const languages = useMemo(() => languagesData?.data || [], [languagesData]);
  const countries = useMemo(() => {
    if (!contactGroupsData?.data) return [];
    const countryMap = new Map();
    contactGroupsData.data.forEach(group => {
      if (group.country && !countryMap.has(group.country.id)) {
        countryMap.set(group.country.id, group.country);
      }
    });
    return Array.from(countryMap.values());
  }, [contactGroupsData]);
  
  const selectedCountryId = useSettingsStore((state) => state.selectedCountryId);
  
  // State ها
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Effect ها
  useEffect(() => {
    AOS.init({ duration: 400, easing: 'ease-out-cubic', once: false, mirror: false, offset: 20 });
  }, []);

  useEffect(() => {
    // همگام‌سازی کشور انتخاب شده با مقدار سراسری
    if (countries.length > 0) {
      const globallySelectedCountry = countries.find(c => c.id === selectedCountryId);
      if (globallySelectedCountry) {
        setSelectedCountry(globallySelectedCountry);
      } else if (!selectedCountry) {
        setSelectedCountry(countries[0]);
      }
    }
  }, [countries, selectedCountryId]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // توابع Handler
  const handleLinkClick = (path: string) => {
    onClose();
    navigate(path);
  };

  const legalLinks = [
      { name: 'Terms & Conditions', path: '/legals/terms-and-conditions' },
      { name: 'Privacy Policy', path: '/legals/privacy-policy' },
      { name: 'Returns Policy', path: '/legals/returns-policy' },
      { name: 'Shipping Policy', path: '/legals/shipping-policy' },
      { name: 'Warranty Policy', path: '/legals/warranty-policy' },
      { name: 'Partner Agreement', path: '/legals/partner-agreement' },
  ];

  return (
    <>
      <GlobalMenuFonts />
      <MenuOverlay $isOpen={isOpen} onClick={onClose} />
      <MenuDrawer $isOpen={isOpen} aria-hidden={!isOpen}>
        <MenuHeader>
          <Logo src={logoBlack} onClick={() => handleLinkClick('/')} alt="LumiVitae Logo" />
          <CloseButton onClick={onClose} aria-label="Close menu">
            <div className="icon-bar-container"><span className="icon-bar" /><span className="icon-bar" /></div>
          </CloseButton>
        </MenuHeader>

        <MenuContentWrapper>
          <CategoryCard $backgroundImage={buttle} onClick={() => handleLinkClick('/bottle')}>
            <CategoryTitle>Bottle</CategoryTitle>
            <ArrowButton aria-label="Go to Bottle category"><ArrowRightIcon /></ArrowButton>
          </CategoryCard>

          <CategoryCard $backgroundImage={tablte} onClick={() => handleLinkClick('/tablete')}>
            <CategoryTitle>Tablets</CategoryTitle>
            <ArrowButton aria-label="Go to Tablets category"><ArrowRightIcon /></ArrowButton>
          </CategoryCard>
            
          <NavLinkItem href="/vision" onClick={(e) => { e.preventDefault(); handleLinkClick('/vision'); }}>Vision</NavLinkItem>
          <NavLinkItem href="/science" onClick={(e) => { e.preventDefault(); handleLinkClick('/science'); }}>Science</NavLinkItem>
          <NavLinkItem href="/revolution" onClick={(e) => { e.preventDefault(); handleLinkClick('/revolution'); }}>Revolution</NavLinkItem>
          
          <SelectorContainer>
            <SelectorItem onClick={() => setCountryOpen(!isCountryOpen)}>
              <div className="selector-content">
                <span className="selector-icon"><GlobeIcon /></span>
                <span>{selectedCountry?.name || 'Select Country'}</span>
              </div>
              <span className="dropdown-arrow"><ChevronDownIcon /></span>
            </SelectorItem>
            <DropdownList $isOpen={isCountryOpen}>
              {countries.map(country => (
                <DropdownItem key={country.id} onClick={() => {
                  setSelectedCountry(country);
                  setCountryOpen(false);
                  setSelectedCountryId(country.id);
                  clearCart();
                   showToast('Your cart has been cleared due to changing the country.', 'info'); 
                }}>
                  {country.name}
                </DropdownItem>
              ))}
            </DropdownList>
          </SelectorContainer>

          <SelectorContainer>
            <SelectorItem onClick={() => setLangOpen(!isLangOpen)}>
              <div className="selector-content">
                <span className="selector-icon"><LanguageIcon /></span>
                <span>{selectedLanguage?.title || 'Select Language'}</span>
              </div>
              <span className="dropdown-arrow"><ChevronDownIcon /></span>
            </SelectorItem>
            <DropdownList $isOpen={isLangOpen}>
              {languages.map(lang => (
                <DropdownItem key={lang.id} onClick={() => { setSelectedLanguage(lang); setLangOpen(false); }}>
                  {lang.title}
                </DropdownItem>
              ))}
            </DropdownList>
          </SelectorContainer>
              
          <SelectorContainer>
            <SelectorItem onClick={() => setLegalOpen(!isLegalOpen)}>
                <div className="selector-content">
                    <span className="selector-icon"><LegalIcon /></span>
                    <span>Legal</span>
                </div>
                <span className="dropdown-arrow"><ChevronDownIcon /></span>
            </SelectorItem>
            <DropdownList $isOpen={isLegalOpen}>
                {legalLinks.map(link => (
                    <DropdownItem key={link.path} onClick={() => handleLinkClick(link.path)}>
                        {link.name}
                    </DropdownItem>
                ))}
            </DropdownList>
          </SelectorContainer>

          <SocialIconsContainer>
            <SocialIconLink href="https://www.facebook.com/lumivitae.official" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com/@lumivitae_official" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><TikTokIcon /></SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/lumivitae_official" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></SocialIconLink>
            <SocialIconLink href="https://www.youtube.com/@LumiVitae.Official" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></SocialIconLink>
          </SocialIconsContainer>
        </MenuContentWrapper>
      </MenuDrawer>
    </>
  );
};

export default MobileNavMenu;