import React, { useEffect, useMemo } from 'react';
import { shallow } from 'zustand/shallow';
import { useSettingsStore, selectLanguagesList } from '../stores/settingsStore';
import type { GetLanguagesParams, Language } from '../../../core/types/api/settings';

interface LanguageSelectorProps {
  selectedLocale?: string;
  onSelectLanguage: (locale: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLocale, onSelectLanguage }) => {
  const languageParams = useMemo((): GetLanguagesParams => ({ isActive: true, per_page: 100 }), []);

  const {
    data: languages,
    isLoading,
    error,
  } = useSettingsStore(
    selectLanguagesList(languageParams),
    shallow
  ) || initialPaginatedState<Language>(); // Provide default if undefined

  const fetchLanguages = useSettingsStore(state => state.fetchLanguages);

  useEffect(() => {
    if (!languages && !isLoading) {
      fetchLanguages(languageParams);
    }
  }, [languages, isLoading, fetchLanguages, languageParams]);

  if (isLoading) {
    return <select disabled><option>Loading languages...</option></select>;
  }

  if (error) {
    return <p>Error loading languages: {error.message}</p>;
  }

  if (!languages || languages.length === 0) {
    return <p>No languages available.</p>;
  }

  return (
    <select
      value={selectedLocale || ''}
      onChange={(e) => onSelectLanguage(e.target.value)}
      aria-label="Select language"
    >
      <option value="" disabled>Select a language</option>
      {languages.map(lang => (
        <option key={lang.locale} value={lang.locale}>
          {lang.title} ({lang.locale})
        </option>
      ))}
    </select>
  );
};
