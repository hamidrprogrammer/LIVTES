// src/pages/BuyBottlePageMobile/page/BuyBottlePage.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetProductVariationsQuery } from '@/features/shop/hooks/useProductQueries';
import { useCartStore } from '@/features/cart/store/cartStore';
import { useSettingsStore } from '@/features/settings/stores/settingsStore';

import { ProductVariation, Subscription } from '@/core/types/api/shop';
import { PageWrapper } from './BuyBottlePage.styles';

import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar';
import Intro from '../components/Intro/Intro';
import BottleShowcase from '../components/BottleShowcase/BottleShowcase';
import ColorPicker from '../components/sections/ColorPicker/ColorPicker';
import BundlePicker from '../components/sections/BundlePicker/BundlePicker';
import FrequencyPicker from '../components/sections/FrequencyPicker/FrequencyPicker';
import OrderReview from '../components/sections/OrderReview/OrderReview';
import WhatsInBox from '../components/sections/WhatsInBox/WhatsInBox';
import FAQ from '../components/sections/FAQ/FAQ';
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter';
import { showToast } from '@/lib/shared/stores/toastStore';

const BuyBottlePageMobile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Redirect to default product if ID is invalid
  useEffect(() => {
    if (!id || !['1', '10', '12'].includes(id)) {
      navigate('/products-bottle-mobile/1');
    }
  }, [id, navigate]);

  // Global state management
  const selectedCountryId = useSettingsStore((state) => state.selectedCountryId);
  const addItemSub = useCartStore((state) => state.addItemSub);
  const { items: cartItems, addItem: addItemToCart } = useCartStore();

  // API Queries
  const params = useMemo(() => ({
    countryId: selectedCountryId?.toString() || '56',
  }), [selectedCountryId]);

  const { data, isLoading, isError, error } = useGetProductVariationsQuery(id ?? '1', params);
  const { data: dataTablet } = useGetProductVariationsQuery('10', params);

  // Local state for order selection
  const [selectedProduct, setSelectedProduct] = useState<ProductVariation | null>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);

  // Memoize the selected product for dependent components
  const memoizedProduct = useMemo(() => selectedProduct, [selectedProduct]);

  // Handlers for updating selections
  const handleProductSelect = useCallback((option: ProductVariation) => {
    setSelectedProduct(option);
    setSelectedSubscription(null); // Reset frequency selection when bundle changes
  }, []);

  const handleFrequencySelect = useCallback((option: Subscription) => {
    setSelectedSubscription(option);
  }, []);

  // Logic to add the configured product to the cart
  const handleAddToBag = () => {
    // if (id === '1') {
    //   // For bottle product, cart logic is handled within ColorPicker's store interaction.
    //   // We can trigger the checkout or a cart confirmation message here.
    //   alert('Product added to bag! (Handled by Color Picker)');
    //   return;
    // }
    
    // if (!selectedProduct) {
    //   alert('Please select a product bundle.');
    //   return;
    // }

    if (selectedSubscription) {
      const itemToAdd = {
        ...selectedProduct,
        quantity: '1',
        subscriptionPrices: [selectedSubscription],
        type: 'Product Variation' as const,
        free_on_first_time: selectedSubscription?.free_on_first_time,
      };
      addItemSub(itemToAdd);
    } else {
       // Fallback for non-subscription products, though the flow requires a frequency.
      addItemToCart(selectedProduct, "1");
    }
    
          showToast("Product added to bag!.",'info')
    
    setSelectedProduct(null);
    setSelectedSubscription(null);
  };
  
  const handleCheckoutNow = () => {
     
    // Here you would typically navigate to the checkout page
  };

  if (!id) {
    return null; // or a loading/error component
  }
  return (
    <PageWrapper>
      <NavbarMobile />
      <Intro />

      {isLoading && <p>Loading products...</p>}
      {isError && <p>Error loading products: {error?.message}</p>}

      {/* Bottle Showcase and Color Picker for ID '1' */}
      {id === '1' && (
        <>
          <BottleShowcase data={data} />
          {/* ColorPicker manages its own state and cart interactions */}
          <ColorPicker data={data} />
        </>
      )}

      {/* Bundle and Frequency pickers for other IDs */}
      
        <>
          <BottleShowcase data={dataTablet} />
          <BundlePicker
            data={dataTablet}
            onSelect={handleProductSelect}
            selectedId={selectedProduct?.id}
          />
          <FrequencyPicker
            product={memoizedProduct}
            onSelect={handleFrequencySelect}
            selectedId={selectedSubscription}
          />
        </>
     

      <OrderReview
        selectedProduct={selectedProduct}
        selectedSubscription={selectedSubscription}
        cartItems={cartItems}
        productId={id}
        onAddToBag={handleAddToBag}
        onCheckoutNow={handleCheckoutNow}
      />
      <WhatsInBox />
      <FAQ />
      <MobileFooter />
    </PageWrapper>
  );
};

export default BuyBottlePageMobile;