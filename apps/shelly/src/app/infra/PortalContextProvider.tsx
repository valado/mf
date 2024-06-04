import { PortalContext } from '@mf/integration-support';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { getAppRoute } from '../routes';
import { useThemeContext } from './ThemeContext';

const noopContext: PortalContext = {
  basePath: '',
  themeOptions: { theme: 'dark' },
};

const Context = createContext(noopContext);

export const PortalContextProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useThemeContext();

  return (
    <Context.Provider
      value={{
        basePath: '/',
        themeOptions: {
          theme,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePortalContext = () => useContext(Context);

export const usePortalContextForApp = (appKey: string) => {
  const portalContext = usePortalContext();

  return useMemo<PortalContext>(
    () => ({
      ...portalContext,
      basePath: getAppRoute(appKey),
    }),
    [appKey, portalContext]
  );
};
