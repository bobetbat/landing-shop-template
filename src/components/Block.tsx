import React from 'react';
import { Container, Typography } from '@mui/material';


type Props = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};

const Block: React.FC<Props> = ({ children, title }) => {
  return (
    <Container
      sx={{ width: '100vw', height: '100vh', background: 'red' }}
    >
      <Typography>{title}</Typography>
      {children}
    </Container>
  );
}

export default Block;
