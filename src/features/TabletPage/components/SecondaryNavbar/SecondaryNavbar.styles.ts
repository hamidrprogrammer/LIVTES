import styled, { css } from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const SecondaryNavWrapper = styled.div<{ isSticky?: boolean }>`
  height: 60px;
  width: 100%;
  position: relative;
  
  ${({ isSticky }) =>
    isSticky &&
    css`
    `}
`;

export const NavContainer = styled.nav<{ isSticky?: boolean }>`
  width: 100%;
  height: 60px;
  background-color: #000309;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: ${({ isSticky }) => (isSticky ? '0 2px 10px rgba(0,0,0,0.5)' : 'none')};
  transition: top 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  z-index: 990;

  ${({ isSticky }) =>
    isSticky
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          max-width: ${({ theme }) => theme.sizes.navbarHeight};
        `
      : css`
          position: absolute;
          top: 2440px;
          left: 0;
        `}

  ${media.tablet} {
    padding: 0 20px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    flex-direction: column;
    height: auto;
    min-height: 60px;
    justify-content: center;
    text-align: center;

    ${({ isSticky }) =>
    isSticky &&
    css`
        max-width: 100%;
    `}
  }
`;

export const NavLinksList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;

  ${media.tablet} {
    gap: 15px;
    justify-content: flex-start;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    display: none;
  }
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.white)};
  text-shadow: ${({ theme, isActive }) => (isActive ? `0px 0px 10px ${theme.colors.primary}` : 'none')};
  cursor: pointer;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BuyButtonContainer = styled.div`
  margin-left: 20px;
  flex-shrink: 0;

  ${media.tablet} {
  }
  @media (max-width: 768px) {
    display: none;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const MobileSecondaryNavBurger = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 991;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 15px;
    top: 18px;
  }
`;

export const MobileSecondaryNavLinks = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 3, 9, 0.95);
    padding: 20px;
    z-index: 990;
    border-top: 1px solid ${({ theme }) => theme.colors.primaryDark};
  }
`;
