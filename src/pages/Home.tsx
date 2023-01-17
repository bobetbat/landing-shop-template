import React from 'react';
import { Container } from '@mui/material';
import { Block } from '../components/Block';
import { pages } from '../routes';
import { Box } from '@mui/system';
import Layout from '../components/Layout';

export const Home: React.FC= () => {
  return (
    <Layout>
      <Container>
        {pages.map((p) => {
          return (
            <Block key={p.href} title={p.title} id={p.href}>
              <Box width='50%' height='100%'>
                {p.content}
              </Box>
              <Box width='50%' height='100%'>
                {p.content}
              </Box>
            </Block>
          )
        })}
      </Container>
    </Layout>
  );
}
