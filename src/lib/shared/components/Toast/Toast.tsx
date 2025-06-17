// ge/lib/shared/components/Toast/Toast.tsx
import React, { useEffect } from 'react';
import { useToastStore } from '../../stores/toastStore';
import { ToastWrapper, ToastIcon, ToastMessage, CloseButton } from './Toast.styles';
import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';

const Toast: React.FC = () => {
  const { isOpen, message, type, hideToast } = useToastStore();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideToast();
      }, 6000); // Auto-hide after 6 seconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen, hideToast]);

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <FiAlertCircle />;
      case 'success':
        return <FiCheckCircle />;
      default:
        return <FiInfo />;
    }
  };
  
  // We no longer return null; the component is always in the DOM
  // and visibility is controlled by CSS for smoother animations.
  return (
    <ToastWrapper type={type} $isOpen={isOpen} role="alert">
      <ToastIcon>{getIcon()}</ToastIcon>
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={hideToast} aria-label="Close notification">&times;</CloseButton>
    </ToastWrapper>
  );
};

export default Toast;