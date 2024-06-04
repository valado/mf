const content = `
import { CustomThemeProvider } from '@mf/styling';
import { FC, PropsWithChildren } from 'react';
import { PortalAppProps } from '../model/PortalContext';

export const AppBootstrap: FC<Required<PropsWithChildren<PortalAppProps>>> = ({
  children,
  portalContext,
}) => (
  <CustomThemeProvider
    theme={portalContext.themeOptions.theme}
    container={portalContext.themeOptions.container}
  >
    {children}
  </CustomThemeProvider>
);

    `;

export default content;
