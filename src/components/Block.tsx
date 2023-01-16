import React from 'react';
import { Box, BoxProps, Stack, Typography } from '@mui/material';


interface BlockProps extends BoxProps {
  children?: React.ReactNode;
  title?: string;
}

export const Block: React.FC<BlockProps> = ({ children, title, ...props }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        // bgcolor: 'primary.main',
        // color: 'primary.contrastText',
        display: 'flex',
        pt: '10vh',
        // mt:'10vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
      {...props}
    >
      {title && <Typography variant='h3' lineHeight={2}>{title}</Typography>}
      <Stack width='100%' direction='row' alignItems='inherit' height={title ? '75%' : '100%'}>
        {children}
      </Stack>
    </Box>
  );
};
