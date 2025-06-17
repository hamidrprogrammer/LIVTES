// src/components/OrderSummary.tsx

import React from 'react';
import styled, { css } from 'styled-components';
import { Card } from './Layout';
import { CheckoutButton } from './CheckoutButton';
import { usePriceCalculations } from '@/core/hooks/usePriceCalculations'; 
import { useAuthStore } from '@/features/auth/stores/authStore';
import { UserInvoiceContactGroup } from '@/core/types/api/user';
import { useGetConfigDataQuery } from '@/features/settings/hooks/useSettingsQueries';


// NOTE: Other styled-components from the original file that are not listed here remain unchanged.
// For brevity, only modified or new components are shown in full detail.

const SummaryContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SummaryTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  }
`;

const Row = styled.div<{ isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  
  ${({ isTotal, theme }) => isTotal && css`
    font-size: ${theme.typography.fontSizes.lg};
    font-weight: ${theme.typography.fontWeights.bold};
    color: ${theme.colors.primaryDark};
    margin-top: ${theme.spacing.sm};
    padding-top: ${theme.spacing.md};
    border-top: 1px solid ${theme.colors.greyLight};
  `}
  
  @media (max-width: 480px) {
    font-size: ${({ theme, isTotal }) => (isTotal ? theme.typography.fontSizes.md : theme.typography.fontSizes.sm)};
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
`;

const Value = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

const TaxDisclaimer = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const TermsText = styled.p`
  font-size: 12px;
  color: #6B7280;
  line-height: 1.5;
  text-align: center;
  margin-top: 15px;
`;

interface SummaryRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

const SummaryRow: React.FC<SummaryRowProps> = ({ label, value, isTotal = false }) => (
  <Row isTotal={isTotal}>
    <Label>{isTotal ? label : label}</Label>
    <Value>{value}</Value>
  </Row>
);

interface OrderSummaryProps {
  onCheckout: () => void;
  deliveryContactGroup: UserInvoiceContactGroup | null;
  countryId: number | null;
  isLoading: boolean;
  isHide: boolean;
  deliveryContactGroupId: number | null;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ deliveryContactGroup, onCheckout, deliveryContactGroupId, countryId, isLoading, isHide }) => {
  const userProfile = useAuthStore(state => state.user);

  const {
    totalPrice,
    shippingPrice,
    couponPrice,
    totalPayment,
    totalNetPrice,
    totalVat
  } = usePriceCalculations({
    walletBalance: userProfile?.walletBalance ? 0 : 0,
    deliveryContactGroupId: deliveryContactGroupId ?? 0,
    countryId: countryId ?? 0
  });
  const hasTax = deliveryContactGroup?.country?.iso2 === 'US'
  const { data } = useGetConfigDataQuery({ countryId: deliveryContactGroup?.country?.id?.toString() });
  
  return (
    <SummaryContainer>
      <SummaryTitle>Order Overview</SummaryTitle>
      <SummaryRow label="Subtotal" value={totalPrice.string} />
      {deliveryContactGroup ? <SummaryRow label="Shipping" value={shippingPrice.string} />
        : null}

      {couponPrice.number > 0 && (
        <SummaryRow label="Coupon Discount" value={`- ${couponPrice.string}`} />
      )}
      <SummaryRow label="Total Products Net Value" value={totalNetPrice.string} />

      <SummaryRow label="Total Price" value={totalPayment.string} isTotal={true} />
      {deliveryContactGroup ? <TaxDisclaimer>{!hasTax ? "*inkl. ges. MwSt." : "*Inc Tax"} &nbsp;({data?.data?.default_vat}% = {totalVat?.string})</TaxDisclaimer>
        : null}

      {isHide == false ?
        <CheckoutButton onClick={onCheckout} isLoading={isLoading} >Checkout Now</CheckoutButton>
        : null}
      <TermsText>
        By pressing this button you'll agree with
        Term of Conditions, Right of Withdrawal &
        Data protection declaration
      </TermsText>
    </SummaryContainer>
  );
};