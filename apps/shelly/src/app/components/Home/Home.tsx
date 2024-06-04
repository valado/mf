import { Box } from '@mui/material';
import { FC } from 'react';

export const Home: FC = () => (
  <Box
    sx={{
      px: '3rem',
    }}
  >
    <h1>Welcome to SHELLy!</h1>
    <p>
      This is a simple shell application that demonstrates how to use the
      following technologies within the context of <b>micro-frontends</b>:
    </p>
    <ul>
      <li>NX</li>
      <li>Webpack</li>
      <li>React</li>
      <li>MUI</li>
    </ul>
  </Box>
);
