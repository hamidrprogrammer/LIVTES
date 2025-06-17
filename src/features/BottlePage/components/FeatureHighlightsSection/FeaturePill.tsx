import React from 'react';
import styled, { css } from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';

interface FeaturePillProps {
  text: string | React.ReactNode;
  aosName?: string;
  aosDelay?: string;
  ellipsePosition?: 'left' | 'right';
  customStyles?: React.CSSProperties; // For specific positioning from styles.ts
  height?: string; // To accommodate the 43px height for one pill
}

const PillWrapper = styled.div<{ height?: string }>`
  display: inline-flex; // Changed from 'flex' to allow inline-block like behavior if needed
  flex-direction: row;
  align-items: center;
  padding: 9px 20px; // Default padding, can be adjusted
  gap: ${({ theme }) => theme.spacing.sm}; // Reduced gap for 20px from Figma spec
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${({ theme }) => theme.colors.accentCyan};
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  color: ${({ theme }) => theme.colors.accentCyan};
  height: ${({ height }) => height || '67px'}; // Default height 67px from Figma
  box-sizing: border-box;
  position: absolute; // Will be positioned by its parent

  @media (max-width: 768px) {
    position: static; // Stack them on mobile
    width: 100%;
    max-width: 300px; // Limit width on mobile
    margin-bottom: ${({ theme }) => theme.spacing.md};
    justify-content: center;
    height: auto; // Auto height on mobile
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const Ellipse = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 50px rgba(63, 255, 248, 0.3);
  border-radius: 50%;
  flex-shrink: 0;
`;

const PillText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 20px; // Figma spec
  line-height: 1.2; // or 24px
  color: inherit; // Inherits from PillWrapper

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const FeaturePill: React.FC<FeaturePillProps> = ({
  text,
  aosName = "fade-up",
  aosDelay,
  ellipsePosition = 'left', // Default based on Frame 16, 17, 18
  customStyles,
  height,
}) => {
  return (
    <PillWrapper
      style={customStyles}
      data-aos={aosName}
      data-aos-delay={aosDelay}
      height={height}
    >
      {ellipsePosition === 'left' && <Ellipse />}
      <PillText>{text}</PillText>
      {ellipsePosition === 'right' && <Ellipse />}
    </PillWrapper>
  );
};

export default FeaturePill;
