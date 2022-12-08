import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/todos/api/apiSlice';
import { NewApiSlice } from './features/todos/api/newApiSlice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={[apiSlice, NewApiSlice]}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
