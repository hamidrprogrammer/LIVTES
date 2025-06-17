// src/sections/Intro/Intro.tsx
import React from 'react';
import { IntroSectionContainer, Title } from './Intro.styles';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';

const Intro: React.FC = () => {
  // اتصال هوک به عنصر سکشن برای انیمیشن هنگام ورود به دید
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({
    triggerOnce: true, // انیمیشن فقط یک بار اجرا شود
    threshold: 0.2,    // وقتی 20% عنصر دیده شد، انیمیشن فعال شود
  });

  return (
    <IntroSectionContainer ref={elementRef} $isVisible={isVisible}>
      <Title>Place your LumiVitae order</Title>
    </IntroSectionContainer>
  );
};

export default Intro;