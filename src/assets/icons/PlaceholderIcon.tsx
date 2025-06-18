import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import React from 'react';
import styled from 'styled-components';

interface PlaceholderIconProps {
  name: string;
  size?: string;
  color?: string;
}

const IconWrapper = styled.span<{ size?: string; color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size || '24px'};
  color: ${({ color, theme }) => color || theme.colors.textDark};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 4px;
  border-radius: 4px;
  min-width: ${({ size }) => size || '24px'};
  min-height: ${({ size }) => size || '24px'};
`;

const FeatureIcon = styled.div`
  height: 32px;
  width: 32px;
  margin-bottom: 8px;
  object-fit: contain;

  &.membrane-icon {
    height: 24px;
    width: 24px;
  }
`;
const PlaceholderIcon: React.FC<PlaceholderIconProps> = ({ name, size, color }) => {
  return (
    <IconWrapper size={size} color={color} aria-label={name}>
      [{name}]
    </IconWrapper>
  );
};

export default PlaceholderIcon;
