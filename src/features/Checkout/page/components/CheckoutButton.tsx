// src/components/CheckoutButton.tsx

import { StyledButton } from '@/features/BottlePage/components/FrequencyIntroSection/FrequencyIntroSection.styles';
import { Loader } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.buttonText};
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.gradientCTAStart} 0%, ${({ theme }) => theme.colors.gradientCTAEnd} 100%);
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  

`;

interface CheckoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ children, onClick, isLoading = false }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={isLoading}>
      {isLoading ? <Loader /> : children}
    </ButtonWrapper>
  );
};