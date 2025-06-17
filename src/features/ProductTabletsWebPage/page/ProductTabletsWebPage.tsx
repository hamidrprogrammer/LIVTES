import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { ReviewOrderSection } from '../components/ReviewOrderSection/ReviewOrderSection';
import { FaqSection } from '../components/FaqSection/FaqSection';
import { NavbarProduct } from '@/lib/shared/layouts/NavbarWeb/NavbarProduct';
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb';

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const ProductTabletsWebPage: React.FC = () => {
  return (
    <PageWrapper>
      <NavbarProduct />
      <HeroSection />
      <ReviewOrderSection />
      <FaqSection />
      <Footer />
    </PageWrapper>
  );
};

export default ProductTabletsWebPage;