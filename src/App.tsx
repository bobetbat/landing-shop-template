import React from 'react';

import './App.css';
import theme from './theme';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export interface Page {
  title: string;
  content: React.ReactNode;
  href: string;
}

export const pages: Page[] = [
  {
    title: 'About Product',
    content: <Box>hello world</Box>,
    href: '#'
  },
  {
    title: 'About us',
    content: 'About',
    href: '#about'
  },
  {
    title: 'Buy here',
    content: 'Product + Payment flow',
    href: '#buyhere'
  },
  {
    title: 'Contact us',
    content: 'contact form',
    href: '#contactus'
  },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
