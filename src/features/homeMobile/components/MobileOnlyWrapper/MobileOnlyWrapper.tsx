// src/components/MobileOnlyWrapper/MobileOnlyWrapper.tsx
import React from 'react';
import { Wrapper } from './MobileOnlyWrapper.styles';
import Text from '../Typography/Text'; // Using Text component for consistency

interface MobileOnlyWrapperProps {
  children: React.ReactNode;
}

const MobileOnlyWrapper: React.FC<MobileOnlyWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <div className="desktop-message">
        <Text size="xl" weight={500} color="textDark">
          This experience is optimized for mobile.
        </Text>
        <Text size="medium" color="textDark" style={{ marginTop: '16px' }}>
          Please view on a mobile device for the best experience.
        </Text>
      </div>
      <div className="mobile-content">
        {children}
      </div>
    </Wrapper>
  );
};

export default MobileOnlyWrapper;
