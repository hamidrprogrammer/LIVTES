// src/features/legals/ShippingPolicyPage.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './ShippingPolicyPage.styles';
import { FiTruck } from 'react-icons/fi'; // آیکون مرتبط با ارسال

const ShippingPolicyPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const shippingContent = {
    // محتوای HTML جدید در اینجا قرار گرفته است
    description: `
      <h2><strong>LumiVitae Worldwide Shipping</strong></h2>
      <p><br></p>
      <p>We ship to over 40 countries across Europe, the Americas, Asia Pacific, and the Middle East. All countries currently available for shipping are available for selection at checkout. In most cases, we aim to dispatch with 2 business days of placing your order, but in some cases it may take longer. DHL Express shipping approximately 1-7 days worldwide. Please note, that in some countries we cannot ship to PO Boxes.</p>
      <p><br></p>
      <h3><strong>Duties and Taxes</strong></h3>
      <p>All orders are shipped with our courier DHL Express with duties and taxes paid. Your order will be delivered to your door with the local customs processing completed for you by our courier. You will not need to pay any additional taxes at the border.</p>
      <p><br></p>
      <h3><strong>Shipping Fees</strong></h3>
      <p>Shipping fees are calculated at checkout based on your destination country and order volume. Your order price at checkout includes all duties, taxes, and shipping fees.</p>
      <p><br></p>
      <h3><strong>Order Limits</strong></h3>
      <p>Some product and countries may have limits on the quantity of items that can be ordered.</p>
      <p><br></p>
      <h3><strong>Changes to Shipping Address</strong></h3>
      <p>All orders will receive an email from DHL Express after it has been dispatched. In this email, you will have options to edit your shipping address. Please note that a change of country for shipping address is not possible.</p>
    `,
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header data-aos="fade-down">
          <FiTruck />
          <S.Title>Shipping Policy</S.Title>
        </S.Header>
        <S.ContentArea
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: shippingContent.description }}
        />
      </S.Container>
    </S.PageWrapper>
  );
};

export default ShippingPolicyPage;