// new project/features/Checkout/page/components/CheckoutReviewPage.tsx
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import * as S from './CheckoutReviewPage.styles';
import { useChangeInvoiceContactGroupMutation, useGetUserProfileQuery } from '@/features/user/hooks/useUserQueries';
import { OrderSummary } from './OrderSummary';
import { useCreateOrderFromBasketMutation } from '../../hooks/useCheckoutMutations';
import type { CreateOrderFromBasketPayload } from '@/core/types/api/checkout';
import type { UserInvoiceContactGroup } from '@/core/types/api/user';
import { useNavigate } from 'react-router-dom';
import { AddressSelectionModal } from '@/lib/shared/components/AddressSelectionModal/AddressSelectionModal';
import { LoginPrompt } from '@/lib/shared/components/LoginPrompt/LoginPrompt';
import { useGetContactGroupAddress, useListContactGroupsQuery } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { ContactGroupDetailResponse, ListContactGroupsParams, ContactGroup } from '@/core/types/api/contactGroup'; // Import ContactGroup type
import { AddressFormModal } from '@/features/contactGroups/components/addresses/AddressFormModal'; // Import AddressFormModal
import { useSettingsStore } from '@/features/settings/stores/settingsStore';
import AdyenDropIn from '@/lib/shared/components/adyen';
import { NavbarProduct } from '@/lib/shared/layouts/NavbarWeb/NavbarProduct';
import { useListProductVariationsQuery } from '@/features/shop/hooks/useProductQueries';
import { ListProductVariationsParams } from '@/core/types/api/shop';
import { ProductUnavailableDialog } from './ProductUnavailableDialog';
import { set } from 'date-fns';
import { useSetCouponMutation } from '@/features/coupons/hooks/useCouponQueries'; // Import the new hook
import { showToast } from '@/lib/shared/stores/toastStore'; // Import showToast for feedback
import { ApiError } from '@/core/httpClient/httpClient'; // Import ApiError for type checking
import { useQueryClient } from '@tanstack/react-query'; // Import useQueryClient
import { useCouponStore } from '@/features/coupons/stores/couponStore'; // Import the new coupon store
import { useCartStore } from '@/features/cart/store/cartStore';


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
  const queryClient = useQueryClient(); // Initialize useQueryClient
  const { setAppliedCoupon, clearAppliedCoupon } = useCouponStore(); // Get setters from coupon store

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

  // New state variables for the additional inputs
  const [storeCreditCode, setStoreCreditCode] = useState<string>('');
  const [vatNumber, setVatNumber] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  // const [isApplyingStoreCredit, setIsApplyingStoreCredit] = useState(false); // State for the "Set" button loading - removed, using mutation isPending

  // 2. Extract invoice contact group ID safely to pass to address query hook
  const invoiceContactGroupId = userProfile?.invoiceContactGroup?.id ?? null;
  const [selectedBillingAddressId, setSelectedBillingAddressId] = useState<number | null>(null);
  const [selectedDeliveryAddressId, setSelectedDeliveryAddressId] = useState<number | null>(null);
  const [isBillingModalOpen, setBillingModalOpen] = useState<boolean>(false);
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState<boolean>(false);

  // State for Add/Edit Address Modal
  const [isAddressFormModalOpen, setIsAddressFormModalOpen] = useState<boolean>(false);
  const [addressToEdit, setAddressToEdit] = useState<ContactGroup | null>(null); // To store address data for editing

  // 3. Fetch addresses using the invoiceContactGroupId
  // Hook called unconditionally at top-level
  const { data: contactGroupAddressesData, isLoading: isAddressLoading, refetch: refetchAddresses } = useListContactGroupsQuery({ // Changed to useListContactGroupsQuery
    page: 1, // Assuming you want to fetch all or a relevant subset
    per_page: 100, // Fetch enough addresses
    isArchive: false,
  });

  // 4. Extract all addresses or empty array
  const allAddresses: ContactGroup[] = useMemo(() => contactGroupAddressesData?.data || [], [contactGroupAddressesData]);

// Re-fetch product variations when delivery location or items change
const selectedBillingAddress = useMemo(() => {
  return allAddresses?.find(addr => addr.id === selectedBillingAddressId) ?? null;
}, [selectedBillingAddressId, allAddresses]);

