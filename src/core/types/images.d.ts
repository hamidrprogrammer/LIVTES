/* eslint-disable @typescript-eslint/no-require-imports */
// src/core/types/images.d.ts
// Consolidated image type definitions

declare module "*.png" {
  const value: string; // Path to the image
  export default value;
}

declare module "*.svg" {
  // For SVGs imported as React components (e.g., using @svgr/webpack)
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // Path to the SVG file
  export default src;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}
