// Suggested file: MobileNavMenu.types.ts
// (If in separate file, export these types)

export interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  // You can extend this with props for menu items, language data, etc.
}

export interface Language {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  flag?: string; // Placeholder for flag image/icon
}

// Placeholder data (in a real app, this might come from props or context)
export const DUMMY_LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

export const DUMMY_COUNTRIES: Country[] = [
  { code: 'us', name: 'United States' },
  { code: 'ca', name: 'Canada' },
  { code: 'gb', name: 'United Kingdom' },
];

// End of MobileNavMenu.types.ts