const selectedDeliveryAddress = useMemo(() => {
  return allAddresses?.find(addr => addr.id === selectedDeliveryAddressId) ?? null;
}, [selectedDeliveryAddressId, allAddresses]);
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
          const selectedAddress = allAddresses?.find(addr => addr.id === invoice_contact_group_id);
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
    if (userProfile && allAddresses.length > 0) {
      const defaultId =
        userProfile.invoice_contact_group_id ?? allAddresses[0]?.id ?? null;

      setSelectedBillingAddressId(defaultId);
      setSelectedDeliveryAddressId(defaultId);
    }
  }, [userProfile, allAddresses]);

  // 7. Get cart items from store
  const { items: cartItems, clearCart } = useCartStore();
//  useEffect(() => {
//    
//    
//    
//     if (variationsAreFetched && cartItems.length > 0) {
//       const availableVariationIds = productVariationsData?.data?.map(v => v.id) ?? [];
//       const allItemsAvailable = cartItems.every(item => availableVariationIds.includes(item.id));

//       if (!allItemsAvailable) {
//          
//         setProductUnavailableDialogOpen(true);
//       } else if (productVariationsData?.data) {
//         // Also update items with potentially new prices/taxes for the new location
//         // updateItems(productVariationsData.data);
//       }
//     }
//  }, [isSuccess, updatedVariationsData, cartItems]); // Added cartItems to dependency array
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

  // Hook to set coupon
  const { mutate: setCouponMutation, isPending: isApplyingStoreCredit } = useSetCouponMutation({ //
    onSuccess: (data) => {
      // Handle success, e.g., show a success toast
      showToast(data.message || 'Store credit applied successfully!', 'success'); //
      setAppliedCoupon(data.data); // Store coupon details in Zustand
      // Invalidate queries that might reflect the cart/order total to show the discount.
      // Adjust query keys based on your actual data fetching for cart summary/order totals.
      queryClient.invalidateQueries({ queryKey: ['cart', 'summary'] }); //
      queryClient.invalidateQueries({ queryKey: ['checkout', 'orderSummary'] }); // Example if you have a specific query for order summary
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] }); // If user profile also shows coupon info
    },
    onError: (error) => {
      // Handle error, e.g., show an error toast
      let errorMessage = 'Failed to apply store credit.';
      if (error instanceof ApiError && error.errors) { //
        // Attempt to extract a more specific error message from the API error response
        const apiError = error.errors as any;
        if (apiError.data && apiError.data.message) { //
          errorMessage = apiError.data.message; //
        } else if (apiError.code && Array.isArray(apiError.code) && apiError.code.length > 0) { //
          errorMessage = apiError.code[0]; //
        }
      }
      showToast(errorMessage, 'error'); //
      clearAppliedCoupon(); // Clear applied coupon on error
    },
  });

  // Handler for setting store credit
  const handleSetStoreCredit = () => {
    if (!storeCreditCode) {
      showToast('Please enter a store credit code.', 'warning');
      return;
    }
    if (selectedBillingAddressId === null) {
      showToast('Please select a billing address first to apply store credit.', 'warning');
      return;
    }

    setCouponMutation({
      code: storeCreditCode,
      invoice_contact_group_id: selectedBillingAddressId,
    });
  };

  // 9. Handler for checkout button, wrapped in useCallback for stable reference
  const handleCheckout = useCallback(() => {
    if(isCreatingOrder){
      setIshide(true)
    }
    if (isCreatingOrder) return;

    if (!selectedBillingAddressId || !selectedDeliveryAddressId) {
            showToast('Please select billing and delivery addresses.','info')
      
      return;
    }

    const payload: CreateOrderFromBasketPayload = {
      invoice_contact_group_id: selectedBillingAddressId,
      delivery_contact_group_id: selectedDeliveryAddressId,
      payment_method_id: 31, // Using the ID from your cURL command
      description: description, // Pass the description
      wallet_coin_amount: 0,
      is_change_sponsor: false,
      data: {
          vat_number: vatNumber, // Pass the VAT number
      },
    };

    createOrder(payload);
  }, [selectedBillingAddressId, selectedDeliveryAddressId, createOrder, isCreatingOrder, description, vatNumber]);


  // Handler for opening the address form modal to add a new address
  const handleAddNewAddress = () => {
    setAddressToEdit(null); // Clear any existing data for a new address
    setIsAddressFormModalOpen(true);
  };

  // Handler for opening the address form modal to edit an existing address
  const handleEditAddress = (address: ContactGroup) => {
    setAddressToEdit(address);
    setIsAddressFormModalOpen(true);
  };

  // Callback for when the address form modal is closed
  const onAddressFormModalClose = () => {
    setIsAddressFormModalOpen(false);
    setAddressToEdit(null);
    refetchAddresses(); // Refetch addresses to update the list after changes
  };

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
              <div> 
                <S.CardTitle>Billing Address</S.CardTitle>
                {selectedBillingAddress ? (
                  <S.AddressDetails>
                    <span>{selectedBillingAddress.full_name}</span>
                    <span>{stripHtmlTags(selectedBillingAddress.address?.address_complete ?? '')}</span>
                    <span>
                      {selectedBillingAddress.address?.postal_code} {selectedBillingAddress.address?.city}
                    </span>
                    <span>{selectedBillingAddress.country?.name}</span>
                  </S.AddressDetails>
                ) : (
                  <p>No billing address selected.</p>
                )}
              </div>

              {/* نگهدارنده جدید برای دکمه‌ها */}
              <S.ActionsContainer>
                <S.ChangeAddressButton onClick={() => setBillingModalOpen(true)}>
                  {selectedBillingAddress ? "Choose Another" : "Select Address"}
                </S.ChangeAddressButton>
                
                {selectedBillingAddress && (
                  <S.IconButton onClick={() => handleEditAddress(selectedBillingAddress)} title="Edit Address">
                    <S.EditIcon />
                  </S.IconButton>
                )}
                
                <S.IconButton onClick={handleAddNewAddress} title="Add New Address">
                  <S.AddIcon />
                </S.IconButton>
              </S.ActionsContainer>
            </S.AddressCard>

            <S.AddressCard>
              <div> 
                <S.CardTitle>Delivery Address</S.CardTitle>
                {selectedDeliveryAddress ? (
                  <S.AddressDetails>
                    <span>{selectedDeliveryAddress.full_name}</span>
                    <span>{stripHtmlTags(selectedDeliveryAddress.address?.address_complete ?? '')}</span>
                    <span>
                      {selectedDeliveryAddress.address?.postal_code} {selectedDeliveryAddress.address?.city}
                    </span>
                    <span>{selectedDeliveryAddress.country?.name}</span>
                  </S.AddressDetails>
                ) : (
                  <p>No delivery address selected.</p>
                )}
              </div>

              <S.ActionsContainer>
                <S.ChangeAddressButton onClick={() => setDeliveryModalOpen(true)}>
                  {selectedDeliveryAddress ? "Choose Another" : "Select Address"}
                </S.ChangeAddressButton>

                {selectedDeliveryAddress && (
                  <S.IconButton onClick={() => handleEditAddress(selectedDeliveryAddress)} title="Edit Address">
                    <S.EditIcon />
                  </S.IconButton>
                )}

                <S.IconButton onClick={handleAddNewAddress} title="Add New Address">
                  <S.AddIcon />
                </S.IconButton>
              </S.ActionsContainer>
            </S.AddressCard>
          </S.AddressRow>

          {/* New: Additional options section */}
          <S.OptionsSection>
            <S.CardTitle>Additional Options</S.CardTitle>
            
            <S.InputGroup>
              <S.InputLabel htmlFor="storeCreditCode">Use a Store Credit Code</S.InputLabel>
              <S.InputWithButton>
                <S.StyledInput
                  id="storeCreditCode"
                  type="text"
                  value={storeCreditCode}
                  onChange={(e) => setStoreCreditCode(e.target.value)}
                  placeholder="Enter store credit code"
                  disabled={isApplyingStoreCredit}
                />
                <S.SetButton onClick={handleSetStoreCredit} disabled={isApplyingStoreCredit}>
                  {isApplyingStoreCredit ? 'Applying...' : 'Set'}
                </S.SetButton>
              </S.InputWithButton>
            </S.InputGroup>

            <S.InputGroup>
              <S.InputLabel htmlFor="vatNumber">VAT Number (European Union only)</S.InputLabel>
              <S.StyledInput
                id="vatNumber"
                type="text"
                value={vatNumber}
                onChange={(e) => setVatNumber(e.target.value)}
                placeholder="Enter VAT number"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.InputLabel htmlFor="description">Description</S.InputLabel>
              <S.StyledTextArea
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a note or description for your order"
              />
            </S.InputGroup>
          </S.OptionsSection>

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
                  <S.CartItemPrice>{item?.sale_price?.gross_value_after_discount_string}</S.CartItemPrice>
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
        addresses={allAddresses}
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
        addresses={allAddresses}
        selectedAddressId={selectedDeliveryAddressId}
        onSelectAddress={(delivery_contact_group_id, event) => {
            if(event) event.preventDefault();
            onHandleChangeDelivery(delivery_contact_group_id);
        }}
        title="Select Delivery Address"
      />

       {/* New Address Add/Edit Modal */}
       <AddressFormModal
          isOpen={isAddressFormModalOpen}
          onClose={onAddressFormModalClose}
          initialData={addressToEdit}
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