import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGetUserProfileQuery } from '../../hooks/useUserQueries';
import * as S from './ProfilePage.styles';
import { ProfileSidebar } from './ProfileSidebar';
import { ProfileView } from './ProfileView'; // کامپوننت جدید ویوی پروفایل
import { LoginPrompt } from '@/lib/shared/components/LoginPrompt/LoginPrompt';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { NavbarProduct } from '@/lib/shared/layouts/NavbarWeb/NavbarProduct';
import { AddressListPage } from '@/features/contactGroups/components/addresses/AddressListPage';
import { OrderSubscriptionPage } from '@/features/orders/components/OrderSubscriptionPage';
import { DocumentListPage } from '@/features/documents/components/DocumentListPage';
import UserStoreCreditPage from '@/features/storeCredit/components/page/StoreCreditPage';
import { OrderListPage } from '@/features/orders/components/OrderListPage';
import { useParams } from 'react-router-dom';

export const ProfilePage: React.FC = () => {
    const { activeTab } = useParams();
 

  // state برای مدیریت اینکه کدام بخش (پروفایل، آدرس، ...) نمایش داده شود
  const [activeView, setActiveView] = useState('profile');

  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  // START: حل مشکل Opacity با مقداردهی اولیه AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out-sine',
      once: true,
    });
  }, []);
  // END

  const { data: userProfileResponse, isLoading, isError, error } = useGetUserProfileQuery({
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
    refetchOnWindowFocus: false
  });

  if (!isAuthenticated) return <LoginPrompt message="Please log in to view your profile." />;
  if (isLoading) return <S.LoadingState>Loading Profile...</S.LoadingState>;
  if (isError) return <S.ErrorState>Error loading profile: {error?.message}</S.ErrorState>;
  if (!userProfileResponse) return <S.LoadingState>No profile data available.</S.LoadingState>;

  

  return (
    <>
      <NavbarProduct />
      <S.PageWrapper>
        <ProfileSidebar activeView={activeView} setActiveView={setActiveView} />
        <S.MainContent>
          <div style={{ display: activeView === 'profile' ? 'block' : 'none', width: '100%', height: '100%' }}>
            <ProfileView userProfile={userProfileResponse}  />
          </div>
          <div style={{ display: activeView === 'addresses' ? 'block' : 'none', width: '100%', height: '100%' }}>
            <AddressListPage />
            
          </div>
      
           <div style={{ display: activeView === 'orders' ? 'block' : 'none', width: '100%', height: '100%' }}>
              <OrderListPage/>
          </div>
           <div style={{ display: activeView === 'subscriptions' ? 'block' : 'none', width: '100%', height: '100%' }}>
              <OrderSubscriptionPage/>
          </div>
 <div style={{ display: activeView === 'documents' ? 'block' : 'none', width: '100%', height: '100%' }}>
              <DocumentListPage/>
          </div>
           <div style={{ display: activeView === 'store-credit' ? 'block' : 'none', width: '100%', height: '100%' }}>
              <UserStoreCreditPage/>
          </div>
        
        </S.MainContent>
      </S.PageWrapper>
    </>
  );
};