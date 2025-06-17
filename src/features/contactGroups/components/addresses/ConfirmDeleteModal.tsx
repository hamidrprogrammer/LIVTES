import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiAlertTriangle } from 'react-icons/fi';
import * as S from './ConfirmDeleteModal.styles';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, isDeleting }) => {
  useEffect(() => {
    if (isOpen) {
      AOS.init({ duration: 400 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <S.ModalOverlay data-aos="fade" onClick={onClose}>
      <S.ModalCard data-aos="fade-up" data-aos-delay="50" onClick={(e) => e.stopPropagation()}>
        <S.IconWrapper>
          <FiAlertTriangle />
        </S.IconWrapper>
        <S.ModalTitle>Are you sure?</S.ModalTitle>
        <S.ModalMessage>
          Do you really want to delete this address? This process cannot be undone.
        </S.ModalMessage>
        <S.ButtonContainer>
          <S.ActionButton className="cancel" onClick={onClose} disabled={isDeleting}>
            Cancel
          </S.ActionButton>
          <S.ActionButton className="confirm" onClick={onConfirm} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </S.ActionButton>
        </S.ButtonContainer>
      </S.ModalCard>
    </S.ModalOverlay>
  );
};