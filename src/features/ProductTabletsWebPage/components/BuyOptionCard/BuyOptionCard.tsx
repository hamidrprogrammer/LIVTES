import React from 'react';
import {
  CardWrapper,
  CardContent,
  Title,
  Subtitle,
  Price,
  BottleImage,
} from './BuyOptionCard.styles';

/**
 * Card props ­– extends *all* regular div props (className, style, data-*, aria-*, …)
 * but replaces the native onClick with a custom handler that receives the card id.
 */
export interface BuyOptionCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  id: string;
  title: string;
  subtitle: string;
  price?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isBottleCard?: boolean;
  bottleImageSrc?: string;
  onCardClick: (id: string) => void;

  /** AOS animate-on-scroll attributes (kept explicit for auto-complete) */
  'data-aos'?: string;
  'data-aos-delay'?: string;
}

export const BuyOptionCard: React.FC<BuyOptionCardProps> = ({
  id,
  title,
  subtitle,
  price,
  isActive,
  isDisabled,
  isBottleCard,
  bottleImageSrc,
  onCardClick,
  ...restProps // includes className, style, data-*, etc.
}) => {
  const handleClick = () => {
    if (!isDisabled) onCardClick(id);
  };

  return (
    <CardWrapper
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={handleClick}
      className={isBottleCard ? 'bottle-card' : ''}
      {...restProps}
    >
      <CardContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardContent>

      {price && (
        <Price className={price === '€xx.xx' && isDisabled ? 'hidden-price' : ''}>
          {price}
        </Price>
      )}

      {isBottleCard && bottleImageSrc && (
        <BottleImage src={bottleImageSrc} alt="Bottle" />
      )}
    </CardWrapper>
  );
};
