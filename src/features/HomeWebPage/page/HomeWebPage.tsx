// src/features/HomePage/page/HomePage.tsx
import React from 'react';
import styled from 'styled-components';

import HeroSection from '../components/HeroSection/HeroSection';
import IntroSection from '../components/IntroSection/IntroSection';
import BottleTechnologySection from '../components/BottleTechnologySection/BottleTechnologySection';
import TabletsPowerSection from '../components/TabletsPowerSection/TabletsPowerSection'; // Import TabletsPowerSection
import Navbar from '@/lib/shared/layouts/NavbarWeb/Navbar';
// ... other imports will go here

const HomePageContainer = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <BottleTechnologySection />
      <TabletsPowerSection /> {/* Add TabletsPowerSection here */}
      {/* Other sections will be added below */}
      <div style={{height: '100vh', textAlign: 'center', paddingTop: '50px', background: '#c0c0c0'}}>
        Placeholder for next section (Vision/Revolution Cards).
      </div>
    </HomePageContainer>
  );
};
