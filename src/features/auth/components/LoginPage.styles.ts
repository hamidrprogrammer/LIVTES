// src/components/LoginPage/LoginPage.styles.ts
import styled, { keyframes, css } from 'styled-components';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Layout
export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const Panel = styled.div<{ variant: 'visual' | 'form' }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  box-sizing: border-box;

  ${({ variant, theme }) =>
    variant === 'visual' &&
    css`
      background: linear-gradient(160deg, ${theme.colors.primaryDark} 0%, ${theme.colors.accent} 100%);
      color: ${theme.colors.white};
      text-align: center;
      @media (max-width: 768px) {
        display: none;
      }
    `}

  ${({ variant, theme }) =>
    variant === 'form' &&
    css`
      background-color: ${theme.colors.primary};
    `}
`;

export const LogoContainer = styled.div`
  max-width: 180px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Tagline = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}
  line-height: 1.3;
  margin: 0;
  max-width: 400px;
`;

// Form
export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;bold
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledForm = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const InputWrapper = styled.div`
  position: relative;
`;

const IconStyle = css`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textGrey};
  
`;

export const EmailIcon = styled(FiMail)`${IconStyle}`;
export const LockIcon = styled(FiLock)`${IconStyle}`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 48px`};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDark}; // <--- تغییر در این خط
 
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(96, 201, 218, 0.3);
    & + svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const StyledLink = styled.a<{ bold?: boolean }>`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  
  font-weight: ${({ theme, bold }) => bold ? theme.typography.fontWeightLight: 'inherit'};
  
  ${({ theme, bold }) => bold && `color: ${theme.colors.accent};`}

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  cursor: pointer;
  min-width: 120px;
  min-height: 47px; // to prevent size change on loading

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(96, 201, 218, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;
  }

  .spinner {
    animation: ${spin} 1s linear infinite;
  }
`;

export const FormError = styled.p`
  color: ${({ theme }) => theme.colors.accentRed};
  background-color: rgba(211, 47, 47, 0.1);
  border: 1px solid rgba(211, 47, 47, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-size: 0.9rem;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
export const InlineError = styled.div`
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 0.875rem; /* 14px */
  padding-top: ${({ theme }) => theme.spacing.sm};
  animation: ${fadeIn} 0.3s ease-in-out;
`;
export const FooterText = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const LegalLinksContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const LegalLink = styled(Link)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;