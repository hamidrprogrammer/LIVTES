import styled from 'styled-components';

export const ItemWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: ${({ theme }) => theme.spacing.md} 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  text-align: left;
  cursor: pointer;

  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    color: ${({ theme }) => theme.colors.accent};
    margin: 0;
    flex-grow: 1;
  }

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

export const AnswerPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.md} 0; // Closest spacing token to 1.5 * 8 = 12px
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.loose};
  color: ${({ theme }) => theme.colors.textDark};
  opacity: 0.7;

  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out, padding 0.5s ease-out, opacity 0.5s ease-out;

  &.open {
    max-height: 500px;
    opacity: 1;
  }
`;