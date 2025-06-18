// new project/lib/shared/components/Besic/Icon/AddIcon.tsx
import React from 'react';

export const AddIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5" // کمی ضخیم‌تر برای دیده شدن بهتر
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export default AddIconSVG;