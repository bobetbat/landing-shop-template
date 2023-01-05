import React from 'react';
import { Container } from '@mui/material';


type Props = {
  children?: React.ReactNode;
};

export const Block: React.FC<Props> = ({ children }) => {
  return (
    <Container
      sx={{ height: '100vh', background: 'red' }}
    >
      {children}
    </Container>
  );
}

