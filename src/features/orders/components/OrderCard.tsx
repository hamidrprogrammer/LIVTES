// ge/new project/features/orders/components/OrderCard.tsx
import React from 'react';
import { OrderSale } from '@/core/types/api/order';
import * as S from './OrderCard.styles';
import { FiEye } from 'react-icons/fi';

interface OrderCardProps {
  order: OrderSale;
    onViewDetails: (id: number) => void;

}

export const OrderCard: React.FC<OrderCardProps> = ({ order ,onViewDetails}) => {
  const formattedDate = new Date(order?.order_date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });
  
  const formattedPrice = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: order.currency?.iso3 ?? 'EUR' // Fallback to EUR
  }).format(order?.total_gross_amount);

  return (
    <S.CardWrapper data-aos="fade-up">
      <S.DetailsGrid>
        <S.InfoBlock>
          <S.Label>Order ID</S.Label>
          <S.Value>#{order.id}</S.Value>
        </S.InfoBlock>

        <S.InfoBlock>
          <S.Label>Issued on</S.Label>
          <S.Value>{formattedDate}</S.Value>
        </S.InfoBlock>

        <S.InfoBlock>
          <S.Label>Total Price</S.Label>
          <S.Value>{formattedPrice}</S.Value>
        </S.InfoBlock>
        
        <S.InfoBlock>
          <S.Label>Status</S.Label>
          <S.Value style={{color: order?.orderStatus?.color ?? '#000'}}>
            {order?.orderStatus?.name}
          </S.Value>
        </S.InfoBlock>

        <S.InfoBlock>
          <S.Label>Payment</S.Label>
          <S.StatusBadge status={order.payment_status ?? ""}>
            {order.payment_status?.replace('_', ' ') ?? 'N/A'}
          </S.StatusBadge>
        </S.InfoBlock>

        <S.Actions>
            <S.ViewDetailsButton to="#" onClick={() => onViewDetails(order.id??0)}>
                <FiEye />
                View Details
            </S.ViewDetailsButton>
        </S.Actions>
      </S.DetailsGrid>
    </S.CardWrapper>
  );
};