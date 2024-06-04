const content = `
import React, {
  ComponentType,
  LazyExoticComponent,
  Suspense,
  useMemo,
  lazy,
} from 'react';

import { CircularProgress } from '@mui/material';
import { ModuleFederationConfig } from '../../model/AppConfig';
import { usePortalContextForApp } from '../../../PortalContextProvider';
import { PortalAppProps } from '@mf/integration-support';

// https://webpack.js.org/concepts/module-federation/
// https://github.com/module-federation

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __webpack_init_sharing__: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __webpack_share_scopes__: any;

const MODULE_ENTRY = 'main-entry';
const PORTAL_SHARE_SCOPE = 'portal_mfed_scope';

let initialSharingScopeCreated = false;
const loadComponent = (scope: string) => {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    if (!initialSharingScopeCreated) {
      await __webpack_init_sharing__(PORTAL_SHARE_SCOPE);
      initialSharingScopeCreated = true;
    }
    const container: any = window[scope as any]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__[PORTAL_SHARE_SCOPE]);
    const factory = await container.get(MODULE_ENTRY);
    const Module = factory();
    return Module;
  };
};

interface ModuleFederatedWrapperProps {
  appKey: string;
  appConfig: ModuleFederationConfig;
}

export const ModuleFederatedWrapper: React.FC<ModuleFederatedWrapperProps> = ({
  appKey,
  appConfig: { url, remoteScope },
}) => {
  const portalContext = usePortalContextForApp(appKey);
  const FederatedComponent: LazyExoticComponent<ComponentType<PortalAppProps>> =
    useMemo(() => {
      return lazy(loadComponent(remoteScope));
      // reload component if url or scope changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, remoteScope]);

  return FederatedComponent ? (
    <Suspense fallback={<CircularProgress />}>
      <FederatedComponent portalContext={portalContext} />
    </Suspense>
  ) : (
    <CircularProgress />
  );
};

    `;

export default content;
