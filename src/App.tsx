// App.tsx
import React from 'react';
import AppRouter from './AppRouter';
import Toast from './lib/shared/components/Toast/Toast';

const App: React.FC = () => {
  return (
    <>
      <Toast /> 
      <AppRouter />
    </>
  );
};

export default App;


