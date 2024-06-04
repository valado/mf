import { createElement, FC } from 'react';

import { WebComponentConfig } from '../../model/AppConfig';
import { usePortalContextForApp } from '../../../PortalContextProvider';
import { PortalAppProps } from '@mf/integration-support';

interface WebComponentWrapperProps {
  appKey: string;
  appConfig: WebComponentConfig;
}

export const WebComponentWrapper: FC<WebComponentWrapperProps> = ({
  appKey,
  appConfig: { customTag },
}) => {
  const portalContext = usePortalContextForApp(appKey);
  return createElement(customTag, {
    ref: (element: HTMLElement) => {
      if (element) {
        (element as unknown as PortalAppProps).portalContext = portalContext;
      }
    },
  });
};
