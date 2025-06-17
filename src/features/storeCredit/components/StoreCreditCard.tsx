// ge/new project/features/storeCredit/components/StoreCreditCard.tsx
import React from 'react';
import * as S from './StoreCreditCard.styles';
import { Coupon } from '@/core/types/api/coupon';

interface StoreCreditCardProps {
  credit: Coupon;
}

const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

export const StoreCreditCard: React.FC<StoreCreditCardProps> = ({ credit }) => {
  return (
    <S.CardWrapper data-aos="fade-up">
      <S.CardHeader>
        <S.MainInfo>
            <S.Name>{credit.name}</S.Name>
            <S.Amount>€{credit.amount.toFixed(2)}</S.Amount>
        </S.MainInfo>
        <S.Badge isActive={credit.is_active}>
          {credit.is_active ? 'Used' : 'Available'}
        </S.Badge>
      </S.CardHeader>
      <S.InfoGrid>
        <S.InfoBlock>
          <S.Label>Code</S.Label>
          <S.Value>{credit.couponCodes[0].code}</S.Value>
        </S.InfoBlock>
         <S.InfoBlock>
          <S.Label>ID</S.Label>
          <S.Value>#{credit.id}</S.Value>
        </S.InfoBlock>
        <S.InfoBlock>
          <S.Label>Issued On</S.Label>
          <S.Value>{formatDate(credit.release_date)}</S.Value>
        </S.InfoBlock>
        <S.InfoBlock>
          <S.Label>Expires On</S.Label>
          <S.Value>{formatDate(credit.available_until)}</S.Value>
        </S.InfoBlock>
      </S.InfoGrid>
    </S.CardWrapper>
  );
};