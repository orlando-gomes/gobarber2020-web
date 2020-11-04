import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Globalstyle from './styles/global';
import Routes from './routes/index';

import AppProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <Globalstyle />
  </BrowserRouter>
);

export default App;
