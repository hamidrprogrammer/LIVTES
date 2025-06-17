// src/components/Logo/Logo.tsx
import React from 'react';
import { LogoWrapper } from './Logo.styles';

// اینترفیس برای پراپ‌های کامپوننت Logo
interface LogoProps {
  color?: string;     // برای تغییر رنگ لوگو در بخش‌های مختلف (مثلاً فوتر)
  fontSize?: string;  // برای تغییر اندازه فونت لوگو
  href?: string;      // اگر لوگو یک لینک است
}

const Logo: React.FC<LogoProps> = ({ color, fontSize, href = '/' }) => {
  const logoContent = <LogoWrapper color={color} fontSize={fontSize}>LumiVitae</LogoWrapper>;

  if (href) {
    return (
      <a href={href} aria-label="LumiVitae Home" style={{ textDecoration: 'none' }}>
        {logoContent}
      </a>
    );
  }
  return logoContent;
};

export default Logo;