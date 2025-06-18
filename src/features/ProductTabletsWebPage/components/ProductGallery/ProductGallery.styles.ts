import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

export const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.lightTealBackground};
  border-radius: 0px 10px 10px 0px;
  overflow: hidden;

  @media ${media.md} {
    width: 853px;
    height: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;

  @media ${media.md} {
  }
`;

export const GalleryControls = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacingT(2)};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingT(1)};
  z-index: 10;
`;

export const Dot = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.textGrey};
  opacity: ${({ isActive }) => isActive ? 1 : 0.5};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

   @media ${media.md} {
    ${({ direction }) => direction === 'left' ? 'left: 3.65%;' : 'right: auto; left: 55.56%;'}
    top: 19.18%;
    background: transparent;
    opacity: ${({ direction }) => direction === 'left' ? 0.25 : 1};
     svg {
        font-size: 16px;
     }
  }
`;