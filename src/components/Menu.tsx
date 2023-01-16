import * as React from 'react';
import { Box, Button, IconButton, Menu as CMenu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../App';

// type Props = {
//   pages: Page[];
// };

export const Menu: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    setTimeout(() => handleCloseNavMenu(), 1000);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.href}
            onClick={() => handleNavigation(page.href)}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Typography variant="body1" color='primary.contrastText'>
              {page.title}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <CMenu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'flex-end', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.href} onClick={() => handleNavigation(page.href)}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          ))}
        </CMenu>
      </Box>
    </>
  );
};
