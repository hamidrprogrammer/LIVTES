// ge/new project/features/storeCredit/components/StoreCreditCard.styles.ts
import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Amount = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin: 8px 0 0 0;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const InfoBlock = styled.div``;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.85rem;
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  word-break: break-all;
`;

export const Badge = styled.span<{ isActive: boolean }>`
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.accentRed : theme.colors.accentGreen};
  flex-shrink: 0; // Prevent badge from shrinking
  text-align: center;
`;