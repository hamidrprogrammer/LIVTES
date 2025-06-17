// BottlePage/components/InPageNav/InPageNav.styles.ts
import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';

export const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background: #000309;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  box-sizing: border-box;
  z-index: 500;
  position: sticky; /* Make nav sticky */
  top: 0; /* Stick to the top */


  ${media.tabletDown} {
    height: auto;
    min-height: 60px;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.sm};
    position: static; /* Or relative, if sticky is not desired on mobile */
  }
`;

export const LinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */

  ${media.tabletDown} {
    gap: ${({ theme }) => theme.spacing.md};
    justify-content: center;
    order: 2;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 5px 0; /* Add some vertical padding for easier clicking */
  white-space: nowrap;


  &:hover {
    color: ${({ theme }) => theme.colors.accentCyan};
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 5px; /* Ensure touch area for links as well */
  }
`;

export const BuyButton = styled.button`
  padding: 9px 25px; /* Increased horizontal padding */
  min-width: 130px; /* Use min-width instead of fixed width */
  height: 37px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.accentCyan};
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${({ theme }) => theme.colors.accentCyan};
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index:1000;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }

  ${media.tabletDown} {
    order: 1;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    width: auto; /* Allow button to size based on content and padding */
    padding: 12px 25px; /* Increased padding for better touch target */
    height: auto; /* Let padding define height */
    min-height: 44px; /* Ensure minimum tap height */
  }
`;