import React from 'react';
import styled, { css } from 'styled-components';
import { OrderSubscription } from '@/core/types/api/order';
import { FiEye, FiXCircle } from 'react-icons/fi';
import { useCancelOrderSubscriptionMutation } from '../hooks/useOrderQueries';
import { showToast } from '@/lib/shared/stores/toastStore';

const CardWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  align-items: center;
  border-left: 5px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }
`;

const InfoBlock = styled.div``;
const Label = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.9rem;
  margin: 0 0 4px 0;
`;
const Value = styled.p`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const StatusBadge = styled.span<{ status?: string }>`
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: capitalize;

  ${({ status= ''  }) => {
    switch (status?.toLowerCase()) {
      case 'subscription':
        return css`
          background-color: #D1FAE5;
          color: #065F46;
        `;
      case 'canceled':
      case 'cancelled':
        return css`
          background-color: #FEE2E2;
          color: #991B1B;
        `;
      default:
        return css`
          background-color: #FEF3C7;
          color: #92400E;
        `;
    }
  }}
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &.view {
    color: ${({ theme }) => theme.colors.primary};
    &:hover { background-color: #E0F2FE; }
  }
  &.cancel {
    color: #DC2626;
    &:hover { background-color: #FEE2E2; }
  }
`;

interface OrderSubscriptionCardProps {
  subscription: OrderSubscription;
  onViewDetails: () => void;
  onCancel: () => void;
}

export const OrderSubscriptionCard: React.FC<OrderSubscriptionCardProps> = ({ subscription, onViewDetails ,onCancel}) => {
  const { id, orderStatus, total_gross_amount, currency, created_at, positions } = subscription;

  // Placeholder for cancel logic
  const handleCancel = () => {
  onCancel();
  };
  
  return (
    <CardWrapper data-aos="fade-up">
      <InfoBlock><Label>Number</Label><Value>{id}</Value></InfoBlock>
      <InfoBlock><Label>Issued on</Label><Value>{new Date(created_at).toLocaleDateString()}</Value></InfoBlock>
      <InfoBlock><Label>Total Price</Label><Value>{total_gross_amount} {currency?.symbol}</Value></InfoBlock>
      <InfoBlock><Label>Status</Label><Value><StatusBadge status={orderStatus.slug}>{orderStatus.slug}</StatusBadge></Value></InfoBlock>
      <ActionsContainer>
        <ActionButton className="view" onClick={onViewDetails}><FiEye/>View Details</ActionButton>
        {orderStatus.slug.toLowerCase() != 'canceled' && 
          <ActionButton className="cancel" onClick={handleCancel}><FiXCircle/>Cancel Order</ActionButton>
        }
      </ActionsContainer>
    </CardWrapper>
  );
};