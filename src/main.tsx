import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './core/i18n/i18n';
import {  ThemeProvider } from 'styled-components';
import { theme } from './core/theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTopOnNext from './core/hooks/ScrollToTopOnNext';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTopOnNext/>
 <ThemeProvider theme={theme} >
    <QueryClientProvider client={queryClient}>
 

        <App />
      
        </QueryClientProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
