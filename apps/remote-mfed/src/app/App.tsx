import { DomainEntry } from '@mf/domain';
import { AppBootstrap, PortalAppProps } from '@mf/integration-support';
import { FC } from 'react';

export const App: FC<PortalAppProps> = ({ portalContext }) => {
  return (
    <AppBootstrap portalContext={portalContext}>
      <DomainEntry />
    </AppBootstrap>
  );
};

export default App;
