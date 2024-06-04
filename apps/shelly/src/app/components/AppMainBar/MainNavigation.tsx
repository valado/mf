import { Box, Stack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { useConfig } from '../../config/useConfig';
import { getAppRoute } from '../../routes';

export const MainNavigation = () => {
  const { config, isLoading } = useConfig();
  const menusLoaded = !isLoading && config.apps.length > 0;
  return menusLoaded ? (
    <Stack direction="row" spacing={0}>
      {config.apps.map((app) => (
        <MenuItem key={app.key} to={getAppRoute(app.key)}>
          {app.name}
        </MenuItem>
      ))}
    </Stack>
  ) : null;
};

const MenuItem: FC<PropsWithChildren<{ to: string }>> = ({ to, children }) => (
  <NavLink
    to={to}
    style={{
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    {({ isActive }) => (
      <Box
        sx={{
          lineHeight: '64px',
          paddingLeft: '10px',
          paddingRight: '10px',
          backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
        }}
      >
        {children}
      </Box>
    )}
  </NavLink>
);
