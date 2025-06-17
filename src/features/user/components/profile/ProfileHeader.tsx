import React from 'react';
import styled from 'styled-components';
import { useNewsletterStore } from '@/features/newsletter/stores/newsletterStore';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #FFFFFF;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px; // کاهش پدینگ در تبلت
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: 480px) {
    font-size: 1.5rem; // کاهش سایز فونت در موبایل
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap; 
  justify-content: flex-start; // برای اطمینان از چینش مناسب هنگام wrap شدن

  @media (max-width: 768px) {
      width: 100%;
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textGrey};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  flex-grow: 1; // دکمه‌ها در موبایل فضا را پر کنند

  @media (min-width: 768px) {
    flex-grow: 0; // در دسکتاپ به اندازه محتوا باشند
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &.edit {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &.logout {
    border-color: ${({ theme }) => theme.colors.accentRed};
    color: ${({ theme }) => theme.colors.accentRed};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentRed};
      color: white;
    }
  }
`;

interface ProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isEditing, setIsEditing }) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { subscribe } = useNewsletterStore();

  const handleUnsubscribe = () => {
    if (user?.email) {
      alert(`A request to unsubscribe ${user.email} has been sent.`);
    }
  };

  const handleDeactivate = () => {
    if (window.confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
      alert('Deactivation request sent.');
      logout();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderWrapper>
      <Title>Profile</Title>
      <ActionsContainer>
        <ActionButton onClick={handleDeactivate}>Deactivate Account</ActionButton>
        <ActionButton onClick={handleUnsubscribe}>Unsubscribe Newsletter</ActionButton>
        <ActionButton className="edit" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </ActionButton>
        <ActionButton className="logout" onClick={handleLogout}>
          Logout
        </ActionButton>
      </ActionsContainer>
    </HeaderWrapper>
  );
};