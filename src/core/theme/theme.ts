import { Interpolation } from "styled-components";

export interface Theme {
  colors: {

    buttonBackgroundHover: 'rgba(255, 255, 255, 0.2)',

    // From Theme 1 & 2 (Theme 2 values prioritized for overlap)
    primary: string;
    secondary: string;
    background: string;
    backgroundT: '#000000', // Common page background

    lightBackground: string;
    textDark: string;
    textLight: string;
    textGrey: string;
    accent: string;
    white: string;
    borderColor: string;
    disabledText: string;
    lightTealBackground: string;
    faqBackground: string;
    footerBackground: string;

    // From Theme 2 (potentially new or different)
    primaryDark: string;
    backgroundLight: string; // Note: Theme 1 also had lightBackground
    backgroundDark: string;
    accentCyan: string;
    accentPink: string;
    accentBlue: string;
    black: string;
    greyLight: string;
    greyMedium: string;
    greyDark: string;
    gradientCTAStart: string;
    gradientCTAEnd: string;

    textPrimary: '#FFFFFF',
    textSecondary: '#1C1F23', // Used for button text on white background
   
    lightBlue: '#CEECF1', // From footer logo
  
    ctaGradientStart: '#072C3D',
    ctaGradientEnd: '#000000',
    buttonText: '#3FFFF8',
    buttonBorder: '#3FFFF8',

    pink: '#FF7ED3',
    darkBlueGray: '#080818',
    inputBackground: 'rgba(255, 255, 255, 0.1)',
    cardBackground: 'rgba(8, 8, 24, 0.6)', // 
     
  darkBackground: '#001520', // Dark theme background (very dark blue)
  text: '#333333', // Standard text color for light backgrounds
  lightText: '#ffffff', // Standard text color for dark backgrounds
  grey: '#f8f8f8', // Light grey, often for backgrounds or dividers
  mediumGrey: '#A7B1B9', // From BuyBottlePage design
  darkGrey: '#555555', // Darker grey, for secondary text or elements
 
    lightGrey: '#EEEEEE',
    buttonTextDark: '#03171F',
    footerText: '#FFFFFF',
    footerLinkHover: '#3FFFF8',
    cardOverlayLight: 'rgba(2, 22, 19, 0)', // For Vision
    cardOverlayDark: '#021613', //
  // Accents from various pages
// From BottlePage (section-nine)
  accentPurple: '#8919F5', // ChromoColours
  accentGreen: '#22F51B', // ChromoColours
  accentYellow: '#F5DF19', // ChromoColours
  accentOrange: '#FE781C', // ChromoColours
  accentRed: '#FE241C', // ChromoColours

  bottleGraphiteText: '#1C1F23', // Text on graphite bottle option
  bottleGraphiteBg: 'rgb(61, 62, 66)', // Background for graphite bottle
  bottleGoldBg: 'rgb(173, 161, 113)', // Background for gold bottle
  
  checkoutBg: '#EAF9F9', // Background for checkout/review order section
  faqBg: 'rgba(234, 248, 248, 0.5)', // FAQ section background
  faqLink: '#60C9DA', // FAQ link color
  faqText: '#405F6C', // FAQ paragraph text      // سبزآبی روشن (تیل) برای دکمه‌ها و هایلایت‌ها
    backgroundPage: '#FBFFFF',  // پس‌زمینه اصلی صفحه
         // رنگ متن سفید
           // مشابه secondary
    accentLight: '#CEECF1',     // یک نسخه روشن‌تر از accent
    border: '#CCCCCC',          // رنگ بوردر خط جداکننده
    disabled: 'rgba(7, 44, 61, 0.2)', // رنگ #072C3D با شفافیت 0.2
    gradientGraphiteStart: '#3D3E42',
    gradientGraphiteMid: '#636469',
    gradientGraphiteEnd: '#3D3E42',
    gradientGoldStart: '#ADA171',
    gradientGoldMid: '#D0C59C',
    gradientGoldEnd: '#ADA171',
      
    bottleGradientStart: '#81787D',
    bottleGradientEnd: '#B7B0B8',
    tabletsGradientCenter: '#018EA1', // Center color for radial
    tabletsGradientEdge1: '#48ABB4',  // Outer color
    tabletsGradientEdge2: '#0D97A8',  // Mid color
    tabletsGradientEdge3: '#0E4E6C',  // Inner color
    ctaBackgroundStart: '#0F3445',
    ctaBackgroundEnd: '#000000',
  };
  typography: {
    fontFamily: string;
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
 // Figma uses 30px with 120% line-height (36px effective)
    '5xl': '40px',
    '6xl': '50px',
    '7xl': '60px', // For 50px font with 120% line-height
    '8xl': '80px',
    '9xl': '100px',
     
    xxl: '2rem',
    xxxl: '2.5rem',
   
    small: '16px',
    medium: '18px',
    large: '20px',
   
    xxxxl: '40px',
    heroTitle: '60px',
    sectionTitle: '50px', // CTA Title
    ctaButton: '32px', // 
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    // From Theme 1
    lineHeights: {
      normal: string;
      tight: string;
      loose: string;
    };
    // From Theme 2
    h1Size: string;
    h2Size: string;
    h3Size: string;
    h4Size: string;
    bodySize: string;
    smallSize: string;
    ctaSize: string;
    lineHeightBase: string;
    lineHeightHeading: string;
    // Redundant with fontWeights object, but kept for compatibility if used directly
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
  };
  sizes: {
    // From Theme 1
    navbarHeight: string;
    containerMaxWidth: '1440px',
  };
  breakpoints: {
    // From Theme 1
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    // From Theme 2
    mobile: string;
    tablet: string;
    desktop: string;
    largeDesktop: string;
  };
  borderRadius: { // Structure from Theme 2
    small: string;
    medium: string; // Theme 1's '10px' can map here
    large: string;
    pill: string;
    default?: string; // Optional: if you want to keep Theme 1's single value explicitly
  };
  spacing: {
    sectionPaddingY: Interpolation<object>;
    medium: Interpolation<object>; // Object from Theme 2
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  // Function from Theme 1 (renamed to avoid conflict with spacing object)
  // and Theme 2's spacingT
  calculateSpacing: (factor: number) => string;

  // From Theme 2
  maxWidth: string;
  spacingT: (factor: number) => string;

}

export const theme: Theme = {
  colors: {
    // Theme 2 values prioritized for direct overlaps
    primary: '#33BFBC', // Teal/Cyan focus color (Theme 2)
    primaryLight: '#60C9DA', // Added for scrollbar and general use
    primaryDark: '#072C3D', // Dark blue/teal (Theme 2)
    secondary: '#3FFFF8', // Bright Cyan (Theme 2)
    textLight: '#FFFFFF', // Consistent
    textDark: '#1C1F23', // Theme 2 (Theme 1 was #072C3D)
    background: '#FBFFFF', // Consistent
    backgroundT: '#000000', // Common page background

    lightBackground: '#EAF9F9', // Consistent
    backgroundLight: '#FFFFFF', // Theme 2 specific
    backgroundDark: '#000000', // Theme 2 specific
    textGrey: '#A7B1B9', // Consistent
    accent: '#60C9DA', // Consistent
    accentCyan: '#3FFFF8', // Theme 2 specific
    accentPink: '#FF3F90', // Theme 2 specific
    accentBlue: '#34AAFF', // Theme 2 specific
    white: '#FFFFFF', // Consistent
    black: '#000000', // Theme 2 specific
    greyLight: '#EEEEEE', // Theme 2 specific
    greyMedium: '#DEDEDE', // Theme 2 specific
    greyDark: '#B4B4B4', // Theme 2 specific
    gradientCTAStart: '#072C3D', // Theme 2 specific
    gradientCTAEnd: '#000000', // Theme 2 specific
    borderColor: 'rgba(255, 255, 255, 0.2)', // Theme 2 (Theme 1 was #072C3D)
    disabledText: '#A7B1B9', // Consistent
    lightTealBackground: '#EAF9F9', // Consistent
    faqBackground: 'rgba(234, 249, 249, 0.5)', // Consistent
    footerBackground: '#072C3D',
    buttonBackgroundHover: "rgba(255, 255, 255, 0.2)",
    textPrimary: "#FFFFFF",
    textSecondary: "#1C1F23",
    lightBlue: "#CEECF1",
    ctaGradientStart: "#072C3D",
    ctaGradientEnd: "#000000",
    buttonText: "#3FFFF8",
    buttonBorder: "#3FFFF8",
    pink: "#FF7ED3",
    darkBlueGray: "#080818",
    inputBackground: "rgba(255, 255, 255, 0.1)",
    cardBackground: "rgba(8, 8, 24, 0.6)",
 
    lightGrey: '#EEEEEE',
    buttonTextDark: '#03171F',

    footerText: '#FFFFFF',
    footerLinkHover: '#3FFFF8',
    cardOverlayLight: 'rgba(2, 22, 19, 0)', // For Vision
    cardOverlayDark: '#021613', //
  // Accents from various pages
 // From BottlePage (section-nine)
  accentPurple: '#8919F5', // ChromoColours
  accentGreen: '#22F51B', // ChromoColours
  accentYellow: '#F5DF19', // ChromoColours
  accentOrange: '#FE781C', // ChromoColours
  accentRed: '#FE241C', // ChromoColours

  bottleGraphiteText: '#1C1F23', // Text on graphite bottle option
  bottleGraphiteBg: 'rgb(61, 62, 66)', // Background for graphite bottle
  bottleGoldBg: 'rgb(173, 161, 113)', // Background for gold bottle
  
  checkoutBg: '#EAF9F9', // Background for checkout/review order section
  faqBg: 'rgba(234, 248, 248, 0.5)', // FAQ section background
  faqLink: '#60C9DA', // FAQ link color
  faqText: '#405F6C', // FAQ paragraph text      // سبزآبی روشن (تیل) برای دکمه‌ها و هایلایت‌ها
    backgroundPage: '#FBFFFF',  // پس‌زمینه اصلی صفحه
         // مشابه secondary
    accentLight: '#CEECF1',     // یک نسخه روشن‌تر از accent
    border: '#CCCCCC',          // رنگ بوردر خط جداکننده
    disabled: 'rgba(7, 44, 61, 0.2)', // رنگ #072C3D با شفافیت 0.2
    gradientGraphiteStart: '#3D3E42',
    gradientGraphiteMid: '#636469',
    gradientGraphiteEnd: '#3D3E42',
    gradientGoldStart: '#ADA171',
    gradientGoldMid: '#D0C59C',
    gradientGoldEnd: '#ADA171',
      
    bottleGradientStart: '#81787D',
    bottleGradientEnd: '#B7B0B8',
    tabletsGradientCenter: '#018EA1', // Center color for radial
    tabletsGradientEdge1: '#48ABB4',  // Outer color
    tabletsGradientEdge2: '#0D97A8',  // Mid color
    tabletsGradientEdge3: '#0E4E6C',  // Inner color
    ctaBackgroundStart: '#0F3445',
    ctaBackgroundEnd: '#000000',
  darkBackground: '#001520', // Dark theme background (very dark blue)
  text: '#333333', // Standard text color for light backgrounds
  lightText: '#ffffff', // Standard text color for dark backgrounds
  grey: '#f8f8f8', // Light grey, often for backgrounds or dividers
  mediumGrey: '#A7B1B9', // From BuyBottlePage design
  darkGrey: '#555555', // Darker grey, for secondary text or elements
   
  },
  typography: {
    fontFamily: "Outfit", // Consistent
    fontSizes: { // Consistent
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '30px',
      '3xl': '40px',
      '4xl': '50px',
          '5xl': '40px',
    '6xl': '50px',
    '7xl': '60px', // For 50px font with 120% line-height
    '8xl': '80px',
    '9xl': '100px',
  
    xxl: '2rem',
    xxxl: '2.5rem',
   
    small: '16px',
    medium: '18px',
    large: '20px',
   
    xxxxl: '40px',
    heroTitle: '60px',
    sectionTitle: '50px', // CTA Title
    ctaButton: '32px', // 
    },
    fontWeights: { // Consistent
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: { // From Theme 1
      normal: '120%',
      tight: '100%',
      loose: '130%',
    },
    // From Theme 2
    h1Size: '60px',
    h2Size: '50px',
    h3Size: '30px',
    h4Size: '20px',
    bodySize: '16px',
    smallSize: '14px',
    ctaSize: '18px',
    lineHeightBase: '1.5',
    lineHeightHeading: '1.2',
    fontWeightLight: 300, // Consistent with fontWeights.light
    fontWeightRegular: 400, // Consistent with fontWeights.regular
    fontWeightMedium: 500, // Consistent with fontWeights.medium
    fontWeightBold: 700, // Consistent with fontWeights.bold
  },
  sizes: {
    navbarHeight: '60px', // From Theme 1
    containerMaxWidth: '1440px',
  },
  breakpoints: {
    // From Theme 1
    xs: '0px',
    sm: '768px',
    md: '1024px',
    lg: '1440px',
    xl: '1920px',
    // From Theme 2
    mobile: '300px',
    tablet: '768px', // Note: same as sm from Theme 1
    desktop: '1024px', // Note: same as md from Theme 1
    largeDesktop: '1440px', // Note: same as lg from Theme 1
  },
  borderRadius: { // From Theme 2, Theme 1's '10px' is medium
    small: '4px',
    medium: '10px',
    large: '20px',
    pill: '200px',
    // default: '10px', // You could add this if you need the exact string from Theme 1 elsewhere
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '64px',
    sectionPaddingY: undefined,
    medium: undefined
  },
  calculateSpacing: (factor: number) => `${factor * 8}px`, // From Theme 1's spacing / Theme 2's spacingT
  maxWidth: '1440px', // From Theme 2
  spacingT: (factor: number) => `${factor * 8}px`,


};

// Helper for media queries, expanded for both breakpoint systems
export const media = {
   mobile: `(max-width: ${theme.breakpoints.mobile})`,
  tablet: `(max-width: ${theme.breakpoints.tablet})`,
  desktop: `(min-width: ${theme.breakpoints.tablet})`, 
  // Theme 1 style breakpoints
  upToXs: `(min-width: ${theme.breakpoints.xs})`, // This is usually how min-width is used
  upToSm: `(min-width: ${theme.breakpoints.sm})`,
  upToMd: `(min-width: ${theme.breakpoints.md})`,
  upToLg: `(min-width: ${theme.breakpoints.lg})`,
  upToXl: `(min-width: ${theme.breakpoints.xl})`,
  xs: `(min-width: ${theme.breakpoints.xs})`,
  sm: `(min-width: ${theme.breakpoints.sm})`,
  md: `(min-width: ${theme.breakpoints.md})`,
  lg: `(min-width: ${theme.breakpoints.lg})`,
  xl: `(min-width: ${theme.breakpoints.xl})`,
  // Theme 2 style breakpoints
  mobileOnly: `@media (max-width: ${theme.breakpoints.mobile})`, // Corrected from Theme 2's (max-width: ...)
  tabletOnly: `@media (min-width: ${parseInt(theme.breakpoints.mobile, 10) + 1}px) and (max-width: ${theme.breakpoints.desktop})`,
  tabletDown: `@media (max-width: ${theme.breakpoints.desktop})`, // All screens up to and including tablet width
  desktopUp: `@media (min-width: ${parseInt(theme.breakpoints.desktop, 10) + 1}px)`, // All screens larger than desktop
  largeDesktopUp: `@media (min-width: ${parseInt(theme.breakpoints.largeDesktop, 10) +1}px)` // If you have specific styles for this
};
export const pxToRem = (px: number, base: number = 16): string => `${px / base}rem`;

export type ThemeType = typeof theme;