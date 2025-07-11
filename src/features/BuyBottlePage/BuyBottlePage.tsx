// src/pages/BuyBottlePage/BuyBottlePage.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useGetProductVariationsQuery } from '../shop/hooks/useProductQueries';
import { useCartStore } from '../cart/store/cartStore';
import { OrderState } from '../../core/types';
import { NavbarProduct } from '../../lib/shared/layouts/NavbarWeb/NavbarProduct';
import Footer from '../../lib/shared/layouts/FooterWeb/FooterWeb';
import { PageHeaderSection } from './components/PageHeaderSection/PageHeaderSection';
import { MemoizedProductInfoPromptsBottle, MemoizedProductInfoPromptsTablet } from './components/ProductInfoPrompts/ProductInfoPrompts';
import { BottleSelection } from './components/BottleSelection/BottleSelection';
import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { BundleOptionsSection } from './components/BundleOptionsSection/BundleOptionsSection';
import { FrequencyOptionsSection } from './components/FrequencyOptionsSection/FrequencyOptionsSection';
import { OrderReview } from './components/OrderReview/OrderReview';
import { WhatsInTheBox } from './components/WhatsInTheBox/WhatsInTheBox';
import { FaqSection } from './components/FaqSection/FaqSection';
import * as S from './BuyBottlePage.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductVariation, Subscription } from '../../core/types/api/shop';
import { useSettingsStore } from '../settings/stores/settingsStore'; // ایمپورت استور تنظیمات
import ColorPicker from '../BuyBottlePageMobile/components/sections/ColorPicker/ColorPicker';
import ScrollToTopButton from '../../lib/shared/components/ScrollToTopButton';
import { showToast } from '@/lib/shared/stores/toastStore';

export const BuyBottlePage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !["1", "10", "12"].includes(id)) {
      navigate('/products-bottle/1');
    }
  }, [id, navigate]);

  // START: 1. خواندن countryId از استور سراسری
  const selectedCountryId = useSettingsStore((state) => state.selectedCountryId);
  // END: 1.

  // START: 2. استفاده از useMemo برای ساخت پارامترها و افزودن selectedCountryId به وابستگی‌ها
  const params = useMemo(() => ({
    countryId: selectedCountryId?.toString() // استفاده از ID سراسری یا یک مقدار پیش‌فرض
  }), [selectedCountryId]); // این هوک با تغییر selectedCountryId دوباره اجرا می‌شود
  // END: 2.

  const { data, isLoading, isError, error } = useGetProductVariationsQuery(id ?? "1", params);
    const { data:dataTablet} = useGetProductVariationsQuery("10", params);

  const addItemSub = useCartStore((state) => state.addItemSub);

  const [currentOrder, setCurrentOrder] = useState<OrderState>({
    selectedBottle: undefined,
    selectedBundle: undefined,
    selectedFrequency: undefined,
  });
  
  const [selectedProduct, setSelectedProduct] = useState<ProductVariation | null>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);

  const handleOrderUpdate = useCallback((orderPart: Partial<OrderState>) => {
    setCurrentOrder((prev) => ({
      ...prev,
      ...orderPart,
    }));
  }, []);

  const handleProductSelect = useCallback((option: ProductVariation) => {
    setSelectedProduct(option);
    setSelectedSubscription(null); 
  }, []);

  const handleFrequencySelect = useCallback((option: Subscription) => {
    setSelectedSubscription(option);
  }, []);

  const memoizedProduct = useMemo(() => selectedProduct, [selectedProduct]);

  const handleAddToBag = () => {
    if (!selectedProduct && !selectedSubscription) {
      showToast("Please select a product bundle.",'info')
      return;
    }
    if(selectedSubscription && selectedProduct){
      const itemToAdd = {
        ...selectedProduct,
        quantity: "1",
       
        subscriptionPrices: [selectedSubscription],
        type: 'Product Variation',
        free_on_first_time: selectedSubscription?.free_on_first_time,


      };
       
       
       
      addItemSub(itemToAdd);
      setSelectedProduct(null);
      setSelectedSubscription(null);
    }
  };

  useEffect(() => {
     
  }, [selectedProduct]);

  if (!id) return <></>;
   
  return (
    <>
      <NavbarProduct />
      <S.PageWrapper>
        {/* The minHeight prop has been removed to allow the container to be flexible. */}
        <S.ContentContainer>
          <S.PageHeaderPositioner>
            <PageHeaderSection title="Place your LumiVitae order" />
          </S.PageHeaderPositioner>
          
          <S.ProductInfoPromptsPositioner>
            {id === "1" ? <MemoizedProductInfoPromptsBottle /> : <MemoizedProductInfoPromptsTablet />}
          </S.ProductInfoPromptsPositioner>

          {isLoading && <p>Loading products for country {selectedCountryId}...</p>} {/* نمایش وضعیت لودینگ */}
          {isError && <p>Error loading products: {error?.message}</p>}

          <S.ProductGalleryPositioner>
            <ProductGallery data={data} />
          </S.ProductGalleryPositioner>

          {id === "1" ? (
            <S.BottleSelectionPositioner>
               <ColorPicker data={data} />
            </S.BottleSelectionPositioner>
          ) : (
            <>
            </>
          )}
          <>
    
              <S.BundleOptionsPositioner style={{gridArea:id=="10"?"color":"bundle"}}>
                <BundleOptionsSection data={dataTablet} onSelect={handleProductSelect} selectedId={selectedProduct?.id} />
              </S.BundleOptionsPositioner>
              
              <S.FrequencyOptionsPositioner  style={{gridArea:id=="10"?"bundle":"frequency"}}>
                <FrequencyOptionsSection product={memoizedProduct} onSelect={handleFrequencySelect} selectedId={selectedSubscription} />
              </S.FrequencyOptionsPositioner>
            </>

          {id === "10" || id === "1"? (
            <S.OrderReviewPositioner>
              <OrderReview
                currentOrder={selectedProduct}
                onAddToBag={handleAddToBag}
              />
            </S.OrderReviewPositioner>
          ) : null}
               
          {id === "10" || id === "1" ? (
            <S.WhatsInTheBoxPositioner>
              <WhatsInTheBox />
            </S.WhatsInTheBoxPositioner>
          ) : (
            <S.WhatsInTheBoxPositionerTwo>
              <WhatsInTheBox />
            </S.WhatsInTheBoxPositionerTwo>
          )}

          {/* The `top` prop has been removed; layout is handled by the parent grid gap. */}
          <S.FaqSectionPositioner>
            <FaqSection />
          </S.FaqSectionPositioner>
        </S.ContentContainer>
      </S.PageWrapper>
                    <ScrollToTopButton />
      
      <Footer />
    </>
  );
};