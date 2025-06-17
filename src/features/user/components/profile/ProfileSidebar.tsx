import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// NavLink از react-router-dom حذف شد

const SidebarContainer = styled.aside`
  width: 260px;
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 24px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled.li``;

// StyledNavLink دیگر از NavLink ارث‌بری نمی‌کند و یک div است
const StyledNavLink = styled.div<{ $isActive: boolean }>`
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textGrey};
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #F3F4F6;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  /* استایل برای آیتم فعال با استفاده از پراپ $isActive */
  ${({ $isActive, theme }) =>
    $isActive &&
    `
      background-color: ${theme.colors.primary};
      color: #FFFFFF;
  `}
`;

const navItems = [
  { key: 'profile', label: 'Profile' },
  { key: 'addresses', label: 'Addresses' },
  { key: 'orders', label: 'Orders' },
  { key: 'subscriptions', label: 'Order Subscription' },
  { key: 'documents', label: 'Documents' },
  { key: 'store-credit', label: 'Store Credit' },
];

// پراپ‌های جدید برای دریافت ویو فعال و تابع تغییر آن
interface ProfileSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ activeView, setActiveView }) => {
  const navigate = useNavigate();

      const { activeTab = 'profile' } = useParams<{ activeTab: "string" }>();
      useEffect(() => {
       setActiveView(activeTab)
      }, [])
const handleTabChange = (key: string) => {
    setActiveView(key);
    navigate(`/account/${key}`);
  };

  return (
    <SidebarContainer data-aos="fade-right">
      <Title>My Account</Title>
      <NavList>
        {navItems.map(item => (
          <NavItem key={item.key}>
            <StyledNavLink
              onClick={() => handleTabChange(item.key)}
              $isActive={activeView === item.key}
            >
              {item.label}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};