// src/components/Button/Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles'; // وارد کردن استایل‌ها

// اینترفیس برای پراپ‌های کامپوننت Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // محتوای دکمه (متن یا آیکون)
  variant?: 'primary' | 'secondary' | 'tertiary'; // نوع دکمه
  fullWidth?: boolean; // آیا تمام عرض را بگیرد؟
  onClick?: () => void; // تابع برای رویداد کلیک
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // نوع پیش‌فرض primary
  fullWidth = false,
  onClick,
  disabled,
  type = 'button', // نوع پیش‌فرض HTML برای دکمه
  ...props // سایر پراپ‌های استاندارد HTMLButtonElement
}) => {
  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;