import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { SecondaryNavigation } from './SecondaryNavigation';
import { Divider, Stack } from '@mui/material';

export const AppMainBar = () => {
  return (
    <AppBar position="relative" sx={{ zIndex: 1 }}>
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Typography variant="h6" noWrap component="div">
            SHELLy
          </Typography>
        </Link>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          sx={{ mx: '1rem' }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <MainNavigation />
          <SecondaryNavigation />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
