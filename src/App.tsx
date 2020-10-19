import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
