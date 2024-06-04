import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Routing } from './Routing';
import { AppInitializer } from './infra/AppInitializer';
import { PortalContextProvider } from './infra/PortalContextProvider';
import { ThemeContextProvider } from './infra/ThemeContext';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="Loading...">
        <ThemeContextProvider>
          <PortalContextProvider>
            <AppInitializer>
              <Routing />
            </AppInitializer>
          </PortalContextProvider>
        </ThemeContextProvider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
