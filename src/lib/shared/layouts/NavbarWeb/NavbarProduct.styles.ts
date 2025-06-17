import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const NavContainer = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.sizes.navbarHeight};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacingT(4)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media ${media.sm} {
    padding: 0 ${({ theme }) => theme.spacingT(5)};
  }

  @media ${media.lg} {
    padding: 0 30px;
  }
`;

export const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textDark};
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: none;

  @media ${media.md} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacingT(3)};
    /* REMOVED: Absolute positioning was not responsive */
  }
`;

export const NavLinkItem = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.textDark};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingT(2)};

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textDark};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 24px;
  cursor: pointer;

  @media ${media.md} {
    display: none;
  }
`;