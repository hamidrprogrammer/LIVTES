/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetOrderSaleDetailQuery, useGeneratePaymentLinkMutation } from '../hooks/useOrderQueries';
import * as S from './OrderDetailPage.styles';
import { FiArrowLeft, FiRefreshCw, FiDownload, FiCreditCard } from 'react-icons/fi';
import { format } from 'date-fns';
import AdyenDropIn from '../../../lib/shared/components/adyen';
import { ProductListItem } from './ProductListItem';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useGetConfigDataQuery } from '@/features/settings/hooks/useSettingsQueries';
import { showToast } from '@/lib/shared/stores/toastStore';
import { useCartStore } from '@/features/cart/store/cartStore';

interface OrderOrderDetailProps {
  orderId: number;
  onBack: () => void;
}
export const OrderDetailPage: React.FC<OrderOrderDetailProps> = ({onBack,orderId}) => {
  
    const navigate = useNavigate();
    const { data} = useGetConfigDataQuery({ countryId:"15" });
    const [showAdyen, setShowAdyen] = useState<boolean>(false);
    const [generateLinkResponse, setGenerateLinkResponse] = useState<any>(null);

    const { data: response, isLoading, isError, error, refetch } = useGetOrderSaleDetailQuery(orderId!);
    const generatePaymentLinkMutation = useGeneratePaymentLinkMutation();
    const order = response?.data;
    const { addItem, addItemSub } = useCartStore(); 

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        });
    }, []);

    const handleGenerateLink = () => {
        if (!orderId) return;
        generatePaymentLinkMutation.mutate(orderId, {
            onSuccess: (res) => {
                const responseData = res.data;
                setGenerateLinkResponse(responseData);
                if (responseData?.session_data) setShowAdyen(true);
            },
            onError: (err) =>showToast(`Could not generate payment link: ${err.message}`,'error'),
        });
    };

   const handleBuyAgain = () => {
        if (!order || !order.orderSalePositions) {
            showToast('No items found to buy again.', 'error'); //
            return;
        }

        let itemsAddedCount = 0;
        order.orderSalePositions.forEach(pos => {
            // اطمینان از اینکه آیتم یک محصول است و نه مثلاً هزینه حمل و نقل یا مالیات
            if (pos.productVariation) { 
                const product = pos.productVariation;
                const quantity = String(pos.quantity); // تعداد را به string تبدیل می‌کنیم

                // بررسی می‌کنیم که آیا محصول اشتراکی است یا خیر
                if (Array.isArray(product.subscriptionPrices) && product.subscriptionPrices.length > 0) {
                    addItemSub(product, quantity); // اضافه کردن محصول اشتراکی
                } else {
                    addItem(product, quantity); // اضافه کردن محصول معمولی
                }
                itemsAddedCount++;
            }
        });

        if (itemsAddedCount > 0) {
            showToast(`Added ${itemsAddedCount} item(s) to your cart!`, 'success'); //
            navigate('/basket'); // انتقال به صفحه سبد خرید پس از افزودن آیتم‌ها
        } else {
            showToast('No products were added to the cart.', 'info'); //
        }
    };
    
    // A more user-friendly loading/error state
    if (isLoading) return <S.StatusMessage>Loading order details...</S.StatusMessage>;
    if (isError) return <S.StatusMessage>Error loading order: {error?.message}</S.StatusMessage>;
    if (!order) return <S.StatusMessage>Order not found.</S.StatusMessage>;

    const currencyFormat = (value: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: order.currency.iso3 }).format(value);
    const products = order.orderSalePositions.filter(p => p.productVariation && p.order_position_type_id !== 3);
    const shipping = order.orderSalePositions.find(p => p.description === "Shipping");
    const duty = order.orderSalePositions.find(p => p.description?.includes("Duties"));
    const tax = order.orderSalePositions.find(p => p.description?.includes("VAT"));
  const hasTax = order?.deliveryContactGroup?.country?.iso2 === 'US'
  const countryId = order?.deliveryContactGroup?.country?.id;
    

    return (
        <S.PageWrapper>
            <S.Header data-aos="fade-down">
                <S.HeaderContent>
                    <S.BackButton onClick={() => onBack()}>
                        <FiArrowLeft />
                        <span>Back</span>
                    </S.BackButton>
                    <S.HeaderTitle>Order Details</S.HeaderTitle>
                </S.HeaderContent>
                <S.ActionsContainer>
                    {/* {order?.invoice_link && (
                        <a href={`https://api.lumivitaeglobal.com${order.invoice_link}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <S.SecondaryActionButton><FiDownload /> Download Invoice</S.SecondaryActionButton>
                        </a>
                    )} */}
                </S.ActionsContainer>
            </S.Header>

            <S.SummaryGrid data-aos="fade-up">
                <S.SummaryItem>
                    <S.SummaryLabel>Order ID</S.SummaryLabel>
                    <S.SummaryValue>#{orderId}</S.SummaryValue>
                </S.SummaryItem>
                <S.SummaryItem>
                    <S.SummaryLabel>Issued On</S.SummaryLabel>
                    <S.SummaryValue>{format(new Date(order.order_date), 'PPP')}</S.SummaryValue>
                </S.SummaryItem>
                <S.SummaryItem>
                    <S.SummaryLabel>Status</S.SummaryLabel>
                    <S.SummaryValue className="status" style={{ color: order.orderStatus.color ?? '#000' }}>
                        {order.orderStatus.name}
                    </S.SummaryValue>
                </S.SummaryItem>
                <S.SummaryItem>
                    <S.SummaryLabel>Paid</S.SummaryLabel>
                    <S.SummaryValue>{currencyFormat(order.total_payment)}</S.SummaryValue>
                </S.SummaryItem>
                <S.SummaryItem>
                    <S.SummaryLabel>Pending</S.SummaryLabel>
                    <S.SummaryValue>{currencyFormat(order.total_pending)}</S.SummaryValue>
                </S.SummaryItem>
            </S.SummaryGrid>

            <S.MainGrid>
                <S.LeftColumn>
                    <S.Card data-aos="fade-up">
                        <S.CardTitle>Products ({products.length})</S.CardTitle>
                        <S.ProductList>
                            {products.map(item => <ProductListItem key={item.id} item={item} currencyIso={order.currency.iso3} />)}
                        </S.ProductList>
                    </S.Card>
                    <S.AddressGrid>
                        <S.Card data-aos="fade-up" data-aos-delay="100">
                            <S.CardTitle>Billing Address</S.CardTitle>
                            <S.AddressDetails dangerouslySetInnerHTML={{ __html: order.invoiceContactGroup.address?.address_complete ?? '' }} />
                        </S.Card>
                        <S.Card data-aos="fade-up" data-aos-delay="200">
                            <S.CardTitle>Delivery Address</S.CardTitle>
                            <S.AddressDetails dangerouslySetInnerHTML={{ __html: order.deliveryContactGroup.address?.address_complete ?? '' }} />
                        </S.Card>
                    </S.AddressGrid>
                </S.LeftColumn>
                
                <S.RightColumn>
                    <S.Card data-aos="fade-left" data-aos-delay="300">
                        <S.CardTitle>Order Summary</S.CardTitle>
                        <S.PriceDetails>
                            <S.PriceRow><span>Products Net</span> <span>{currencyFormat(order.product_variations_net_value)}</span></S.PriceRow>
                            <S.PriceRow><span>{hasTax?"Product Tax":"Product VAT"}</span> <span>{currencyFormat(order.product_variations_vat_value)}</span></S.PriceRow>
                            {tax && <S.PriceRow><span>{tax.description}</span> <span>{currencyFormat(tax.gross_amount)}</span></S.PriceRow>}
                            {duty && <S.PriceRow><span>{duty.description}</span> <span>{currencyFormat(duty.gross_amount)}</span></S.PriceRow>}
                             {shipping && <S.PriceRow><span>Sub Total</span> <span>{currencyFormat(order.product_variations_net_value)}</span></S.PriceRow>}

                            {shipping && <S.PriceRow><span>Shipping</span> <span>{currencyFormat(order.gross_shipping_cost)}</span></S.PriceRow>}
                        </S.PriceDetails>

                        <S.TotalRow>
                            <span>Total Price</span>
                            <span>{currencyFormat(order.total_gross_amount)}</span>
                         
                            
                        </S.TotalRow>
                                                     <h4>{ !hasTax?"*inkl. ges. MwSt.": "*Inc Tax"} &nbsp;({data?.data?.default_vat}%)</h4>

                        <S.SidebarActions>
                            {order.orderStatus.id === 3 && order.paymentMethod?.is_link_generatable && !showAdyen && (
                                <S.PrimaryActionButton className="pay" onClick={handleGenerateLink} disabled={generatePaymentLinkMutation.isPending}>
                                    <FiCreditCard /> {generatePaymentLinkMutation.isPending ? 'Generating...' : 'Pay Now'}
                                </S.PrimaryActionButton>
                            )}
                            <S.PrimaryActionButton className="buy-again" onClick={handleBuyAgain}>
                                <FiRefreshCw /> Buy Again
                            </S.PrimaryActionButton>
                        </S.SidebarActions>

                        {showAdyen && generateLinkResponse && (
                            <S.AdyenWrapper>
                                <S.CardTitle>Complete Your Payment</S.CardTitle>
                                <AdyenDropIn
                                    clientKey={generateLinkResponse?.client_key}
                                    id={generateLinkResponse?.id}
                                    session={generateLinkResponse?.session_data}
                                    testMode={generateLinkResponse?.test_mode}
                                    onCallBack={() => { refetch(); /* Refresh data after payment */ }}
                                />
                            </S.AdyenWrapper>
                        )}
                    </S.Card>
                </S.RightColumn>
            </S.MainGrid>
        </S.PageWrapper>
    );
};