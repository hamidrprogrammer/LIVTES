// src/routes/ResponsiveRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsMobile } from './core/hooks/useIsMobile';

interface ResponsiveRouteProps {
  mobileComponent: React.ReactElement;
  desktopComponent: React.ReactElement;
}

export const ResponsiveRoute: React.FC<ResponsiveRouteProps> = ({
  mobileComponent,
  desktopComponent,
}) => {
  const isMobile = useIsMobile();
  
  return isMobile ? mobileComponent : desktopComponent;
};
