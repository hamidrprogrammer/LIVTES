import styled from 'styled-components';
import {
  FullWidthSection,
  SectionContent as BaseSectionContent,
  SecondaryButton as BaseSecondaryButton
} from '../common/PageSection';

export const SectionContainer = styled(FullWidthSection)`
  min-height: 100vh;
  background: linear-gradient(180deg, rgb(7, 44, 61) 0%, rgb(0, 0, 0) 100%);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionContent = styled(BaseSectionContent)`
  color: #ffffff;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    gap: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 400;
  line-height: 1.2;
  max-width: 312px;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeaderText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 371px;
  text-align: center;

  span.bold {
    font-weight: 700;
  }

  span.underline {
    text-decoration: underline;
  }

  @media (min-width: 992px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ProductDisplayRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const BottleImage = styled.img`
  width: auto;
  height: auto;
  max-height: 512px;
  object-fit: contain; /* Changed to contain to prevent cropping */
  margin-bottom: 30px;

  @media (max-width: 768px) {
    max-height: 400px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

export const BottleName = styled.h3`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BottlePrice = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 15px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BuyButton = styled(BaseSecondaryButton)`
  align-self: center;
    z-index:1000;

`;

export const SeparatorLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #3ffff84D;
  width: 80%;
  max-width: 910px;
  margin: 60px auto;
`;