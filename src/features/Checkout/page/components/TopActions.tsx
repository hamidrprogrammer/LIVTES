/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/TopActions.tsx

import { showToast } from '@/lib/shared/stores/toastStore';
import React from 'react';
import styled from 'styled-components';

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: 480px) {
    flex-wrap: wrap; // Allow buttons to wrap onto the next line
    justify-content: center; // Center them when they wrap
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

// In a real app, you would use an icon library like react-icons
const IconPlaceholder = styled.span`
  font-size: 1.2em;
`;
interface TopActionsProps {
  onClearCart: () => void;
items: Array<any>;

}
export const TopActions: React.FC<TopActionsProps> = ({items,onClearCart}) => {
   const onCopy = () => {
    const shopUrl = `${window.location.origin}/cart?products=${items?.map(i => `${i.product.id}:${i.quantity}`)
      .join(',')}`

    navigator.clipboard.writeText(shopUrl)
    showToast( "Cart Link copied to clipboard!", 'success' )
  }
  return (
    <ActionsContainer>
      <ActionButton  onClick={onCopy}>
        <IconPlaceholder>🔗</IconPlaceholder> Direct Share
      </ActionButton>
      <ActionButton  onClick={onClearCart}>
        <IconPlaceholder>🗑️</IconPlaceholder> Discard Cart
      </ActionButton>
    </ActionsContainer>
  );
};