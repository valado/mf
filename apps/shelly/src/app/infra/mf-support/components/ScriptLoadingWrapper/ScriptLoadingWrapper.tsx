import { FC, PropsWithChildren } from 'react';
import useDynamicScript from './useDynamicScript';
import { CircularProgress } from '@mui/material';

interface ScriptLoadingWrapperProps extends PropsWithChildren {
  url: string;
}

export const ScriptLoadingWrapper: FC<ScriptLoadingWrapperProps> = ({
  url,
  children,
}) => {
  const { loading, failed } = useDynamicScript({ url });

  if (loading) {
    return <CircularProgress />;
  }

  if (failed) {
    return <h2>Failed to load script: {url}</h2>;
  }

  return <>{children}</>;
};
