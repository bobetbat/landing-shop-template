import React from 'react';
import { Container, Box } from '@mui/material';

import logo from './logo.svg';
import './App.css';
import { Header } from './components';

const App: React.FC = () => {
  return (
    <div className="App" >
      <Header />
      <Box
        overflow='scroll'

        sx={{ width: '100vw',height:'1000vh' }}
        color='red'
      >
        RED

      </Box>
    </div>
  );
}

export default App;
