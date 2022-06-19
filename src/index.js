import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducer, { initialState } from './Components/reducer';
import { StateProvider } from './Components/StateProvider';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
