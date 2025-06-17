// src/features/legals/ReturnsPolicyPage.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './ReturnsPolicyPage.styles';
import { FiCornerUpLeft } from 'react-icons/fi'; // آیکون مرتبط با بازگشت کالا

const ReturnsPolicyPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const returnsContent = {
    // محتوای HTML جدید در اینجا قرار گرفته است
    description: `
      <h1><strong>Returns</strong></h1>
      <p><br></p>
      <h2><strong>21-day money-back guarantee</strong></h2>
      <p>A 21-day money-back guarantee for all eligible products purchased by the customer ("Buyer"). The guarantee is valid from the date the Buyer places an order, or 14 days from the date of delivery, whichever period is greater. The 21-day money-back guarantee applies only when the product is in perfect condition and free from any damage, even if it may have been previously used. The product must be returned in its original packaging.</p>
      <p><br></p>
      <p><strong>LumiVitae will deduct a €40 Refund Administration and Shipping Fee*&nbsp;from the total refund amount.</strong></p>
      <p><br></p>
      <p>If a Buyer returns a product under our 21-day money-back guarantee, they will not be eligible to purchase the same product (including different product variations) again for a period of 30 days.</p>
      <p>To return your product, please contact us at care@lumivitae.com.&nbsp;</p>
      <p><br></p>
      <h2><strong>Damaged in Shipment</strong></h2>
      <p>Please be sure to inspect your product once you receive it. If your product is damaged in transit, please email us at care@lumivitae.com right away. Include a description of the damages, and pictures if possible. This information is extremely helpful to ensure that our products are packaged and shipped properly. We will arrange for the damaged products to be replaced right away.</p>
      <p><br></p>
      <h2><strong>Refunds</strong></h2>
      <p>Once your return is received and inspected, we will send you an email to notify you that we have received your shipment. If you are approved, then your refund will be processed, and a credit will be applied to your credit card or original method of payment, within 10-14 days.</p>
      <p><br></p>
      <p>*In Norway, the Refund Administration and Shipping Fee is kr 480.00</p>
    `,
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header data-aos="fade-down">
          <FiCornerUpLeft />
          <S.Title>Returns Policy</S.Title>
        </S.Header>
        <S.ContentArea
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: returnsContent.description }}
        />
      </S.Container>
    </S.PageWrapper>
  );
};

export default ReturnsPolicyPage;