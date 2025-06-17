// styles/responsive.ts
export const responsive = {
  mobile: (css: string) => `@media (max-width: 480px) { ${css} }`,
  tablet: (css: string) => `@media (max-width: 768px) { ${css} }`,
  medium: (css: string) => `@media (max-width: 1024px) { ${css} }`,
  large: (css: string) => `@media (min-width: 1440px) { ${css} }`,
};