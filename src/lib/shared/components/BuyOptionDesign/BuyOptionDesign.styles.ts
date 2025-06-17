import { responsive } from '@/core/theme/responsive';
import styled, { css } from 'styled-components';

interface WrapperProps {
  $property1?: boolean; // Using $ prefix for transient prop
  $hasDiv?: boolean;    // Using $ prefix for transient prop
}

export const Wrapper = styled.div<WrapperProps>`
  /* Base styles for BuyOptionDesign */
  width: 100%; // اصلاح شده: عرض واکنش‌گرا
  max-width: 375px; // اضافه شده: حفظ حداکثر عرض اصلی
  height: 100%;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border-radius: 12px;

  /* Example conditional styling based on props */
  ${props =>
    props.$hasDiv &&
    css`
      /* border-left: 5px solid #60c9da; // Example style when hasDiv is true */
      /* Add specific styles if 'hasDiv' means something visually */
    `}

  ${props =>
    props.$property1  && // Example variant
    css`
      color:rgb(255, 255, 255);
    `}
`;

export const CardWrapper = styled.div<{ $isActive?: boolean; $isDisabled?: boolean; }>`
  box-sizing: border-box;
  width: 100%;
  max-width: 370px;
  min-height: 96px;
  border-radius: 12px;
  padding: 20px 24px;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  
  display: flex;
  flex-direction: column;
  gap: 14px;

  background-color: #FFFFFF;
  border: 2px solid ${({ theme, $isActive, $isDisabled }) => 
    $isDisabled ? theme.colors.textGrey : 
    $isActive ? theme.colors.primary : theme.colors.greyLight};
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease-in-out;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.6 : 1)};

  ${({ $isDisabled }) => !$isDisabled && css`
    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    }
  `}

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primary.replace(')', ', 0.3)')};
      background-color: #F8FEFF;
    `}
  
  ${responsive.mobile(`
    padding: 16px; // اصلاح شده: کاهش پدینگ در موبایل
  `)}
`;

export const TextPrimary = styled.div`
  color: #1c1f23;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  white-space: normal; // اصلاح شده: اجازه به شکستن متن
`;

export const TextSecondary = styled.div<WrapperProps>`
  color: #a7b1b9;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  white-space: normal; // اصلاح شده: اجازه به شکستن متن
  width:100%;
   ${props =>
    props.$property1  && // Example variant
    css`
      color:rgb(255, 255, 255);
      font-size: 25px;
    `}
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: 1.25rem; /* 20px */
  color: ${({ theme }) => theme.colors.textDark};

  ${responsive.mobile(`
    font-size: 1.1rem; // اصلاح شده: کاهش اندازه فونت در موبایل
  `)}
`;

export const Price = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: 1.25rem; /* 20px */
  color: ${({ theme }) => theme.colors.primary};

  ${responsive.mobile(`
    font-size: 1.1rem; // اصلاح شده: کاهش اندازه فونت در موبایل
  `)}
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.greyLight};
  width: 100%;
  margin: 0;
`;

export const ShipmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ShipmentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShipmentLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  font-size: 0.9rem; /* 14px */
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const ShipmentPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  font-size: 0.9rem; /* 14px */
  color: ${({ theme }) => theme.colors.textGrey};
`;
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RadioIcon = styled.div<{ $isActive?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.greyLight)};
  position: relative;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; // اضافه شده: جلوگیری از کوچک شدن آیکون

  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(${({ $isActive }) => ($isActive ? 1 : 0)});
    transition: transform 0.2s ease-in-out;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;