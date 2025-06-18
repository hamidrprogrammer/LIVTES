import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import styled from 'styled-components';

export const CardWrapper = styled.div<{ isActive?: boolean; isDisabled?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  max-width: 435px;
  height: 96px;
  border: 1px solid ${({ theme, isActive }) => isActive ? theme.colors.accent : theme.colors.borderColor};
  background-color: ${({ theme, isActive, isDisabled }) => 
    isActive ? theme.colors.lightTealBackground : 
    isDisabled ? 'transparent' : theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacingT(2.5)} ${({ theme }) => theme.spacingT(3)};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme, isDisabled }) => isDisabled ? theme.colors.borderColor : theme.colors.accent};
    box-shadow: ${({ isDisabled }) => isDisabled ? 'none' : '0 4px 12px rgba(0,0,0,0.1)'};
  }

  &.bottle-card {
    background: ${({ theme }) => theme.colors.lightTealBackground};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacingT(0.5)};
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const Price = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  color: ${({ theme }) => theme.colors.textGrey};
  text-align: right;
  position: absolute;
  bottom: ${({ theme }) => theme.spacingT(2.5)};
  right: ${({ theme }) => theme.spacingT(3)};

  &.hidden-price {
    visibility: hidden;
  }
`;

export const BottleImage = styled.div`
  position: absolute;
  width: 113px;
  height: auto;
  right: ${({ theme }) => theme.spacingT(1)};
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0px 0px 0px 10px;
  width: 80px;
  height: auto;
`;