import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/material';

export const Footer: React.FC = () => {

  return (
    <Stack sx={{ bottom: 1, bgcolor: 'primary.main', justifySelf: 'flex-end' }}>
      <Box maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page.href}
                // onClick={() => handleNavigation(page.href)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant="body1" color='primary.contrastText'>
                  {page.title}
                </Typography>
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </Box>
    </Stack>
  );
};
