// ge/new project/features/orders/components/OrderCard.styles.ts
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top:10px;
  transition: all 0.3s ease;
  border-left: 5px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-left-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px 24px;
  align-items: center;
  width: 100%;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textGrey};
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const Value = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  word-break: break-word;
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 5px 12px;
  border-radius: 16px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  width: fit-content;

  ${({ status, theme }) => {
    switch (status?.toLowerCase()) {
      case 'paid':
        return css`
          background-color: #D1FAE5;
          color: #065F46;
        `;
      case 'not_paid':
      case 'unpaid':
        return css`
          background-color: #FEE2E2;
          color: #991B1B;
        `;
      case 'processing':
        return css`
          background-color: #DBEAFE;
          color: #1E40AF;
        `;
      case 'shipped':
         return css`
          background-color: #E0E7FF;
          color: #3730A3;
        `;
      default:
        return css`
          background-color: #F3F4F6;
          color: #4B5563;
        `;
    }
  }}
`;

export const Actions = styled.div`
  text-align: right;

  @media (min-width: 960px) {
      grid-column: -2 / -1;
      align-self: center;
      justify-self: end;
  }

  @media (max-width: 480px) {
    // Let the button take full width of its grid cell
    // and center the text inside the button itself
    & > * { 
      width: 100%;
      justify-content: center;
    }
  }
`;

export const ViewDetailsButton = styled(Link)`
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.textDark};
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
    }
`;