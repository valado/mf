import { CustomThemeProvider } from '@mf/styling';
import { PaletteMode, useMediaQuery } from '@mui/material';

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

export interface ThemeContext {
  theme: PaletteMode;
  isDark: boolean;
  toggleTheme: () => void;
}

const noopContext: ThemeContext = {
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {
    // noop
  },
};

const Context = createContext(noopContext);

export const ThemeContextProvider: FC<Required<PropsWithChildren>> = ({
  children,
}) => {
  const fallbackTheme = useFallbackTheme();
  const [theme, setTheme] = useState(fallbackTheme);

  return (
    <Context.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        toggleTheme: () => {
          setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
        },
      }}
    >
      <CustomThemeProvider theme={theme}>{children}</CustomThemeProvider>
    </Context.Provider>
  );
};

export const useThemeContext = () => useContext(Context);

const useFallbackTheme = (): PaletteMode => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return prefersDarkMode ? 'dark' : 'light';
};
