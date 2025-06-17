// src/features/legals/WarrantyPolicyPage.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './WarrantyPolicyPage.styles';
import { FiAward } from 'react-icons/fi'; // آیکون مرتبط با گارانتی

const WarrantyPolicyPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const warrantyContent = {
    // محتوای HTML جدید در اینجا قرار گرفته است
    description: `
      <h1><strong style="background-color: transparent; color: rgb(0, 0, 0);">LumiVitae Worldwide Warranty Policy</strong></h1>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Legal Conformity Warranty:</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> Lumivitae, Lda provides a worldwide legal conformity warranty on the </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">CellPower Hydrogen Water Bottle</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> sold to consumers</span><span style="background-color: transparent; color: rgb(255, 0, 0);"> </span><span style="background-color: transparent; color: rgb(0, 0, 0);">for a period of </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">2 (two) years</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> from the date of purchase. This warranty covers worldwide consumers and grants specific legal rights, ensuring that the CellPower Hydrogen Water Bottle meets the required standards of quality and performance.</span></p>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Procedure to Exercise Warranty Rights:</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> If your CellPower Hydrogen Water Bottle develops a defect or malfunction, please promptly contact LumiVitae's Customer Service, providing the order number, a description of the defect or malfunction, and the original purchase invoice.&nbsp;</span></p>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Use the following email contact details: care@lumivitae.com</strong></p>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Conditions and Limitations:</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> This warranty is personal to the original owner and is non-transferable.</span></p>
      <p><span style="background-color: transparent; color: rgb(0, 0, 0);">If the CellPower Hydrogen Water Bottle is repaired or replaced during the final six months of the warranty period, the warranty for the repaired or replaced part, or the entire product, may be extended by up to six months from the date of repair or replacement, ensuring that consumers are adequately protected even after repairs or replacements. This extension guarantees that any issues with the repair or replacement are properly covered.&nbsp;</span></p>
      <p><br></p>
      <p><span style="background-color: transparent; color: rgb(0, 0, 0);">Please note that LumiVitae will not accept the return of any allegedly defective CellPower Hydrogen Water Bottles without prior authorization, including the means, carrier, and route of shipment for such return. Unauthorized rework on any materials will not be credited.</span></p>
    `,
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header data-aos="fade-down">
          <FiAward />
          <S.Title>Worldwide Warranty Policy</S.Title>
        </S.Header>
        <S.ContentArea
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: warrantyContent.description }}
        />
      </S.Container>
    </S.PageWrapper>
  );
};

export default WarrantyPolicyPage;