// src/pages/CheckoutPage.tsx

import React, { useEffect } from 'react';
import { PageTitle, TopBar,PageLayout,LeftSection,RightSection, PageContainer } from './components/Layout';
import { ItemList } from './components/ItemList';
import { TopActions } from './components/TopActions';
import { OrderSummary } from './components/OrderSummary';
import { BulkAddBasketPayload } from '@/core/types/api/checkout';
import { useBulkAddBasketMutation } from '../hooks/useCheckoutMutations';
import { useCartStore } from '@/features/cart/store/cartStore';
import { useNavigate } from 'react-router-dom';
import { useListPaymentMethodsQuery } from '@/features/settings/hooks/useSettingsQueries';
import { GetPaymentMethodsParams } from '@/core/types/api/settings';
import { useGetUserProfileQuery } from '@/features/user/hooks/useUserQueries';
import { NavbarProduct } from '@/lib/shared/layouts/NavbarWeb/NavbarProduct';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { useSettingsStore } from '@/features/settings/stores/settingsStore';




const CheckoutPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated); //
    const navigate = useNavigate();
  const selectedCountryId = useSettingsStore((state) => state.selectedCountryId);

    // استفاده از useEffect برای بررسی وضعیت لاگین هنگام بارگذاری کامپوننت
    useEffect(() => {
        // اگر کاربر لاگین نکرده باشد، او را به صفحه لاگین هدایت کن
        if (!isAuthenticated) {
            navigate('/login'); // هدایت به صفحه لاگین
        }
    }, [isAuthenticated, navigate]);
      const { mutate: bulkAdd, isPending: isAdding } = useBulkAddBasketMutation();
            const { mutate: paymentAdd,} = useListPaymentMethodsQuery();
  const { data: userProfileData, isLoading: isUserLoading } = useGetUserProfileQuery({
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
       enabled: isAuthenticated,
  });
  const userProfile = userProfileData?.data;
      
       const items = useCartStore((state) => state.items);
         const clearCart = useCartStore(state => state.clearCart);
       
const nav = useNavigate(); // your 'nav'

     const handleBulkAddClick = () => {
        // This payload matches the --data-raw from your cURL command.
        // You can make these values dynamic as needed.
        const payload: BulkAddBasketPayload = {
            delivery_contact_group_id: 433205,
            items: items.map((item) => ({
                product_variation_id: item.id,
                order_position_type:'Product Variation',
    count: parseInt(item.quantity),
                instead_of_discount:false,
            } ))
            
        };
         
         
         
         bulkAdd(payload, {
        onSuccess: () => {
          const data =userProfile?.baskets?.user;
           const payload: GetPaymentMethodsParams = {
            page:0,
            per_page:50,
            companyCountryId:data?.invoiceContactGroup.country_id,
            companyCurrency:data?.invoiceContactGroup?.country?.currency?.id,
            
        };
          paymentAdd(payload)

            nav('/CheckoutPageReview'); // 🔁 Replace with your target page
        },
        onError: (error) => {
            console.error('Bulk add failed:', error);
            // Optionally show an error message to the user
        },
    });
    };
  return (
    <>
          <NavbarProduct/>
    
   
      <PageContainer>
        <TopBar>
            <PageTitle>Checkout</PageTitle>
            {/* Optional: Add a logo or other elements here */}
        </TopBar>
        <PageLayout>
          <LeftSection>
            <ItemList />
          </LeftSection>
          <RightSection>
            <TopActions items={items} onClearCart={() => {clearCart()}} />
            <OrderSummary 
            isHide={false} 
            deliveryContactGroup={null}
            isLoading={isAdding} 
            onCheckout={function (): void {
           handleBulkAddClick();
          } }  deliveryContactGroupId={0} countryId={selectedCountryId}/>
          </RightSection>
        </PageLayout>
      </PageContainer>
       </>
  );
};

export default CheckoutPage;