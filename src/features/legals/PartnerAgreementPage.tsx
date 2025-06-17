// src/features/legals/PartnerAgreementPage.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './PartnerAgreementPage.styles';
import { FiBriefcase } from 'react-icons/fi'; // آیکون مرتبط با قرارداد همکاری

const PartnerAgreementPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const agreementContent = {
    // محتوای HTML جدید در اینجا قرار گرفته است
    description: `
      <h1><span style="background-color: transparent; color: rgb(0, 0, 0);">LUMIVITAE INDEPENDENT BRAND PARTNER AGREEMENT</span></h1>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">THIS AGREEMENT</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> (the “</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">Agreement</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">”) provides the terms and conditions of the relationship between:</span></p>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">LUMIVITAE MARKETING SÄRL</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">, a company incorporated under the laws of Switzerland, with IDE\\UID CHE-337.575.578, with head offices in Place du Tunnel 9, 1005 Lausanne, Switzerland, hereinafter referred to as “</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">Company</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">”</span></p>
      <p><br></p>
      <p><span style="background-color: transparent; color: rgb(0, 0, 0);">and</span></p>
      <p><br></p>
      <p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Independent Brand Partner</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">, hereinafter referred to as ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">LVIBP</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’, ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">Partner</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’ or ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">You</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’.</span></p>
      <p><span style="background-color: transparent; color: rgb(0, 0, 0);">In order to participate in the</span><strong style="background-color: transparent; color: rgb(0, 0, 0);"> LUMIVITAE INDEPENDENT BRAND PARTNER PROGRAM</strong><span style="background-color: transparent; color: rgb(0, 0, 0);"> (the ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">Program</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’) </span></p>
      <p><br></p>
      <p><span style="background-color: transparent; color: rgb(0, 0, 0);">You agree to the:</span></p>
      <ol>
        <li><span style="background-color: transparent;">LumiVitae Independent Brand Partner Agreement</span></li>
        <li><span style="background-color: transparent;">LumiVitae Independent Brand Partner Compensation Plan</span></li>
      </ol>
      <p><br></p>
      <p><span style="background-color: transparent; color: rgb(0, 0, 0);">These documents are collectively referred to as the ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">LumiVitae Independent Brand Partner Agreement</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’, ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">LVIBP Agreement</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’, or ‘</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">Agreement</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">’.</span></p>
      <h2>1. Definitions</h2>
      <ol>
        <li><strong>Customer</strong> means any person or party who purchases goods or services on the Site after connecting to the Site from the Partner Referral Link.</li>
        <li><strong>Brand Partner</strong> (or <strong>Partner</strong>) means a distributor of LumiVitae products and services. All LumiVitae Brand Partners are independent and are not employees of the Company. </li>
        <li><strong>Partner Link/s</strong> means unique digital referral link/s we provide to you to refer other parties to our Site for the purpose of promoting the sale of goods or services on the Site, and/or referring other parties to our Program. The Links are prepared to track Customers who are directed to the Site and make a purchase which results in a Completed Transaction.</li>
      </ol>
    `,
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header data-aos="fade-down">
          <FiBriefcase />
          <S.Title>Independent Partner Agreement</S.Title>
        </S.Header>
        <S.ContentArea
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: agreementContent.description }}
        />
      </S.Container>
    </S.PageWrapper>
  );
};

export default PartnerAgreementPage;