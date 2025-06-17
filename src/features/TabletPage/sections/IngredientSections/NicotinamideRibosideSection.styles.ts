import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';


export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #131416;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet} {
    height: auto;
    min-height: 700px;
    padding: 80px 20px;
    justify-content: center;
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px; /* بهینه شده */
    padding: 50px 15px; /* کمی کمتر از قبل */
    text-align: center;
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 520px;
  padding-left: clamp(30px, 10vw, 148px);
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    max-width: 600px;
    padding-left: 0;
    text-align: center;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
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
  }
`;

export const Description = styled.p<{isBold?: boolean}>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme, isBold }) => (isBold ? theme.typography.fontWeightBold : theme.typography.fontWeightMedium)};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 485px;

  ${media.tablet} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 695px;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-height: 923px;
    object-fit: cover;
    transform: scaleX(-1);
  }

  ${media.tablet} {
    position: relative;
    width: 80%;
    max-width: 500px;
    height: auto;
    margin: 0 auto 30px auto;
    order: -1;

    img {
      max-height: 600px;
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;

    img {
      max-height: 450px;
      object-fit: cover; /* اضافه شده برای حفظ تناسب */
      transform: scaleX(1); /* جهت تصویر به حالت عادی در موبایل */
    }
  }
`;
