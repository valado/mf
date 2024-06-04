import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { useConfig } from '../config/useConfig';

type InitializationContextType = {
  initialized: boolean;
};

const InitializationContext = createContext<InitializationContextType>({
  initialized: false,
});

export const AppInitializer: FC<Required<PropsWithChildren>> = ({
  children,
}) => {
  const { isLoading } = useConfig();

  return (
    <InitializationContext.Provider value={{ initialized: !isLoading }}>
      {children}
    </InitializationContext.Provider>
  );
};

export const useAppInitializer = () => {
  return useContext(InitializationContext);
};
