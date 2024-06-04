import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

import { RemoteWrapper } from '../mf-support/components/RemoteWrapper';
import { useCurrentMenuItem } from './useCurrentMenuItem';

const MainContentWrapper: FC = () => {
  const { app, isLoading } = useCurrentMenuItem();

  const content = app ? (
    <RemoteWrapper appKey={app.key} appConfig={app.config} />
  ) : (
    <>{'404 Not Found'}</>
  );

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {isLoading ? <CircularProgress /> : content}
    </Box>
  );
};

export default MainContentWrapper;
