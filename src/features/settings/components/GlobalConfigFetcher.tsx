/* eslint-disable @typescript-eslint/no-explicit-any */
// new project/features/settings/components/GlobalConfigFetcher.tsx
import { useEffect, useMemo } from 'react'; // ✅ Import useMemo
import { useSettingsStore } from '../stores/settingsStore';

// Helper function (can be moved outside the component)
const createListKey = (prefix: string, params?: object): string => {
  if (!params || Object.keys(params).length === 0) return `${prefix}-default`;
  const sortedParamsString = JSON.stringify(Object.keys(params).sort().reduce((acc, key) => {
    (acc as any)[key] = (params as any)[key];
    return acc;
  }, {}));
  return `${prefix}-${sortedParamsString}`;
};


export const GlobalConfigFetcher: React.FC = () => {
  // ✅ Solution: Select each piece of state atomically.
  // This provides stable function references and optimizes re-renders.
  const fetchConfigData = useSettingsStore(state => state.fetchConfigData);
  const fetchCountries = useSettingsStore(state => state.fetchCountries);
  const fetchSocialMediaSettings = useSettingsStore(state => state.fetchSocialMediaSettings);
  const selectedCountryId = useSettingsStore(state => state.selectedCountryId);
  const socialMediaState = useSettingsStore(state => state.socialMediaSettings);

  // ✅ Optimization: Memoize the params object to prevent it from being recreated on every render.
  const countryParams = useMemo(() => ({ isActive: true, per_page: 250 }), []);
  const countriesKey = useMemo(() => createListKey('countries', countryParams), [countryParams]);

  const countriesState = useSettingsStore(state => state.countries[countriesKey]);

  useEffect(() => {
    // Fetch config data only if country ID is not set
        fetchConfigData({});
    
    // Fetch countries only if they haven't been fetched with these params before
      fetchCountries(countryParams);
    
 if (!socialMediaState.data && !socialMediaState.isLoading) {
      fetchSocialMediaSettings();
    }
    // Dependencies are now stable, breaking the loop.
  }, []);

  return null;
};