import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog } from '@/lib/shared/components/ConfirmDialog/ConfirmDialog';
import { useDeactivateAccountMutation } from '@/features/user/hooks/useUserQueries';
import { useUnsubscribeFromNewsletterMutation } from '@/features/newsletter/hooks/useNewsletterMutations';
import { showToast } from '@/lib/shared/stores/toastStore';

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
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap; 
  justify-content: flex-start;

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
  flex-grow: 1;

  @media (min-width: 768px) {
    flex-grow: 0;
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

  const [isLogoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const [isDeactivateConfirmOpen, setDeactivateConfirmOpen] = useState(false);
  const [isUnsubscribeConfirmOpen, setUnsubscribeConfirmOpen] = useState(false);

  const deactivateAccountMutation = useDeactivateAccountMutation({
    onSuccess: () => {
      showToast('Deactivation request sent successfully.', 'success');
      logout();
      navigate('/login');
    },
    onError: (error) => {
      console.error('Deactivation failed', error);
    },
  });

  const unsubscribeMutation = useUnsubscribeFromNewsletterMutation({
    onSuccess: () => {
      showToast('You have been unsubscribed from the newsletter.', 'success');
    },
    onError: (error) => {
      console.error('Unsubscribe failed', error);
    },
  });

  const handleDeactivateClick = () => {
    setDeactivateConfirmOpen(true);
  };

  const handleUnsubscribeClick = () => {
    setUnsubscribeConfirmOpen(true);
  };

  const handleLogoutClick = () => {
    setLogoutConfirmOpen(true);
  };

  const confirmDeactivate = () => {
    deactivateAccountMutation.mutate();
    setDeactivateConfirmOpen(false);
  };

  const confirmUnsubscribe = () => {
    if (user?.email) {
      unsubscribeMutation.mutate({ email: user.email });
    } else {
      showToast('User email not found.', 'error');
    }
    setUnsubscribeConfirmOpen(false);
  };

  const confirmLogout = () => {
    logout();
    navigate('/login');
    setLogoutConfirmOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Title>Profile</Title>
        <ActionsContainer>
          <ActionButton onClick={handleDeactivateClick}>Deactivate Account</ActionButton>
          <ActionButton onClick={handleUnsubscribeClick}>Unsubscribe Newsletter</ActionButton>
          <ActionButton className="edit" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </ActionButton>
          <ActionButton className="logout" onClick={handleLogoutClick}>
            Logout
          </ActionButton>
        </ActionsContainer>
      </HeaderWrapper>

      <ConfirmDialog
        isOpen={isLogoutConfirmOpen}
        onClose={() => setLogoutConfirmOpen(false)}
        onConfirm={confirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out of your account?"
        confirmText="Logout"
      />
      <ConfirmDialog
        isOpen={isDeactivateConfirmOpen}
        onClose={() => setDeactivateConfirmOpen(false)}
        onConfirm={confirmDeactivate}
        title="Confirm Deactivation"
        message="Are you sure you want to deactivate your account? This action cannot be undone."
        confirmText="Deactivate"
      />
      <ConfirmDialog
        isOpen={isUnsubscribeConfirmOpen}
        onClose={() => setUnsubscribeConfirmOpen(false)}
        onConfirm={confirmUnsubscribe}
        title="Confirm Unsubscribe"
        message="Are you sure you want to unsubscribe from our newsletter?"
        confirmText="Unsubscribe"
      />
    </>
  );
};