import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';


AppRegistry.registerComponent(appName, () => () => (
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
));
