import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import * as S from './ConfirmDialog.styles';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isLoading = false,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        <S.IconWrapper>
          <FiAlertTriangle />
        </S.IconWrapper>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ButtonContainer>
          <S.ActionButton onClick={onClose} disabled={isLoading}>
            {cancelText}
          </S.ActionButton>
          <S.ActionButton confirm onClick={onConfirm} disabled={isLoading}>
            {isLoading ? 'Processing...' : confirmText}
          </S.ActionButton>
        </S.ButtonContainer>
      </S.ModalCard>
    </S.ModalOverlay>
  );
};