// src/features/legals/PrivacyPolicyPage.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './PrivacyPolicyPage.styles';
import { FiShield } from 'react-icons/fi'; // آیکون مرتبط با حریم خصوصی

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const privacyContent = {
    // محتوای HTML جدید در اینجا قرار گرفته است
    description: `
      <p><strong>LumiVitae Privacy Policy</strong></p>
      <p><br></p>
      <p><strong>1. Privacy and Data Protection Policy</strong></p>
      <p><br></p>
      <p>Browse the LumiVitae website and customer registration on the online store requires the acknowledgment and the acceptance of this Privacy and Data Protection Policy.</p>
      <p><br></p>
      <p>LumiVitae maintains a constant concern for the protection of the privacy of personal data and a preventive action regarding the security of the site and the protection of the data of its customers and visitors.</p>
      <p>To reinforce the guarantees of the confidentiality of personal data, data protection measures were implemented, both in terms of verifying the legitimacy of the use of personal data processed as in terms of ensuring compliance with the rights granted to the data subjects. In this context, and through the specialization of customer support channels, LumiVitae aims to promote a clearer and more objective communication of the purposes underlying the processing of personal data and the transparency of processing operations.</p>
      <p><br></p>
      <p>Thus, the information contained in this text is intended to convey, clearly and unambiguously, the content of the privacy policy and protection of personal data that will be processed under the terms of the General Data Protection Regulation in force (hereinafter GDPR) and delimited by the content of the business relationship to be established between the data subject and LumiVitae.</p>
      <p><br></p>
      <p><strong>2. Types of personal data collected</strong></p>
      <p><br></p>
      <p>In general terms, personal data are collected in three situations directly arising from LumiVitae activity:</p>
      <p><br></p>
      <p><strong>2.1. User registration: LumiVitae client account creation and data processing purposes</strong></p>
      <p><br></p>
      <p>For the purpose of creating the customer account, a personal area is provided in which the customer must enter the data necessary for their identification as a customer. The first purchase will depend on the provision of additional personal data, indispensable for order processing and delivery.</p>
      <p><br></p>
      <p>Required fields on the forms available for those registration stages are marked with an asterisk (*).</p>
      <p>LumiVitae is committed to protecting customer data which will never be made available to third parties without the acknowledgment or consent of the data subject, as legally required.</p>
    `,
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header data-aos="fade-down">
          <FiShield />
          <S.Title>Privacy Policy</S.Title>
        </S.Header>
        <S.ContentArea
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: privacyContent.description }}
        />
      </S.Container>
    </S.PageWrapper>
  );
};

export default PrivacyPolicyPage;