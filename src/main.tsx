import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './core/i18n/i18n';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTopOnNext from './core/hooks/ScrollToTopOnNext';
import { GlobalConfigFetcher } from './features/settings/components/GlobalConfigFetcher';
import { GlobalStyles } from './core/theme/GlobalStyles';
import { LoadingProvider, useLoading } from './core/loading/LoadingContext';
import { LoadingIndicator } from './core/loading/LoadingIndicator';
import { setGlobalLoading } from './core/api/apiClient';

const queryClient = new QueryClient();

const RootApp: React.FC = () => {
  const { isLoading, setLoading } = useLoading();
  React.useEffect(() => {
    setGlobalLoading(setLoading);
  }, [setLoading]);

  return (
    <>
      <GlobalConfigFetcher />
      <GlobalStyles />
      <App />
      <LoadingIndicator isVisible={isLoading} />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopOnNext/>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <RootApp />
          </LoadingProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


