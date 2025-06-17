import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const ReviewSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightTealBackground};
  padding: ${({ theme }) => theme.spacingT(6)} ${({ theme }) => theme.spacingT(2)};
  width: 100%;

  @media ${media.md} {
    padding: ${({ theme }) => theme.spacingT(8)} ${({ theme }) => theme.spacingT(4)};
  }
   @media ${media.lg} {
    padding: ${({ theme }) => theme.spacingT(10)} ${({ theme }) => theme.spacingT(5)};
  }
`;

export const ContentLayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "title"
    "details"
    "image"
    "buttons";
  gap: ${({ theme }) => theme.spacingT(3)};
  align-items: center;

  @media ${media.md} {
    grid-template-areas:
      "title details"
      "image buttons";
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacingT(4)};
  }

  @media ${media.lg} {
    grid-template-areas:
      "main-title order-summary action-buttons"
      "product-image order-summary action-buttons";
    grid-template-columns: minmax(350px, 1.2fr) minmax(300px, 1fr) minmax(322px, 0.8fr);
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacingT(5)};
    padding: 0 ${({theme}) => theme.spacingT(3)};
  }
`;

export const ReviewTitleWrapper = styled.div`
  grid-area: title;
  @media ${media.lg} {
    grid-area: main-title;
  }
`;

export const ReviewTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.loose};
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacingT(1)};
  text-align: center;

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
    text-align: left;
  }
`;

export const OrderDetailsWrapper = styled.div`
  grid-area: details;
  @media ${media.lg} {
    grid-area: order-summary;
    padding-top: ${({theme}) => theme.spacingT(2)};
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacingT(1)};
  
  @media ${media.md} {
    align-items: flex-start;
  }
`;

export const OrderDetailItem = styled.p<{isBold?: boolean}>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme, isBold }) => isBold ? theme.typography.fontWeights.bold : theme.typography.fontWeights.regular};
  font-size: ${({ theme, isBold }) => isBold ? theme.typography.fontSizes.lg : theme.typography.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  color: ${({ theme }) => theme.colors.textDark};
`;

export const ButtonGroupWrapper = styled.div`
  grid-area: buttons;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${media.lg} {
    grid-area: action-buttons;
    justify-content: flex-start;
    padding-top: ${({theme}) => theme.spacingT(2.5)};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacingT(1.5)};
  width: 100%;
  max-width: 322px;
`;

export const ActionButton = styled.button<{ primary?: boolean }>`
  width: 100%;
  height: 42px;
  padding: 9px 20px 10px;
  background-color: ${({ theme, primary }) => primary ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: 23px;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const ProductImageWrapper = styled.div`
  grid-area: image;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }

  @media ${media.md} {
    max-width: 300px;
  }

  @media ${media.lg} {
    grid-area: product-image;
    max-width: 354px;
    margin: 0;
  }
`;