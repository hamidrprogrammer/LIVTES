import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const HydrogenSectionContentContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 20px 100px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  ${media.tablet} {
    justify-content: center;
    text-align: center;
    padding: 40px 20px 80px;
  }

  @media (max-width: 768px) {
    padding: 30px 15px 60px;
    flex-direction: column;  /* موبایل: چیدمان ستونی */
    align-items: center;    /* وسط چین کردن عمودی */
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 520px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: clamp(30px, 10vw, 180px);

  ${media.tablet} {
    max-width: 600px;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;   /* حذف فاصله سمت راست برای موبایل */
    padding: 0 10px;   /* فضای داخلی کم برای حاشیه */
    text-align: center; /* متن وسط چین شود */
  }
`;

export const IngredientTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size};
  line-height: 120%;
  margin-bottom: 15px;

  ${media.tablet} {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px; /* کمی کمتر برای موبایل */
  }
`;

export const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px; /* کمی کمتر برای موبایل */
  }
`;

export const DescriptionList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily}; /* اصلاح تایپ */
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 130%;
  max-width: 440px;

  li {
    margin-bottom: 10px;
    padding-left: 25px;
    position: relative;

    &::before {
      content: '●';
      color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 0;
      font-size: 14px;
      top: 4px;
    }
  }
  
  ${media.tablet} {
    max-width: 100%;
    li {
      padding-left: 0;
      text-align: left;
      &::before {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
    li {
      margin-bottom: 8px;
      padding-left: 0;
      text-align: center; /* موبایل: متن لیست وسط چین */
      &::before {
        display: none;
      }
    }
  }
`;
