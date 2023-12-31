import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor , store} from './redux/Store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
    </PersistGate>
  </Provider>
);