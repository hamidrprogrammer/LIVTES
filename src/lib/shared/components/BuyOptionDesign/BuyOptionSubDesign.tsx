import React from 'react';
import * as S from './BuyOptionDesign.styles';
import { QuantitySelectorContainer } from '@/features/BuyBottlePageMobile/components/sections/ColorPicker/ColorOptionCard.styles';
import QuantitySelector from '@/features/BuyBottlePageMobile/components/QuantitySelector/QuantitySelector';

export interface BuyOptionDesignProps {
  id: number;
  title: string;
  price: string;
  shipmentRange1?: string;
  priceForRange1?: string;
  shipmentRange2?: string;
  property1?: boolean;
  hasDiv?: boolean;
  text: string;
  onClick: (id: number) => void;
  className?: string;
  disabled?: boolean; // پراپرتی جدید اضافه شد
    handleQuantity: (optionId: number, quantity: string) => void;
   option: any;
   
  currentQuantity: number;
  onQuantityChange: (optionId: string, newQuantity: number) => void;
}

export const BuyOptionSubDesign = ({
  id,
  title,
  price,
  shipmentRange1,
  priceForRange1,
  shipmentRange2,
  property1,
  onClick,
  handleQuantity,
  currentQuantity,
  className,
  option,
  product,
  disabled = false, // مقدار پیش‌فرض false
}: BuyOptionDesignProps): JSX.Element => {
  const hasShipmentDetails = shipmentRange1 || shipmentRange2;

  const handleClick = () => {
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <S.CardWrapper
      className={className}
      $isActive={property1}
      onClick={handleClick}
      $isDisabled={disabled} // پاس دادن به عنوان پراپ استایل
      role="radio"
      aria-checked={property1}
      aria-disabled={disabled} // برای دسترسی‌پذیری بهتر
      tabIndex={disabled ? -1 : 0}
    >
      <S.MainContent>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.MainContent>

      {hasShipmentDetails && (
        <>
          <S.Divider />
          <S.ShipmentDetails>
            {shipmentRange1 && priceForRange1 && (
              <S.ShipmentRow>
                <S.ShipmentLabel>Shipments 1 - {shipmentRange2}</S.ShipmentLabel>
                  <S.ShipmentPrice>{price}</S.ShipmentPrice>
              </S.ShipmentRow>
            )}
            {shipmentRange2 && (
              <S.ShipmentRow>
                <S.ShipmentLabel>Shipment 13+</S.ShipmentLabel>
                <S.ShipmentPrice>{priceForRange1}</S.ShipmentPrice>

              </S.ShipmentRow>
            )}
          </S.ShipmentDetails>
         
        </>
      )}
    </S.CardWrapper>
  );
};

export default React.memo(BuyOptionSubDesign);