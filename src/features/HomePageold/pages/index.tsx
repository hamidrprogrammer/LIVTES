/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '@/lib/shared/layouts/NavbarWeb/Navbar';
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb';
import { useIsMobile } from '@/core/hooks/useIsMobile';
import NavbarMobile from '@/lib/shared/layouts/NavMobileMain/Navbar';
import Quote from '@/assets/images/home/Quote.svg'; 
import MobileFooter from '@/lib/shared/layouts/MobileFooter/MobileFooter';

// Import hooks to fetch data
import { ProductVariation } from '@/core/types/api/shop';
import { SocialMediaItem, ConfigData } from '@/core/types/api/settings';
import { useGetProductVariationsQuery } from '@/features/shop/hooks/useProductQueries';
import { useGetConfigDataQuery, useGetSocialMediaSettingsQuery } from '@/features/settings/hooks/useSettingsQueries';
import ScrollToTopButton from '@/lib/shared/components/ScrollToTopButton';

// Lazy load original page components
const HeroSection = React.lazy(() => import('../components/HeroSection'));
const IntroSection = React.lazy(() => import('../components/IntroSection/IntroSection'));
const BottleShowcase = React.lazy(() => import('../components/BottleShowcase/BottleShowcase'));
const PowerStarsSection = React.lazy(() => import('../components/PowerStarsSection/PowerStarsSection'));
const FeatureCardsSection = React.lazy(() => import('../components/FeatureCardsSection/FeatureCardsSection'));
const ProductsSection = React.lazy(() => import('../components/ProductsSection/ProductsSection'));
const LongevityBanner = React.lazy(() => import('../components/LongevityBanner/LongevityBanner'));


const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const PageLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #333;
`;

// Styled components for displaying the new data
const FetchedDataContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f7f9;
`;

const Section = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #072C3D;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #33BFBC;
  padding-bottom: 0.5rem;
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
`;

const ProductCard = styled.div`
  border: 1px solid #e0e5eb;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  color: #1C1F23;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    color: #60C9DA;
    font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: #D32F2F;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SocialLinksList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: #33BFBC;
    &:hover {
        text-decoration: underline;
    }
`;

const ConfigDataWrapper = styled.div`
    background: #e9f5f5;
    padding: 1.5rem;
    border-radius: 8px;
    line-height: 1.6;
`;

// Helper component to display Product Variations
const ProductVariationsDisplay: React.FC<{ productId: string; countryId: string }> = ({ productId, countryId }) => {
    const { data, isLoading, isError, error } = useGetProductVariationsQuery(productId, { countryId });

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorMessage>Error fetching product {productId}: {error?.message}</ErrorMessage>;

    return (
        <ProductGrid>
            {data?.data.map((variation: ProductVariation) => (
                <ProductCard key={variation.id}>
                    <ProductTitle>{variation.name}</ProductTitle>
                    <p>{variation.preview_text}</p>
                    <ProductPrice>{variation.sale_price.gross_value_string}</ProductPrice>
                </ProductCard>
            ))}
        </ProductGrid>
    );
};

// Helper component to display Social Media Settings
const SocialMediaDisplay: React.FC = () => {
    const { data, isLoading, isError, error } = useGetSocialMediaSettingsQuery();

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorMessage>Error fetching social media links: {error?.message}</ErrorMessage>;

    return (
        <SocialLinksList>
            {data?.data.map((item: SocialMediaItem) => (
                <li key={item.name}><SocialLink href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</SocialLink></li>
            ))}
        </SocialLinksList>
    );
};

// Helper component to display Config Data
const ConfigDataDisplay: React.FC<{ countryId: string }> = ({ countryId }) => {
    const { data, isLoading, isError, error } = useGetConfigDataQuery({ countryId });

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorMessage>Error fetching config data: {error?.message}</ErrorMessage>;
    
    const config: ConfigData | undefined = data?.data;

    return (
        <ConfigDataWrapper>
            {/* <p><strong>Website Title:</strong> {config?.website_title}</p> */}
            <p><strong>Default Currency:</strong> {config?.user_currency.iso3}</p>
            <p><strong>Company Email:</strong> {config?.saleSystem.email}</p>
        </ConfigDataWrapper>
    );
};


const PageLoader: React.FC = () => (
  <PageLoaderWrapper>
    Loading...
  </PageLoaderWrapper>
);

const HomeOldPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = useIsMobile();
  
  // --- Endpoint URLs Placeholder ---
  const endpoints = {
      product1: "https://api.lumivitaeglobal.com/api/shop/product-variations/product/1?countryId=56",
      product10: "https://api.lumivitaeglobal.com/api/shop/product-variations/product/10?countryId=56",
      product12: "https://api.lumivitaeglobal.com/api/shop/product-variations/product/12?countryId=56",
      socialMedia: "https://api.lumivitaeglobal.com/api/settings/social-media",
      configData: "https://api.lumivitaeglobal.com/api/configs/data?countryId=56"
  };

  return (
    <PageContainer>
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )}
      
      <Suspense fallback={<PageLoader />}>
        <HeroSection />
        <IntroSection />
        
        {/* Integrated Data Display Section */}
        
        <BottleShowcase />
        <PowerStarsSection />
        <FeatureCardsSection />
        <ProductsSection />
        <img
          src={Quote}
          style={{width:`100%`, backgroundSize:"cover", display: 'block' }}
          alt="Quote"
          loading="lazy"
        />
        <LongevityBanner/>
      </Suspense>

      {isMobile ? (
        <MobileFooter />
      ) : (
        <Footer />
      )}
              <ScrollToTopButton />

    </PageContainer>
  );
};

export default HomeOldPage;