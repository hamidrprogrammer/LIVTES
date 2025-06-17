/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/HomeWebPage/components/common/Button.tsx

import { PropsWithChildren } from "react";

// ...
interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'xlarge'; // Add xlarge
  className?: string;
  ariaLabel?: string;
  dataAos?: string;
  dataAosDelay?: string;
}
// ...
