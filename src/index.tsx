import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import AppContextProvider from './shared/context';
import GlobalStyle from './shared/style/global';
import App from './pages/App';

import './index.css';

library.add(fas, far);

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyle />
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
