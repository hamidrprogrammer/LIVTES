import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { responsive } from '@/core/theme/responsive';
const footer_bkganim = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/shared/footer_bkganim%201-1440.webp";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Outfit', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

// --- Styled Components ---

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  min-height: 860px;
  background: #072C3D;
  overflow: hidden;
  display: flex;

  align-items: flex-end;

  ${responsive.medium(`
    min-height: auto;
    height: auto;
    padding-bottom: 20px;
  `)}
`;

const BackgroundImage1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url('${footer_bkganim}');
  background-size: cover;
  background-position: center;

  ${responsive.tablet(`
    display: none;
  `)}
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1440px; /* برای حفظ چیدمان در صفحات بزرگ */
  height: 100%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${responsive.tablet(`
    padding: 20px;
    justify-content: flex-start;
  `)}
`;

const NavLinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5%;
  padding: 20px 0;
  flex-wrap: wrap;

  ${responsive.medium(`
    justify-content: space-around;
    gap: 30px;
    padding-top: 180px;
  `)}

  ${responsive.tablet(`
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    gap: 20px;
  `)}
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Outfit', sans-serif;
  color: #FFFFFF;
  text-align: left;
  min-width: 150px; /* برای جلوگیری از فشرده شدن زیاد ستون‌ها */
  flex: 1; /* اجازه می‌دهد ستون‌ها فضا را پر کنند */
  max-width: 220px; /* حداکثر عرض برای هر ستون */

  ${responsive.tablet(`
    align-items: center;
    text-align: center;
    width: 100%;
    min-width: unset;
    max-width: unset;
  `)}
`;

const NavTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  opacity: 0.5;
  margin: 0 0 20px 0;

  ${responsive.tablet(`
    font-size: 18px;
    margin-bottom: 10px;
  `)}
`;

const NavLinkText = styled.a`
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 15.5px;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${responsive.tablet(`
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  `)}
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 40px 0; /* فاصله از بالا و پایین */
`;

const SocialIconLink = styled.a`
  color: #FFFFFF;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  ${responsive.tablet(`
    font-size: 28px;
  `)}
`;

const FooterBottomBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flext-start;
  flex-wrap: wrap; /* برای پیچیدن آیتم‌ها در صورت کمبود فضا */
  gap: 20px;
  padding: 20px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;

  ${responsive.tablet(`
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    padding-top: 20px;
    border-top: none; /* در حالت ستونی، خط جداکننده بالا ممکن است لازم نباشد */
    font-size: 12px;
  `)}
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px; /* فاصله بین لینک‌ها */

  a {
    color: #FFFFFF;
    text-decoration: none;
    padding: 0 5px;

    &:not(:last-child) {
      border-right: 1px solid #FFFFFF;
    }
    
    &:hover {
      text-decoration: underline;
    }
  }

  ${responsive.tablet(`
    order: 3;
    a:not(:last-child) {
      border-right: none;
    }
    a:not(:last-child)::after {
      content: '|';
      margin-left: 10px;
    }
  `)}
`;

const CopyrightText = styled.div`
  text-align: right;
  white-space: nowrap;

  ${responsive.tablet(`
    order: 1;
    text-align: center;
  `)}
`;

// --- Navigation Data ---
interface NavItem {
  text: string;
  href: string;
}

interface FooterNavColumn {
  title: string;
  items: NavItem[];
}

const navData: FooterNavColumn[] = [
  {
    title: "Bottle",
    items: [{ text: "Explore the Bottle", href: "#explore-bottle" }],
  },
  {
    title: "Tablets",
    items: [{ text: "Explore LVQ+ Tablets", href: "#explore-tablets" }],
  },
  {
    title: "Science",
    items: [
      { text: "Molecular Hydrogen", href: "#hydrogen" },
      { text: "Supplements", href: "#supplements" },
      { text: "Bottle", href: "#science-bottle" },
      { text: "Water", href: "#water" },
    ],
  },
  {
    title: "LumiVitae",
    items: [
      { text: "About LumiVitae", href: "#about" },
      { text: "Become a Partner", href: "#partner" },
      { text: "Help & FAQs", href: "#faq" },
    ],
  },
];


// --- Custom Icons (No changes made as per instructions) ---
const MdiInstagram: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32px" height="32px" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
  </svg>
);

const MdiYoutube: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32px" height="32px" fill="currentColor">
    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-.79.07-1.69.1-2.62.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83 1.48 1.73-1.73.47-.13 1.33.22 2.65.28.79.07 1.69.1 2.62.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <FooterWrapper>
        <BackgroundImage1 />
        <ContentContainer>
          <NavLinksContainer>
            {navData.map((column) => (
              <NavColumn key={column.title}>
                <NavTitle>{column.title.toUpperCase()}</NavTitle>
                {column.items.map((item) => (
                  <NavLinkText key={item.text} href={item.href}>
                    {item.text}
                  </NavLinkText>
                ))}
              </NavColumn>
            ))}
          </NavLinksContainer>

          <SocialIconsWrapper>
            <SocialIconLink href="https://www.facebook.com/lumivitae.official" aria-label="Facebook">
              <RiFacebookFill />
            </SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com/@lumivitae_official" aria-label="TikTok">
              <FaTiktok />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/lumivitae_official" aria-label="Instagram">
              <MdiInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://www.youtube.com/@LumiVitae.Official" aria-label="YouTube">
              <MdiYoutube />
            </SocialIconLink>
          </SocialIconsWrapper>

          <FooterBottomBar>
            <LegalLinks>
              <a href="/legals/partner-agreement">Partner</a>
              <a href="/legals/privacy-policy">Privacy Policy</a>
              <a href="/legals/shipping-policy">Shipping</a>
              <a href="/legals/returns-policy">Returns</a>
              <a href="/legals/terms-and-conditions">Terms of Service</a>
              <a href="/legals/warranty-policy">Warranty</a>
            </LegalLinks>
            <CopyrightText>© {new Date().getFullYear()} LumiVitae, Lda</CopyrightText>
          </FooterBottomBar>
        </ContentContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;