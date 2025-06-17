import styled from 'styled-components';

const theme = {
    colors: {
        primary: '#007BFF',
        primaryDark: '#1F2937',
        text: '#374151',
        textGrey: '#6B7280',
        background: '#F9FAFB',
        white: '#FFFFFF',
        borderColor: '#E5E7EB',
        success: '#10B981',
        warning: '#F59E0B',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    shadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
};

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
    gap: ${theme.spacing.md};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.borderColor};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; // Align items to the start
    gap: ${theme.spacing.lg};
  }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
`;

export const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.primaryDark};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    width: 100%; // Take full width to align buttons
  }
`;

export const SecondaryActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderColor};
  background-color: transparent;
  color: ${theme.colors.textGrey};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primaryDark};
    color: ${theme.colors.primaryDark};
  }
`;

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 350px; 
  gap: ${theme.spacing.xl};
  align-items: flex-start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const RightColumn = styled.aside`
  position: sticky;
  top: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  
  @media (max-width: 1024px) {
    position: static;
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadow};
  width: 100%;

  @media (max-width: 480px) {
    padding: ${theme.spacing.md};
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.colors.primaryDark};
  margin: 0 0 ${theme.spacing.md} 0;
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.borderColor};
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

export const AddressDetails = styled.div`
  line-height: 1.6;
  font-size: 0.9rem;
  color: ${theme.colors.text};
`;

export const PriceDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.md};
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.textGrey};
  font-size: 0.9rem;

  span:last-child {
    font-weight: 500;
    color: ${theme.colors.text};
  }
`;

export const TotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: ${theme.colors.primaryDark};
    margin-top: ${theme.spacing.md};
    padding-top: ${theme.spacing.md};
    border-top: 2px solid ${theme.colors.borderColor};
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.shadow};

  @media (max-width: 480px) {
    padding: ${theme.spacing.md};
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const SummaryLabel = styled.span`
  font-size: 0.75rem;
  color: ${theme.colors.textGrey};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const SummaryValue = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${theme.colors.primaryDark};
  word-break: break-word;

  &.status {
    font-weight: bold;
  }
`;

export const SidebarActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

export const PrimaryActionButton = styled.button`
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sm};
    transition: all 0.2s ease-in-out;

    &.pay {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:hover:not(:disabled) {
            filter: brightness(1.1);
            transform: translateY(-2px);
        }
    }
    
    &.buy-again {
        background-color: ${theme.colors.borderColor};
        color: ${theme.colors.primaryDark};
        &:hover:not(:disabled) {
            background-color: #D1D5DB;
            transform: translateY(-2px);
        }
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const AdyenWrapper = styled.div`
    margin-top: ${theme.spacing.lg};
    padding-top: ${theme.spacing.lg};
    border-top: 1px solid ${theme.colors.borderColor};
`;

export const StatusMessage = styled.p`
    text-align: center;
    padding: ${theme.spacing.xl};
    font-size: 1.1rem;
    color: ${theme.colors.textGrey};
`;
