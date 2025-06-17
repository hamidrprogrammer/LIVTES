/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  CardContainer,
  CardContent,
  CardTitle,
  CardDescription,
} from './InfoCard.styles';

interface InfoCardProps {
  title: string;
  description: string | React.ReactNode; // Allow for JSX in description (e.g. line breaks)
  buttonText: string;
  onButtonClick: () => void;
  backgroundImageUrl?: string;
  gradientOverlay?: string; // e.g., 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)'
  className?: string;
  dataAos?: string;
  dataAosDelay?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  backgroundImageUrl,
  gradientOverlay,
  className,
  dataAos,
  dataAosDelay,
}) => {
  return (
    <CardContainer
      className={className}
      backgroundImageUrl={backgroundImageUrl}
      gradientOverlay={gradientOverlay}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {/* <Button
          onClick={onButtonClick}
          variant="ghost" // Accent background, dark text for these cards
          size="small"
          ariaLabel={buttonText}
        >
          {buttonText}
        </Button> */}
      </CardContent>
    </CardContainer>
  );
};
