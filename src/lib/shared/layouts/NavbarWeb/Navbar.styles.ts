import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const NavContainer = styled.nav`
  position: absolute; // As per Figma, but for a real app, it might be fixed or sticky
  width: 100%;
  height: ${({ theme }) => theme.sizes.navbarHeight};
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px; // Horizontal padding
  z-index: 1000; // Ensure it's above other content
  background: transparent; // Or a very subtle gradient if needed for text visibility on complex backgrounds

  ${media.tablet} {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    height: auto; // Allow height to adjust for wrapped items if necessary
    min-height: ${({ theme }) => theme.sizes.navbarHeight};
    flex-direction: column; // Stack items on very small screens if needed, or use a burger menu
    align-items: flex-start; // Adjust alignment for mobile
  }
`;

export const LogoContainer = styled.div`
  /* Figma: width: 170px; height: 21.46px; left: 30px; top: 19px; */
  /* For simplicity, using text as logo. Replace with SVG or img. */
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  data-aos="fade-down";

  @media (max-width: 768px) {
    margin-bottom: 10px; // Space if stacked
    align-self: center; // Center logo if navbar is column
  }
`;

export const NavLinks = styled.div`
  /* Figma: Group 1 position: absolute; width: 363px; height: 18px; left: calc(50% - 363px/2 + 0.5px); top: 20px; */
  display: flex;
  gap: 30px; // Spacing between nav links

  ${media.tablet} {
    gap: 20px;
    position: static; // Override absolute positioning for responsive flow
    transform: none;
    width: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
    display: none; // Typically hidden behind a burger menu on mobile
                  // For this example, let's keep them visible and stacked if NavContainer is column
  }
`;

export const NavLinkItem = styled.a<{ isActive?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.white)};
  text-shadow: ${({ theme, isActive }) => (isActive ? `0px 0px 20px ${theme.colors.primary}` : 'none')};
  cursor: pointer;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  data-aos="fade-down" data-aos-delay="100"; // Stagger animation

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px; // Spacing between action icons

  ${media.tablet} {
    gap: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 10px; // Space if stacked
    align-self: center; // Center actions if navbar is column
    gap: 15px;
    display: none; // Same as NavLinks, typically part of burger menu
  }
`;

export const NavIcon = styled.div`
  /* Placeholder for icons. Replace with actual SVG icons or font icons. */
  width: 20px;
  height: 20px;
  border: 1.5px solid ${({ theme }) => theme.colors.white}; // Example style from Figma
  border-radius: 50%; // Example for profile icon
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px; // For text placeholder
  color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.3s ease, transform 0.3s ease;
  data-aos="fade-down" data-aos-delay="200"; // Stagger animation

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  &.basket {
    background: ${({ theme }) => theme.colors.white}; // basket background
    border-color: transparent;
    color: ${({ theme }) => theme.colors.black}; // Text inside basket
  }
`;

// If using a burger menu for mobile
export const BurgerMenuButton = styled.button`
  display: none; // Hidden by default
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block; // Show on mobile
    position: absolute; //\Psi
    right: 15px;
    top: 15px; // Adjust as needed
  }
`;

export const MobileNavLinks = styled(NavLinks)<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px; // Below the navbar
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9); // Semi-transparent background
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 999; // Below burger button but above other content
  }
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.accentCyan};
  box-shadow: 0 0 12px rgba(63, 255, 248, 0.25);
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;
export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const AvatarInitials = styled.span`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;
