import React from 'react';

import './App.css';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store'
import { Provider } from 'react-redux'

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
