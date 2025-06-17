import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  backdrop-filter: blur(4px);
`;

export const ModalCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  width: 90%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 8px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0;
`;

export const ModalMessage = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0 0 16px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column-reverse; // Stack buttons vertically, cancel below confirm
    gap: 12px;
  }
`;

export const ActionButton = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &.confirm {
    background-color: ${({ theme }) => theme.colors.accentRed};
    color: white;
    &:hover {
      opacity: 0.85;
    }
  }

  &.cancel {
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.textGrey};
    &:hover {
      background-color: #f3f4f6;
      border-color: #d1d5db;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;