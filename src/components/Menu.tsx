import * as React from 'react';
import { Box, Button, IconButton, Menu as CMenu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../routes';
import { useNavigate, useLocation } from 'react-router-dom';

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (href: string) => {
    navigate(href, { preventScrollReset: true });
    handleCloseNavMenu();
  };

  React.useEffect(() => {
    const element = document.getElementById(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }, [location]);
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.href}
            onClick={() => handleNavigation(page.path)}
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
            <MenuItem key={page.href} onClick={() => handleNavigation(page.path)}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          ))}
        </CMenu>
      </Box>
    </>
  );
};
