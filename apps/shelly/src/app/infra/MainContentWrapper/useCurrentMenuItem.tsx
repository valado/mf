import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useConfig } from '../../config/useConfig';
import { App } from '../mf-support/model/AppConfig';

export const useCurrentMenuItem = (): {
  app?: App;
  isLoading: boolean;
} => {
  const { config, isLoading } = useConfig();
  const { appKey } = useParams();
  const app = useMemo(
    () =>
      appKey && !isLoading
        ? config.apps.find((app) => app.key === appKey)
        : undefined,
    [appKey, config?.apps, isLoading]
  );
  return { app, isLoading };
};
