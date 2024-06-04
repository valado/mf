import { PaletteMode } from '@mui/material';

export interface PortalAppProps {
  portalContext: PortalContext;
}

export interface PortalContext {
  basePath: string;
  themeOptions: {
    theme: PaletteMode;
    container?: HTMLDivElement;
  };
}
