// ge/lib/shared/layouts/MobileNavMenu/MobileNavMenu.styled.ts
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalMenuFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');

  body.menu-open-no-scroll {
    overflow: hidden;
  }
`;

interface MenuOverlayProps {
  $isOpen: boolean;
}

export const MenuOverlay = styled.div<MenuOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 44, 61, 0.8);
  backdrop-filter: blur(5px);
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999;
`;

interface MenuDrawerProps {
  $isOpen: boolean;
}

export const MenuDrawer = styled.nav<MenuDrawerProps>`
  position: fixed;
  top: 0;
  right: ${props => (props.$isOpen ? '0' : '-100%')};
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background: #FFFFFF;
  box-shadow: -3px 0 15px rgba(0, 0, 0, 0.15);
  transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Outfit', sans-serif;
`;

export const MenuHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #EAEAEA;
`;

export const LogoContainer = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #072C3D;
  padding: 5px 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  padding: 0;
  margin-right: -10px;

  &:active {
    background-color: rgba(7, 44, 61, 0.1);
    transform: scale(0.9);
  }

  .icon-bar-container {
    width: 20px;
    height: 20px;
    position: relative;
  }
  
  .icon-bar {
    display: block;
    width: 100%;
    height: 2.5px;
    background-color: #072C3D;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 1px;
    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

export const MenuContentWrapper = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

export const CategoryCard = styled.div<{ $backgroundImage?: string }>`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${props => (props.$backgroundImage ? '#A7B1B9' : '#D9D9D9')};
  ${props => props.$backgroundImage && css`
    background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${props.$backgroundImage});
  `}
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const CategoryTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 28px;
  font-weight: 400;
  color: #3FFFF8;
  margin: 0;
  line-height: 1.2;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
`;

export const ArrowButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  
  svg {
    width: 18px;
    height: 18px;
    path {
      stroke: #072C3D;
    }
  }
`;

export const NavLinkItem = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px 25px;
  background: #EAF9F9;
  border-radius: 100px;
  margin-bottom: 15px;
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #072C3D;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
  &:active {
    background-color: #d8f0f0;
    transform: translateY(1px) scale(0.99);
  }
`;

export const SelectorContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const SelectorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  background: #EAF9F9;
  opacity: 0.85;
  border-radius: 100px;
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
  font-weight: 300;
  color: #072C3D;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  .selector-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .selector-icon svg {
    width: 22px;
    height: 22px;
    fill: #072C3D;
  }
  .dropdown-arrow svg {
    width: 14px;
    height: 14px;
    path {
      stroke: #1C1F23;
      stroke-width: 1.5;
    }
  }
`;

export const DropdownList = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-top: 5px;
  border: 1px solid #eaeaea;
`;

export const DropdownItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  &:hover {
    background-color: #eaf9f9;
  }
`;

export const LegalsLink = styled.a`
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #072C3D;
  text-decoration: none;
  padding: 10px 5px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: left;
  &:active {
    color: #3FFFF8;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  padding: 15px 0;
  margin-bottom: 10px;
`;

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0.7;
  svg {
    width: 26px;
    height: 26px;
    fill: #4A7C8A;
  }
  &:hover, &:focus {
    opacity: 1;
    transform: scale(1.1);
  }
`;