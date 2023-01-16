import React from 'react';
import { Container, Typography } from '@mui/material';
import { Block } from '../components/Block';
import { pages } from '../App';
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
// Block with content About Product
export const AboutProduct: React.FC = () => {
  return (
    <Box>
      <Typography variant='h4'>About Product</Typography>
      
    </Box>
  )
}
