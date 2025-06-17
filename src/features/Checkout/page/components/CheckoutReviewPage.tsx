/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import * as S from './CheckoutReviewPage.styles';
import { useChangeInvoiceContactGroupMutation, useGetUserProfileQuery } from '@/features/user/hooks/useUserQueries';
import { useCartStore } from '@/features/cart/store/cartStore';
import { OrderSummary } from './OrderSummary';
import { useCreateOrderFromBasketMutation } from '../../hooks/useCheckoutMutations';
import type { CreateOrderFromBasketPayload } from '@/core/types/api/checkout';
import type { UserInvoiceContactGroup } from '@/core/types/api/user';
import { useNavigate } from 'react-router-dom';
import { AddressSelectionModal } from '@/lib/shared/components/AddressSelectionModal/AddressSelectionModal';
import { LoginPrompt } from '@/lib/shared/components/LoginPrompt/LoginPrompt';
import { useGetContactGroupAddress, useListContactGroupsQuery } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { ContactGroupDetailResponse, ListContactGroupsParams } from '@/core/types/api/contactGroup';
import { useSettingsStore } from '@/features/settings/stores/settingsStore';
import AdyenDropIn from '@/lib/shared/components/adyen';
import { NavbarProduct } from '@/lib/shared/layouts/NavbarWeb/NavbarProduct';
import { useListProductVariationsQuery } from '@/features/shop/hooks/useProductQueries';
import { ListProductVariationsParams } from '@/core/types/api/shop';
import { ProductUnavailableDialog } from './ProductUnavailableDialog';
import { set } from 'date-fns';

// Utility to find address by ID safely
const findAddressById = (
  id: number | null,
  addresses: UserInvoiceContactGroup[]
): UserInvoiceContactGroup | null => {
  if (!id) return null;
  return addresses.find((addr) => addr.id === id) || null;
};

