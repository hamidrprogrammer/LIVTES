import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import logoDefault from '@assets/images/logo.svg';
import { motion } from 'framer-motion';
const backmobifo = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/shared/backmobifo.avif';

// --- Styled Components ---

const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 501px; /* Use min-height instead of fixed height */
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 20px 20px; /* Added vertical padding */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  font-family: 'Outfit', sans-serif;
  background-image: url(${backmobifo});
`;

const LinksGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextElement = styled.p<{
  opacity?: number;
  fontSize?: string;
  fontWeight?: number;
}>`
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: 1.4;
  color: #ffffff;
  opacity: ${(props) => props.opacity || 1};
  margin: 0 0 12px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 42px;
  cursor: pointer;
`;

const LegalLinksText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  text-align: center;
  margin: 20px 0;
  white-space: pre-wrap;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
`;

const IconPlaceholder = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  font-size: 14px;
  color: #ffffff;
`;

const LanguageRegionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LanguageRegionGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownArrow = styled.div`
  width: 5px;
  height: 2.5px;
  border: 1px solid #ffffff;
  border-top: none;
  margin-left: 6px;
`;

const CopyrightText = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

// --- Mobile Footer Component ---
const MobileFooter: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);

  return (
    <FooterWrapper>
      <div>
        <LinksGrid>
          <LinkColumn>
            <TextElement opacity={0.5} fontWeight={400} data-aos="fade-up">Bottle</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="100">Explore the Bottle</TextElement>
            
            <TextElement opacity={0.5} fontWeight={400} data-aos="fade-up" data-aos-delay="50" style={{marginTop: '20px'}}>Science</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="150">Molecular Hydrogen</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="200">Supplements</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="250">Bottle</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="300">Water</TextElement>
          </LinkColumn>

          <LinkColumn>
            <TextElement opacity={0.5} fontWeight={400} data-aos="fade-up">Tablets</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="100">Explore LVQ+ Tablets</TextElement>
            
            <TextElement opacity={0.5} fontWeight={400} data-aos="fade-up" data-aos-delay="50" style={{marginTop: '20px'}}>LumiVitae</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="150">About LumiVitae</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="200">Become a Partner</TextElement>
            <TextElement fontWeight={500} data-aos="fade-up" data-aos-delay="250">Help & FAQs</TextElement>
          </LinkColumn>
        </LinksGrid>
        
        <LogoContainer data-aos="zoom-in" data-aos-delay="400">
          <Logo src={logoDefault} alt="Logo" />
        </LogoContainer>

        <LegalLinksText data-aos="fade-up" data-aos-delay="500">
          Imprint | Privacy Policy | Shipping | Returns | Terms of Service | Warranty
        </LegalLinksText>

        <SocialIconsContainer data-aos="fade-up" data-aos-delay="600">
          <IconPlaceholder title="Facebook" />
          <IconPlaceholder title="TikTok" />
          <IconPlaceholder title="Instagram" />
          <IconPlaceholder title="YouTube" />
        </SocialIconsContainer>
      </div>

      <FooterBottom>
        <LanguageRegionContainer data-aos="fade-up" data-aos-delay="750">
          <LanguageRegionGroup>
            <span>United States</span>
            <DropdownArrow />
          </LanguageRegionGroup>
          <LanguageRegionGroup>
            <span>English</span>
            <DropdownArrow />
          </LanguageRegionGroup>
        </LanguageRegionContainer>
        <CopyrightText data-aos="fade-up" data-aos-delay="700">
          © 2025 LumiVitae, Lda
        </CopyrightText>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default MobileFooter;