import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
