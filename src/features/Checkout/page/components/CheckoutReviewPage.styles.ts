// new project/features/Checkout/page/components/CheckoutReviewPage.styles.ts
// CheckoutReviewPage.styles.ts

import AddIconSVG from '@/lib/shared/components/Besic/Icon/AddIcon';
import EditAddressIcon from '@/lib/shared/components/Besic/Icon/EditAddressIcon';
import styled from 'styled-components';

// Main Page Wrapper
export const CheckoutPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top:50px;
  padding: 40px;
  background-color: #FBFFFF;
  font-family: 'Outfit', sans-serif;
  color: #072C3D;

  @media (max-width: 1024px) { // Breakpoint adjusted for better tablet view
    flex-direction: column;
    align-items: stretch; // Ensure children take full width
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// Left Column
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  
  @media (max-width: 1024px) {
    max-width: none; // Remove max-width when stacked
  }
`;

// Right Column (Sidebar)
export const Sidebar = styled.aside`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    max-width: none; // Remove max-width when stacked
  }
`;

// Generic Card for Sections
export const SectionCard =styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 150px; /* یک ارتفاع حداقلی برای تراز بودن کارت‌ها */
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto; /* این خط دکمه‌ها را به پایین کارت می‌چسباند */
  padding-top: 16px;
`;
export const IconButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #072C3D;
  margin: 0 0 15px 0;
`;

// Address Cards
export const AddressRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // This was already correctly responsive
  }
`;

export const AddressCard = styled(SectionCard)``;

export const AddressDetails = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 20px 0;
  & > span {
    display: block;
    word-break: break-word; 
    white-space: pre-line; 
  }
`;

export const ChangeAddressButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  flex-grow: 1; /* باعث می‌شود فضای خالی باقی‌مانده را پر کند */

  &:hover {
    background-color: #e0e0e0;
    border-color: #bdbdbd;
  }
`;


export const EditIcon = styled(EditAddressIcon)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AddIcon = styled(AddIconSVG)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

// Highlighted Text (e.g., Shipping Service)
export const HighlightText = styled.span`
  color: #1C1F23;
  font-weight: 500;
`;

// Accordion-like Header
export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const AccordionIcon = styled.span`
  font-size: 12px;
  color: #555;
`;

// Inputs and Buttons
export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #EAEAEA;
  border-radius: 6px;
  font-size: 16px;
`;

// New styled components for the additional options
export const OptionsSection = styled(SectionCard)`
  margin-top: 20px; /* Space from previous card in sidebar */
  gap: 15px; /* Space between input rows */
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textGrey};
  font-weight: 500;
`;

export const InputWithButton = styled.div`
  display: flex;
  gap: 10px; /* Space between input and button */
  width: 100%;

  ${StyledInput} {
    flex-grow: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    
    ${StyledInput} {
      width: 100%; /* Full width when stacked */
    }
  }
`;

export const SetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  white-space: nowrap; /* Prevent button text from wrapping */
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textGrey};
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width when stacked */
  }
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #EAEAEA;
    border-radius: 6px;
    font-size: 16px;
    resize: vertical;
`;

export const TextAreaIcon = styled.span`
    position: absolute;
    right: 15px;
    bottom: 15px;
    color: #9CA3AF;
`;

// Shopping Cart Section
export const ShoppingCartSection = styled.div`
    margin-top: 20px;
`;

export const SectionTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const CartItemCard = styled(SectionCard)`
    display: flex;
    align-items: center;
    gap: 20px;
flex-direction: row;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
`;

export const CartItemImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 6px;
    object-fit: cover;
    
    @media (max-width: 480px) {
      width: 100%;
      height: 120px; // A bit more height for the main product image
    }
`;

export const CartItemInfo = styled.div`
    flex-grow: 1;
`;

export const CartItemName = styled.h4`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

export const CartItemArticle = styled.p`
    font-size: 14px;
    color: #6B7280;
    margin: 4px 0;
`;

export const CartItemQuantity = styled.p`
    font-size: 14px;
    color: #1F2937;
    margin: 0;
`;

export const CartItemPrice = styled.p`
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 480px) {
      align-self: flex-end; // Keep price to the right in column layout
    }
`;

// Sidebar - Overview Card
export const OverviewCard = styled(SectionCard)``;

export const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackToCartLink = styled.a`
  font-size: 14px;
  color: #0ea5e9;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const PriceRow = styled.div<{ isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 12px;
  color: ${({ isTotal }) => (isTotal ? '#1C1F23' : '#555')};
  font-weight: ${({ isTotal }) => (isTotal ? 'bold' : 'normal')};
  
  span:last-child {
    font-weight: 500;
    color: #1C1F23;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #EAEAEA;
  margin: 15px 0;
`;

export const TaxInfo = styled.p`
  font-size: 12px;
  color: #9CA3AF;
  text-align: right;
  margin-top: -8px;
  margin-bottom: 20px;
`;

export const CheckoutNowButton = styled.button`
  width: 100%;
  background-color: #072C3D;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const TermsText = styled.p`
  font-size: 12px;
  color: #6B7280;
  line-height: 1.5;
  text-align: center;
  margin-top: 15px;
`;