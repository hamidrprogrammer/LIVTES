import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import {
  PromptContainer,
  PromptCard,
  IconWrapper,
  PromptTitle,
  PromptMessage,
  LoginButton
} from './LoginPrompt.styles';

interface LoginPromptProps {
  title?: string;
  message?: string;
  buttonText?: string;
}

export const LoginPrompt: React.FC<LoginPromptProps> = ({
  title = "Authentication Required",
  message = "To continue with your order and access your account details, please log in.",
  buttonText = "Go to Login Page"
}) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <PromptContainer>
      <PromptCard>
        <IconWrapper>
          <FiLock />
        </IconWrapper>
        <PromptTitle>{title}</PromptTitle>
        <PromptMessage>{message}</PromptMessage>
        <LoginButton onClick={handleLoginClick}>
          {buttonText}
        </LoginButton>
      </PromptCard>
    </PromptContainer>
  );
};
