import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const Footer: React.FC = () => {

  return (
    <AppBar position='static' sx={{ bottom: 0 }}>
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
    </AppBar>
  );
};
