import { useQuery } from '@tanstack/react-query';
import { Config } from './model/Config';

const CONFIG_KEY = 'config';

export const useConfig = (): { config: Config; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: [CONFIG_KEY],
    queryFn: fetchConfig,
  });
  return { config: data, isLoading };
};

const fetchConfig = async () => {
  const response = await fetch('/config');
  return response.json();
};
