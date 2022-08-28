import React from 'react';
import { Container, Typography } from '@mui/material';
import Block from './Block';
import { Page } from '../App';


type Props = {
  children?: React.ReactNode;
  pages: Page[];
};

const Menu: React.FC<Props> = ({ pages }) => {
  return (
    <Container
    // sx={{ width: '100vw', height: '100vh', background: 'red' }}
    >
      {pages.map((p) => {
        return (
          <Block title={p.title ?? ''} >
            {p.content}
          </Block>
        )
      })}
    </Container>
  );
}

export default Menu;
