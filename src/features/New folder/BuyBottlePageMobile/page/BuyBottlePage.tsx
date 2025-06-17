/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/BuyBottlePage/BuyBottlePage.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react'; // useCallback اضافه شد
import Intro from '../components/Intro/Intro';
import BottleShowcase from '../components/BottleShowcase/BottleShowcase';
import ColorPicker from '../components/sections/ColorPicker/ColorPicker';
import BundlePicker from '../components/sections/BundlePicker/BundlePicker';
import FrequencyPicker from '../components/sections/FrequencyPicker/FrequencyPicker';
import OrderReview from '../components/sections/OrderReview/OrderReview'; // این بخش به زودی اضافه می‌شود
import WhatsInBox from '../components/sections/WhatsInBox/WhatsInBox'; // این بخش به زودی اضافه می‌شود
import FAQ from '../components/sections/FAQ/FAQ';                       // این بخش به زودی اضافه می‌شود
import { OrderState } from '@/core/types';
import { PageWrapper } from './BuyBottlePage.styles';
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter';
import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar';
import { useGetProductVariationsQuery } from '@/features/shop/hooks/useProductQueries';
import { use } from 'i18next';
import { useCartStore } from '@/features/cart/store/cartStore';

const BuyBottlePageMobile: React.FC = () => {
  const params = useMemo(() => ({ countryId: "56" }), []);
  const { data, isLoading, isError, error } = useGetProductVariationsQuery("1", params);
  const addItemToCart = useCartStore((state) => state.addItem);

  const [currentOrder, setCurrentOrder] = useState<OrderState>({
    selectedBottle: undefined,
    selectedBundle: undefined,
    selectedFrequency: undefined,
  });

  const handleOrderUpdate = useCallback((orderPart: Partial<OrderState>) => {
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      ...orderPart,
    }));
  }, []);

  const handleAddToBag = () => {
    if (!currentOrder.selectedBottle && !currentOrder.selectedBundle) {
      alert('Please select a product to add to your bag.');
      return;
    }

    console.log('Adding to bag:', currentOrder);
    addItemToCart(currentOrder);
  };

  useEffect(() => {
    console.log('[BuyBottlePageMobile] Product variations loaded:', data?.data);
  }, [data]);

  const handleCheckoutNow = () => {
    console.log('Proceeding to checkout:', currentOrder);
    alert('Proceeding to checkout (simulated)! Check console for details.');
  };

  return (
    <PageWrapper>
      <NavbarMobile />
      <Intro />
      <BottleShowcase data={data} />
      <ColorPicker data={data} onOrderUpdate={handleOrderUpdate} />
      <BundlePicker onOrderUpdate={handleOrderUpdate} />
      <FrequencyPicker onOrderUpdate={handleOrderUpdate} />
      <OrderReview 
        currentOrder={currentOrder}
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