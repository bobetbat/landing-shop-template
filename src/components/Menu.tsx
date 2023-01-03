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
    <Container>
      {pages.map((p) => {
        return (
          <Block>
            <Typography>{p.title ?? ''}</Typography>
            {p.content}
          </Block>
        )
      })}
    </Container>
  );
}

export default Menu;
