/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  CardContainer,
  CardContent,
  CardTitle,
  CardDescription,
} from './ProductCard.styles';
// import { Button } from '../common/Button';

interface ProductCardProps {
  title: string;
  description: string | React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
  backgroundImageUrl?: string;
  backgroundColor?: string; // Fallback or base color for the card
  className?: string;
  dataAos?: string;
  dataAosDelay?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  backgroundImageUrl,
  backgroundColor,
  className,
  dataAos,
  dataAosDelay,
}) => {
  return (
    <CardContainer
      className={className}
      backgroundImageUrl={backgroundImageUrl}
      backgroundColor={backgroundColor}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {/* <Button
          onClick={onButtonClick}
          variant="secondary" // White background, dark text as per Figma for these
          size="small"
          ariaLabel={buttonText}
        >
          {buttonText}
        </Button> */}
      </CardContent>
    </CardContainer>
  );
};
