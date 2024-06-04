const content = `
import { FC, useMemo } from 'react';

import { ModuleFederatedWrapper } from '../ModuleFederatedWrapper';
import { WebComponentWrapper } from '../WebComponentWrapper';

// eslint-disable-next-line @nx/enforce-module-boundaries
import packageJson from '../../../../../../../../package.json';
import { ScriptLoadingWrapper } from '../ScriptLoadingWrapper';
import { AppConfig } from '../../model/AppConfig';

interface RemoteWrapperProps {
  appKey: string;
  appConfig: AppConfig;
}

export const RemoteWrapper: FC<RemoteWrapperProps> = ({
  appKey,
  appConfig: { moduleFederated, webComponent },
}) => {
  const supported = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const shellDeps = packageJson.dependencies as any;
    console.log(
      'Checking dependencies for module federation support...',
      shellDeps
    );
    return moduleFederated.dependencies.reduce((prev, current) => {
      if (!prev) return prev;
      if (shellDeps[current.name] !== current.version) {
        console.log('Non-matching dependency:', current);
        return false;
      }
      console.log('Matching dependency: ', current);
      return prev;
    }, true);
  }, [moduleFederated]);

  const { url, component } = supported
    ? {
        url: moduleFederated.url,
        component: (
          <ModuleFederatedWrapper appKey={appKey} appConfig={moduleFederated} />
        ),
      }
    : {
        url: webComponent.url,
        component: (
          <WebComponentWrapper appKey={appKey} appConfig={webComponent} />
        ),
      };

  return <ScriptLoadingWrapper url={url}>{component}</ScriptLoadingWrapper>;
};

    `;

export default content;
