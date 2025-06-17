import React, {  Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';
import BottlePage from './features/BottlePage/page/BottlePage';
import ProductTabletsWebPage from './features/ProductTabletsWebPage/page/ProductTabletsWebPage';
import TabletPage from './features/TabletPage/page/TabletPage';
import HomeOldPage from './features/HomePageold/pages';
import BuyBottlePageMobile from './features/BuyBottlePageMobile/page/BuyBottlePage';
import { LoginForm } from './features/auth/components/LoginForm';
import CheckoutPage from './features/Checkout/page/CheckoutPage';
import { CheckoutReviewPage } from './features/Checkout/page/components/CheckoutReviewPage';
import { ResponsiveRoute } from './ResponsiveRoute';
import { BuyBottlePage } from './features/BuyBottlePage/BuyBottlePage';
import { ProfilePage } from './features/user/components/profile/ProfilePage';

import TermsAndConditionsPage from './features/legals/TermsAndConditionsPage';
import ShippingPolicyPage from './features/legals/ShippingPolicyPage';
import ReturnsPolicyPage from './features/legals/ReturnsPolicyPage';
import PartnerAgreementPage from './features/legals/PartnerAgreementPage';
import PrivacyPolicyPage from './features/legals/PrivacyPolicyPage';
import WarrantyPolicyPage from './features/legals/WarrantyPolicyPage';
// const BottlePage = lazy(() => import('./features/BottlePage/page/BottlePage'));



const AppRouter: React.FC = () => {
  return (
    <>
      {/* <ScrollToTop />  */}
      {/* Ensures navigation scrolls to top */}
      <Suspense > {/* Fallback UI while lazy-loaded components are fetched */}
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />

          <Route path="/" element={<HomeOldPage />} />
                    <Route path="/basket" element={<CheckoutPage />} />
 <Route path="/legals/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/legals/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/legals/returns-policy" element={<ReturnsPolicyPage />} />
        <Route path="/legals/partner-agreement" element={<PartnerAgreementPage />} />
        <Route path="/legals/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/legals/warranty-policy" element={<WarrantyPolicyPage />} />
          <Route path="/CheckoutPageReview" element={<CheckoutReviewPage />} />
          <Route path="/tablete" element={<TabletPage />} />
                    <Route path="/login" element={<LoginForm />} />
        <Route path="/account/:activeTab" element={<ProfilePage />} />

          <Route path="/bottle" element={<BottlePage />} />
          <Route
  path="/products-bottle/:id"
  element={
    <ResponsiveRoute
      mobileComponent={<BuyBottlePageMobile />}
      desktopComponent={<BuyBottlePage />}
    />
  }
/> 

{/* <Route path="/profile/orders/:orderId" element={<OrderDetailPage />} /> */}


                    {/* <Route path="/account/profile" element={<ProfilePage />} /> */}
                    {/* <Route path="/account/addresses" element={<AddressListPage />}/> */}
                    <Route path="/products" element={<ProductTabletsWebPage />} />

                

          {/* Consider adding a 404 Not Found route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;