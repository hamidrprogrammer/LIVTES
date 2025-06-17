/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const HeroContainer = styled.section`
  padding-top: ${({ theme }) => `calc(${theme.sizes.navbarHeight} + ${theme.spacingT(4)})`};
  padding-bottom: ${({ theme }) => theme.spacingT(6)};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  display: flex;
  flex-direction: column;

  @media ${media.md} {
    flex-direction: row;
    min-height: 1130px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1.2;
  position: relative;
  height: 800px;

  @media ${media.md} {
    margin-right: ${({ theme }) => theme.spacingT(2)};
  }
   @media (max-width: ${media.md}) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacingT(4)};
    height: auto;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacingT(3)};

  @media ${media.md} {
    padding-left: ${({ theme }) => theme.spacingT(4)};
  }
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  color: ${({ theme }) => theme.colors.textDark};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacingT(4)};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
    text-align: left;
    position: absolute;
    width: 416px;
    top: 132px;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    left: ${({ theme }) => `calc(50% - 720px + 148px)`};
  }

   @media ${media.lg} {
    left: 148px;
   }
`;