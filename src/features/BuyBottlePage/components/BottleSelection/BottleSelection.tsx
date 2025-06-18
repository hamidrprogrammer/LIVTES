import React, { useState, useEffect } from 'react';
import { BottleOptionCard } from './BottleOptionCard';
import * as S from './BottleSelection.styles';
import { OrderState } from '@/core/types';
import { ProductVariation } from '@/core/types/api/shop';

type BottleOption = {
  id: string;
  title: string;
  volume: string;
  price: string;
  colorGradient: string;
  WrapperComponent?: React.ComponentType<{ children: React.ReactNode }>;
};

type BottleSelectionProps = {
  data: { data: ProductVariation[] } | undefined;
  onOrderUpdate: (order: Partial<OrderState>) => void;
};

// Fallback wrapper if none is provided
const DefaultWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

export const BottleSelection = ({ data, onOrderUpdate }: BottleSelectionProps): JSX.Element => {
  const [selectedBottleId, setSelectedBottleId] = useState<number>(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    graphite: 1,
    gold: 0,
  });

  useEffect(() => {
    const selected = data?.data?.find((bottle) => bottle.id === selectedBottleId);
    const quantity = quantities[selectedBottleId];

   
  }, [selectedBottleId, quantities, onOrderUpdate, data]);

  const handleSelect = (id: string) => {
    setSelectedBottleId(id);
    if (quantities[id] === 0) {
      setQuantities((prev) => ({ ...prev, [id]: 1 }));
    }
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  return (
    <S.SectionContainer>
      {data?.data?.map((option) => {
         
         
         
        return (
          
            <BottleOptionCard
              title={option.name}
              volume={option.quantity}
              price={option.sale_price.gross_value_after_discount_string}
              initialQuantity={quantities[option.id] ?? 0}
              colorGradient={""}
              isSelected={selectedBottleId === option.id}
              onQuantityChange={(qty) => handleQuantityChange(option.id, qty)}
            />
       
        );
      })}
    </S.SectionContainer>
  );
};

export default BottleSelection;
