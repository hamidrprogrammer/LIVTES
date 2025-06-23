import React, { useState } from 'react';
import styled from 'styled-components';
import { useChangePasswordMutation, useUpdateUserProfileMutation } from '../../hooks/useUserQueries';
import { showToast } from '@/lib/shared/stores/toastStore';

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr) auto;
    gap: 24px;
    align-items: flex-end;
  }
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 10px 24px;
  height: 42px;
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  width: 100%; // تمام عرض در موبایل

  @media (min-width: 1024px) {
    width: 150px; // عرض ثابت در دسکتاپ
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { mutate: updatePassword, isLoading, error } = useChangePasswordMutation({
    onSuccess: () => {
                        showToast('Password updated successfully!','info')

      setCurrentPassword('');
      setNewPassword('');
      setPasswordConfirmation('');
    },
    onError: (err) => {
                              showToast(`Error: ${err.message}`,'error')

    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== passwordConfirmation) {
                  showToast('New passwords do not match.','info')
      
      return;
    }
    updatePassword({
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: passwordConfirmation,
  
    });
  };

  return (
    <Card>
      <Title>Change Your Password</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
          <Input id="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required />
        </FormGroup>
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </Form>
    </Card>
  );
};