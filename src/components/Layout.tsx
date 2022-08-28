import { Stack } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      {children}
    </Stack>
  );
}
