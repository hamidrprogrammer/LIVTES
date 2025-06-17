import React, { useEffect } from 'react';
import { useGetOrderSubscriptionQuery } from '../hooks/useOrderQueries';
import * as S from './OrderDetailPage.styles'; // Reusing the same styles
import { FiArrowLeft, FiCreditCard } from 'react-icons/fi';
import { format } from 'date-fns';
import { SubscriptionProductListItem } from './SubscriptionProductListItem'; // Using the new component
import AOS from 'aos';
import 'aos/dist/aos.css';

interface OrderSubscriptionDetailProps {
  subscriptionId: number;
  onBack: () => void;
}

export const OrderSubscriptionDetail: React.FC<OrderSubscriptionDetailProps> = ({ subscriptionId, onBack }) => {
    const { data: response, isLoading, isError, error } = useGetOrderSubscriptionQuery(subscriptionId);

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    const subscription = response?.data;

    if (isLoading) return <S.StatusMessage>Loading Subscription Details...</S.StatusMessage>;
    if (isError) return <S.StatusMessage>Error: {error?.message}</S.StatusMessage>;
    if (!subscription) return <S.StatusMessage>Subscription not found.</S.StatusMessage>;

    const currencyFormat = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: subscription.currency?.iso3 ?? 'EUR' }).format(value);

    return (
        <S.PageWrapper>
            <S.Header data-aos="fade-down">
                <S.HeaderContent>
                    <S.BackButton onClick={onBack}>
                        <FiArrowLeft />
                        <span>Back to Subscriptions</span>
                    </S.BackButton>
                    <S.HeaderTitle>Subscription Details</S.HeaderTitle>
                </S.HeaderContent>
                <S.ActionsContainer>
                    <S.SecondaryActionButton>
                        <FiCreditCard /> Change Payment Method
                    </S.SecondaryActionButton>
                </S.ActionsContainer>
            </S.Header>

            <S.SummaryGrid data-aos="fade-up">
                <S.SummaryItem>
                    <S.SummaryLabel>Subscription ID</S.SummaryLabel>
                    <S.SummaryValue>#{subscription.id}</S.SummaryValue>
                </S.SummaryItem>
                 <S.SummaryItem>
                    <S.SummaryLabel>Number</S.SummaryLabel>
                    <S.SummaryValue>{subscription.number}</S.SummaryValue>
                </S.SummaryItem>
                <S.SummaryItem>
                    <S.SummaryLabel>Issued On</S.SummaryLabel>
                    <S.SummaryValue>{format(new Date(subscription.created_at!), 'PPP')}</S.SummaryValue>
                </S.SummaryItem>
                <S.SummaryItem>
                    <S.SummaryLabel>Status</S.SummaryLabel>
                    <S.SummaryValue className="status" style={{ color: subscription.orderStatus?.color ?? '#000' }}>
                        {subscription.orderStatus?.name ?? 'N/A'}
                    </S.SummaryValue>
                </S.SummaryItem>
            </S.SummaryGrid>

            <S.MainGrid>
                <S.LeftColumn>
                    <S.Card data-aos="fade-up">
                        <S.CardTitle>Product List</S.CardTitle>
                        <S.ProductList>
                           {subscription.positions?.map(item => (
                                <SubscriptionProductListItem key={item.id} item={item??[]} currencyIso={subscription.currency?.iso3 ?? 'EUR'} />
                            ))}
                        </S.ProductList>
                    </S.Card>
                    <S.AddressGrid>
                        <S.Card data-aos="fade-up" data-aos-delay="100">
                            <S.CardTitle>Billing Address</S.CardTitle>
                            <S.AddressDetails dangerouslySetInnerHTML={{ __html: subscription.invoiceContactGroup?.address?.address_complete ?? '' }} />
                        </S.Card>
                        <S.Card data-aos="fade-up" data-aos-delay="200">
                            <S.CardTitle>Delivery Address</S.CardTitle>
                            <S.AddressDetails dangerouslySetInnerHTML={{ __html: subscription.deliveryContactGroup?.address?.address_complete ?? '' }} />
                        </S.Card>
                    </S.AddressGrid>
                </S.LeftColumn>
                
                <S.RightColumn>
                    <S.Card data-aos="fade-left" data-aos-delay="300">
                        <S.CardTitle>Overview</S.CardTitle>
                        <S.PriceDetails>
                            <S.PriceRow><span>Total Products Net Value</span> <span>{currencyFormat(subscription.total_net_amount ?? 0)}</span></S.PriceRow>
                            <S.PriceRow><span>Product Tax</span> <span>{currencyFormat(subscription.total_vat_amount ?? 0)}</span></S.PriceRow>
                            <S.PriceRow><span>Sub Total</span> <span>{currencyFormat(subscription.total_gross_amount ?? 0)}</span></S.PriceRow>
                        </S.PriceDetails>
                        {/* <S.Divider/> */}
                        <S.PriceDetails>
                            <S.PriceRow><span>Shipping</span> <span>{currencyFormat(subscription.gross_shipping_cost ?? 0)}</span></S.PriceRow>
                        </S.PriceDetails>
                        <S.TotalRow>
                            <span>Total Price with Shipping</span>
                            <span>{currencyFormat((subscription.total_gross_amount ?? 0) + (subscription.gross_shipping_cost ?? 0))}</span>
                        </S.TotalRow>
                    </S.Card>
                </S.RightColumn>
            </S.MainGrid>
        </S.PageWrapper>
    );
};