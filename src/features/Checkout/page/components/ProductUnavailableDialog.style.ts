import styled from 'styled-components';

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; // A high z-index to be on top of everything
`;

export const DialogCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 90%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const DialogTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const DialogMessage = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const ConfirmButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;