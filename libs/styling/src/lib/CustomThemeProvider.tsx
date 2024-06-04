import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { FC, PropsWithChildren, useMemo } from 'react';
import { componentsFactory } from './components';
import { paletteFactory } from './palette';

interface ThemeProviderProps extends Required<PropsWithChildren> {
  theme: PaletteMode;
  container?: HTMLDivElement;
}

export const CustomThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  container,
  children,
}) => {
  const muiTheme = useMemo(
    () => themeFactory({ theme, container }),
    [theme, container]
  );
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

interface ThemeFactoryProps {
  theme: PaletteMode;
  container?: HTMLDivElement;
}

const themeFactory = ({ theme, container }: ThemeFactoryProps) =>
  createTheme({
    palette: paletteFactory(theme),
    components: componentsFactory(container),
  });
