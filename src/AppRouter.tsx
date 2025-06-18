import React, { Suspense, lazy } from 'react'; // اضافه کردن lazy
import { Routes, Route } from 'react-router-dom';
// import BottlePage from './features/BottlePage/page/BottlePage'; // حذف import مستقیم
// import ProductTabletsWebPage from './features/ProductTabletsWebPage/page/ProductTabletsWebPage'; // حذف import مستقیم
// import TabletPage from './features/TabletPage/page/TabletPage'; // حذف import مستقیم
// import HomeOldPage from './features/HomePageold/pages'; // حذف import مستقیم
// import BuyBottlePageMobile from './features/BuyBottlePageMobile/page/BuyBottlePage'; // حذف import مستقیم
// import { LoginForm } from './features/auth/components/LoginForm'; // حذف import مستقیم
// import CheckoutPage from './features/Checkout/page/CheckoutPage'; // حذف import مستقیم
// import { CheckoutReviewPage } from './features/Checkout/page/components/CheckoutReviewPage'; // حذف import مستقیم
import { ResponsiveRoute } from './ResponsiveRoute'; // این کامپوننت به صورت مستقیم استفاده می‌شود، نیازی به lazy نیست مگر اینکه خودش پیچیده باشد.
// import { BuyBottlePage } from './features/BuyBottlePage/BuyBottlePage'; // حذف import مستقیم
// import { ProfilePage } from './features/user/components/profile/ProfilePage'; // حذف import مستقیم

// import TermsAndConditionsPage from './features/legals/TermsAndConditionsPage'; // حذف import مستقیم
// import ShippingPolicyPage from './features/legals/ShippingPolicyPage'; // حذف import مستقیم
// import ReturnsPolicyPage from './features/legals/ReturnsPolicyPage'; // حذف import مستقیم
// import PartnerAgreementPage from './features/legals/PartnerAgreementPage'; // حذف import مستقیم
// import PrivacyPolicyPage from './features/legals/PrivacyPolicyPage'; // حذف import مستقیم
// import WarrantyPolicyPage from './features/legals/WarrantyPolicyPage'; // حذف import مستقیم

// Lazy Load کردن تمامی کامپوننت‌ها
const BottlePage = lazy(() => import('./features/BottlePage/page/BottlePage'));
const ProductTabletsWebPage = lazy(() => import('./features/ProductTabletsWebPage/page/ProductTabletsWebPage'));
const TabletPage = lazy(() => import('./features/TabletPage/page/TabletPage'));
const HomeOldPage = lazy(() => import('./features/HomePageold/pages'));
const BuyBottlePageMobile = lazy(() => import('./features/BuyBottlePageMobile/page/BuyBottlePage'));
const LoginForm = lazy(() => import('./features/auth/components/LoginForm').then(module => ({ default: module.LoginForm })));
const CheckoutPage = lazy(() => import('./features/Checkout/page/CheckoutPage'));
const CheckoutReviewPage = lazy(() => import('./features/Checkout/page/components/CheckoutReviewPage'));
const BuyBottlePage = lazy(() => import('./features/BuyBottlePage/BuyBottlePage').then(module => ({ default: module.BuyBottlePage })));
const ProfilePage = lazy(() => import('./features/user/components/profile/ProfilePage').then(module => ({ default: module.ProfilePage })));

const TermsAndConditionsPage = lazy(() => import('./features/legals/TermsAndConditionsPage'));
const ShippingPolicyPage = lazy(() => import('./features/legals/ShippingPolicyPage'));
const ReturnsPolicyPage = lazy(() => import('./features/legals/ReturnsPolicyPage'));
const PartnerAgreementPage = lazy(() => import('./features/legals/PartnerAgreementPage'));
const PrivacyPolicyPage = lazy(() => import('./features/legals/PrivacyPolicyPage'));
const WarrantyPolicyPage = lazy(() => import('./features/legals/WarrantyPolicyPage'));

const AppRouter: React.FC = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* Ensures navigation scrolls to top */}
      <Suspense fallback={<div>Loading...</div>}> {/* اضافه کردن fallback UI */}
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