export const CheckoutReviewPage: React.FC = () => {
  const navigate = useNavigate();

  // 1. Fetch user profile
  const { data: userProfileData, isLoading: isUserLoading } = useGetUserProfileQuery({
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
  const userProfile = userProfileData?.data;
  const [clientKey, setClientKey] = useState<string | undefined>('2')
  const [session, setSession] = useState<string | undefined>('')
  const [testMode, setTestMode] = useState<boolean>(true)
    const [idAyden, setIdAyden] = useState<string >('')
    const [isHide, setIshide] = useState<boolean >(false)

  // 2. Extract invoice contact group ID safely to pass to address query hook
  const invoiceContactGroupId = userProfile?.invoiceContactGroup?.id ?? null;
  const [selectedBillingAddressId, setSelectedBillingAddressId] = useState<number | null>(null);
  const [selectedDeliveryAddressId, setSelectedDeliveryAddressId] = useState<number | null>(null);
  const [isBillingModalOpen, setBillingModalOpen] = useState<boolean>(false);
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState<boolean>(false);
  // 3. Fetch addresses using the invoiceContactGroupId
  // Hook called unconditionally at top-level
  const { data: contactGroupAddressesData, isLoading: isAddressLoading } = useGetContactGroupAddress(invoiceContactGroupId as number, {
    // enabled: !!invoiceContactGroupId,
  });
const listParams = useMemo((): ListContactGroupsParams => ({
    page: 1,
    per_page: 12,
    'orderBy[id]': 'DESC',
    isArchive: false,
  }), []);
 
  // 4. Extract all addresses or empty array
    const { data, isLoading, isError, error } = useListContactGroupsQuery(listParams);




  // 5. Local state for selected billing and delivery addresses


const selectedBillingAddress = useMemo(() => {
  return data?.data?.find(addr => addr.id === selectedBillingAddressId) ?? null;
}, [selectedBillingAddressId, data]);

const selectedDeliveryAddress = useMemo(() => {
  return data?.data.find(addr => addr.id === selectedDeliveryAddressId) ?? null;
}, [selectedDeliveryAddressId, data]);
 const listParamsVariations = useMemo((): ListProductVariationsParams => ({
    page: 1,
    per_page: 12,
    isArchive: false,
      deliveryContactGroupId: selectedDeliveryAddressId?.toString(),
      countryId: selectedDeliveryAddress?.country?.id?.toString(),
  }), []);
const { data: updatedVariationsData, isSuccess } = useListProductVariationsQuery(
    {
      
      countryId:selectedDeliveryAddress?.country?.id?.toString(),
      deliveryContactGroupId: selectedDeliveryAddressId?.toString()??"0",
      isArchive: false,
    },
    {
      staleTime: 300000, // Cache for 5 minutes
      refetchOnWindowFocus: false,
    }
  );
    useEffect(() => {
    if (isSuccess) {

          if ( cartItems.length > 0) {
      const availableVariationIds = updatedVariationsData?.data?.map(v => v.id) ?? [];
      const allItemsAvailable = cartItems.every(item => availableVariationIds.includes(item.id));

      if (!allItemsAvailable) {
        console.log("One or more products are unavailable in the selected country. Opening dialog.");
        setProductUnavailableDialogOpen(true);
      } else if (updatedVariationsData?.data) {
        // Also update items with potentially new prices/taxes for the new location
        // updateItems(productVariationsData.data);
      }
    }
    }
  }, [isSuccess, updatedVariationsData]);
const { mutate } = useChangeInvoiceContactGroupMutation({
    onError: error => {
      console.error('Failed to change invoice contact group:', error.message);
    },
  });
    const [isProductUnavailableDialogOpen, setProductUnavailableDialogOpen] = useState(false);



   const handleClearCartAndRedirect = () => {
    clearCart();
    navigate('/');
  };
const onHandleChangeInvoice = (invoice_contact_group_id: number, event?: React.MouseEvent) => {
  if(event) event.preventDefault();
  mutate(
    { invoice_contact_group_id },
    {
      onSuccess: () => {
        setSelectedBillingAddressId(invoice_contact_group_id);
        setBillingModalOpen(false);
          const selectedAddress = data?.data?.find(addr => addr.id === invoice_contact_group_id);
    useSettingsStore.getState().setSelectedCountryId(selectedAddress?.country?.id??52);

      },
    }
  );
};

const onHandleChangeDelivery = (delivery_contact_group_id: number) => {
  setSelectedDeliveryAddressId(delivery_contact_group_id);
  setDeliveryModalOpen(false);
};

  // 6. Initialize default selected addresses when userProfile or addresses change
  useEffect(() => {
    if (userProfile && data?.data) {
      // Use user's default invoice_contact_group_id or fallback to first address ID
      const defaultId =
        userProfile.invoice_contact_group_id ?? data?.data[0]?.id ?? null;

      setSelectedBillingAddressId(defaultId);
      setSelectedDeliveryAddressId(defaultId);
    }
  }, [userProfile, data]);

  // 7. Get cart items from store
  const { items: cartItems, clearCart } = useCartStore();
//  useEffect(() => {
//   console.log('==============variationsAreFetched======================');
//   console.log(productVariationsData);
//   console.log('==============variationsAreFetched======================');
//     if (variationsAreFetched && cartItems.length > 0) {
//       const availableVariationIds = productVariationsData?.data?.map(v => v.id) ?? [];
//       const allItemsAvailable = cartItems.every(item => availableVariationIds.includes(item.id));

//       if (!allItemsAvailable) {
//         console.log("One or more products are unavailable in the selected country. Opening dialog.");
//         setProductUnavailableDialogOpen(true);
//       } else if (productVariationsData?.data) {
//         // Also update items with potentially new prices/taxes for the new location
//         // updateItems(productVariationsData.data);
//       }
//     }
//  }, [isSuccess, productVariationsData, cartItems]);
  // 8. Mutation hook to create order
  const { mutate: createOrder, isPending: isCreatingOrder } = useCreateOrderFromBasketMutation({
    onSuccess: (response) => {
        setClientKey(response?.data?.client_key)
                setTestMode(response?.data?.test_mode)
                setSession(response?.data?.session_data)
                setIdAyden(response?.data?.id)
               
    },
    onError: (error) => {
    },
  });

  // 9. Handler for checkout button, wrapped in useCallback for stable reference
  const handleCheckout = useCallback(() => {
    if(isCreatingOrder){
      setIshide(true)
    }
    if (isCreatingOrder) return;

    if (!selectedBillingAddressId || !selectedDeliveryAddressId) {
      alert('Please select billing and delivery addresses.');
      return;
    }

    const payload: CreateOrderFromBasketPayload = {
      invoice_contact_group_id: selectedBillingAddressId,
      delivery_contact_group_id: selectedDeliveryAddressId,
      payment_method_id: 31, // Using the ID from your cURL command
      description: "",
      wallet_coin_amount: 0,
      is_change_sponsor: false,
      data: {},
    };

    createOrder(payload);
  }, [selectedBillingAddressId, selectedDeliveryAddressId, createOrder, isCreatingOrder]);


  // 10. Show loading or login prompt if needed
  if (isUserLoading || isAddressLoading) return <p>Loading Your Information...</p>;
  if (!userProfile) return <LoginPrompt />;

const stripHtmlTags = (htmlString: string): string => {
  return htmlString.replace(/<[^>]*>/g, '');
};
  return (
    <>
      <NavbarProduct/>
      <S.CheckoutPageWrapper className="Checkout">
        <S.MainContent>
          <S.AddressRow>
            <S.AddressCard>
              <S.CardTitle>Billing Address</S.CardTitle>
              {selectedBillingAddress ? (
                <S.AddressDetails >
                  <span>{selectedBillingAddress.full_name}</span>
  {                stripHtmlTags(selectedBillingAddress.address?.address_complete)} <br />                  <span>
                    {selectedBillingAddress.address?.postal_code} {selectedBillingAddress.address?.city}
                  </span>
                  <span>{selectedBillingAddress.country?.name}</span>
                </S.AddressDetails>
              ) : (
                <p>No billing address selected.</p>
              )}
              <S.ChangeAddressButton onClick={() => setBillingModalOpen(true)}>
              <S.EditIcon /> {selectedBillingAddress?"Choose Another Address":"Select Billing Address"}

              </S.ChangeAddressButton>
            </S.AddressCard>

            <S.AddressCard>
              <S.CardTitle>Delivery Address</S.CardTitle>
              {selectedDeliveryAddress ? (
                <S.AddressDetails>
                  {selectedDeliveryAddress.title} <br />
                     {stripHtmlTags(selectedDeliveryAddress.address?.address_complete)} <br />
                    {selectedDeliveryAddress?.address?.postal_code} {selectedDeliveryAddress?.address?.city} <br />
                  {selectedDeliveryAddress?.country?.name}
                </S.AddressDetails>
              ) : (
                <p>No delivery address selected.</p>
              )}
              <S.ChangeAddressButton onClick={() => setDeliveryModalOpen(true)}>
                <S.EditIcon /> {selectedDeliveryAddress?"Choose Another Address":"Select Delivery Address"}
              </S.ChangeAddressButton>
            </S.AddressCard>
          </S.AddressRow>

          <S.ShoppingCartSection>
            <S.SectionTitle>Your Shopping Cart</S.SectionTitle>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <S.CartItemCard key={item.id}>
                  <S.CartItemImage
                    src={`https://imagedelivery.net/27K6Yc6t29u6bZ_lbtodBw/${item.productVariationFiles[0]?.content_hash}/public`}
                    alt={item.name}
                  />
                  <S.CartItemInfo>
                    <S.CartItemName>{item.name}</S.CartItemName>
                    <S.CartItemArticle>Article Number: {item.number}</S.CartItemArticle>
                    <S.CartItemQuantity>Quantity: {item.quantity}</S.CartItemQuantity>
                  </S.CartItemInfo>
                  {Array.isArray(item.subscriptionPrices) && item.subscriptionPrices.length > 0?
                  <>
                                <S.CartItemPrice>{item?.subscriptionPrices[0]?.interval_days} Days </S.CartItemPrice>
                  <S.CartItemPrice>{item?.subscriptionPrices[0]?.gross_value_after_discount_string }</S.CartItemPrice></>:
                  <S.CartItemPrice>{item.sale_price.gross_value_after_discount_string}</S.CartItemPrice>
}
                </S.CartItemCard>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </S.ShoppingCartSection>
        </S.MainContent>

        <S.Sidebar>
            <AdyenDropIn
                        clientKey={clientKey}
                        testMode={testMode}
                        id={idAyden}
                        session={session}
                        onCallBack={() => {
                         clearCart();
                         navigate('/account/orders');
                        }}
                      />
                      <div style={{height:33}}/>
        <OrderSummary 
          onCheckout={handleCheckout} 
          isLoading={isCreatingOrder}
          isHide={isHide}
          deliveryContactGroup={selectedDeliveryAddress}

          deliveryContactGroupId={selectedDeliveryAddressId}
          countryId={selectedDeliveryAddress?.country?.id??0}/>
      
        </S.Sidebar>
      </S.CheckoutPageWrapper>

      {/* Address Selection Modals */}
      <AddressSelectionModal
        isOpen={isBillingModalOpen}
        onClose={() => setBillingModalOpen(false)}
        addresses={data?.data ?? []}
        selectedAddressId={selectedBillingAddressId}
        onSelectAddress={(invoice_contact_group_id, event) => {
            if (event) event.preventDefault();
            onHandleChangeInvoice(invoice_contact_group_id);
        }}
        title="Select Billing Address"
      />
      <AddressSelectionModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setDeliveryModalOpen(false)}
        addresses={data?.data ?? []}
        selectedAddressId={selectedDeliveryAddressId}
        onSelectAddress={(delivery_contact_group_id, event) => {
            if(event) event.preventDefault();
            onHandleChangeDelivery(delivery_contact_group_id);
        }}
        title="Select Delivery Address"
      />
       <ProductUnavailableDialog
        isOpen={isProductUnavailableDialogOpen}
        onConfirm={handleClearCartAndRedirect}
        productVariationsData={updatedVariationsData}
        />
      
    </>
  );
};

export default CheckoutReviewPage;