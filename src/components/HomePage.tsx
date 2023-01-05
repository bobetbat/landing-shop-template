import React from 'react';
import { Container, Typography } from '@mui/material';
import { Block } from './Block';
import { Page } from '../App';
import { Box } from '@mui/system';


type Props = {
  children?: React.ReactNode;
  pages: Page[];
};

export const HomePage: React.FC<Props> = ({ pages }) => {
  return (
    <Container>
      {pages.map((p) => {
        return (
          <Block key={p.href}>
            <Box id={p.href} />
            <Typography pt={8} variant='h3' lineHeight={2}>{p.title ?? ''}</Typography>
            <Box bgcolor="black" height='70%'>
              {p.content}
            </Box>
          </Block>
        )
      })}
    </Container>
  );
}

