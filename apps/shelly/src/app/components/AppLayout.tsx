import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    sx={() => ({
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gridColumnGap: '0px',
      gridRowGap: '0px',
    })}
  >
    {children}
  </Box>
);
