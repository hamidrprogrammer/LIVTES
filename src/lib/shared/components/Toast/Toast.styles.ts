// ge/lib/shared/components/Toast/Toast.styles.ts
import styled from 'styled-components';

// Helper function to get the right color based on the notification type
const getBackgroundColor = (type: string, theme: any) => {
  switch (type) {
    case 'error':
      return theme.colors.accentRed || '#D32F2F'; // A strong red
    case 'success':
      return '#22C55E'; // A nice green color
    default:
      return theme.colors.primaryDark; // Default info color
  }
};

export const ToastWrapper = styled.div<{ type: string; $isOpen: boolean }>`
  position: fixed;
  top: 80px;
  right: 30px;
  background-color: ${({ type, theme }) => getBackgroundColor(type, theme)};
  color: white;
  padding: 16px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  max-width: 450px;
  min-width: 300px;
  
  /* --- New Animation --- */
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(120%)')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s;
  
  @media (max-width: 768px) {
    top: auto;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: auto;
    max-width: none;
    /* Adjust animation for mobile if needed */
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(120%)')};
  }
`;

export const ToastIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0; // Prevent icon from shrinking
`;

export const ToastMessage = styled.div`
  line-height: 1.5;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.7;
  padding: 0 0 0 16px;
  margin-left: auto; // Pushes the button to the far right

  &:hover {
    opacity: 1;
  }
`;