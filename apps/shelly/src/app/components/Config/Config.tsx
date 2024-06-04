import { FC } from 'react';
import { ConfigViewer } from '../../config/components/ConfigViewer';
import { Box } from '@mui/material';

export const Config: FC = () => (
  <Box
    sx={{
      px: '3rem',
      overflowY: 'auto',
    }}
  >
    <h1>Configuration:</h1>
    <ConfigViewer />
  </Box>
);
