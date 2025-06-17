import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './ProductUnavailableDialog.style';
import { ListProductVariationsResponse } from '@/core/types/api/shop';

interface ProductUnavailableDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  productVariationsData:ListProductVariationsResponse | undefined;
}

export  const ProductUnavailableDialog: React.FC<ProductUnavailableDialogProps> = ({ isOpen, onConfirm ,productVariationsData}) => {
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
  useEffect(() => {
    console.log('============ProductUnavailableDialog========================');
    console.log(productVariationsData);
    console.log('===============ProductUnavailableDialog=====================');
  }, [productVariationsData])

  if (!isOpen) {
    return null;
  }

  return (
    <S.DialogOverlay data-aos="fade">
      <S.DialogCard data-aos="zoom-in" data-aos-delay="100">
        <S.DialogTitle>Change Product</S.DialogTitle>
        <S.DialogMessage>
          This product is not available in the selected country. Please select the product again.
        </S.DialogMessage>
        <S.ConfirmButton onClick={onConfirm}>
          Clear Basket & Return to Shop
        </S.ConfirmButton>
      </S.DialogCard>
    </S.DialogOverlay>
  );
};