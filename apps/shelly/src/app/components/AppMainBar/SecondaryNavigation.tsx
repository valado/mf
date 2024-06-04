import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../infra/ThemeContext';
import { routes } from '../../routes';

export const SecondaryNavigation = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Tooltip title="Presentation Slides">
          <IconButton
            size="small"
            onClick={() => navigate(routes.presentation.path)}
          >
            <SlideshowIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Configuration">
          <IconButton size="small" onClick={() => navigate(routes.config.path)}>
            <SettingsApplicationsIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle theme">
          <IconButton size="small" onClick={() => toggleTheme()}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};
