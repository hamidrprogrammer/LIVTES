// src/features/IntroSection/IntroSection.styles.ts
import styled from 'styled-components';
import Section from '../../components/Section/Section';
import Text from '../../../../lib/shared/components/Besic/Typography/Text';

export const IntroCustomSection = styled(Section)`
  /* min-height: 964px; from Figma - can be dynamic based on content */
  /* Section base provides padding. Default is 60px Y, 16px X */
`;

export const DownArrowIcon = styled.div`
  /* Vector icon from Figma: width: 15.96px; background: #3FFFF8; */
  margin-bottom: ${({ theme }) => theme.spacing.xxl}; /* Spacing after icon */
  svg {
    width: 20px;
    height: auto;
    path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const IntroTitle = styled(Text)`
  /* variant 'bodyLarge' for 40px (which is sectionTitleLarge in Text now) or create new variant */
  /* color #072C3D */
  max-width: 322px; /* From Figma */
  margin: 0 auto ${({ theme }) => theme.spacing.xl}; /* Center and space below */
`;

export const IntroBody = styled(Text)`
  /* variant 'bodyLarge' for 30px text */
  /* color #072C3D */
  max-width: 330px; /* From Figma */
  margin: 0 auto;
  /* Figma has two overlapping text blocks, one with opacity 0.25.
     This implies a "read more" or truncated text. For now, one block.
  */
`;
