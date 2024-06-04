import { Slide } from '../model/Slide';

import webpackShell from './webpack-shell';
import webpackMFED from './webpack-mfed';
import webpackWCOMP from './webpack-wcomp';
import bundlerSupportMFED from './bundler-support-mfed';
import bundlerSupportWCOMP from './bundler-support-wcomp';
import configJson from './config';
import shellInfraRemote from './shell-infra-remote';
import shellInfraScriptLoading from './shell-infra-script-loading';
import useDynamicScript from './use-dynamic-script';
import integrationSupportAppBootstrap from './integration-support-app-bootstrap';
import shellInfraMFED from './shell-infra-mfed';
import shellInfraWCOMP from './shell-infra-wcomp';
import integrationSupportWCOMP from './integration-support-wcomp';
import integrationSupportWCOMPStyle from './integration-support-wcomp-style';
import styling from './styling';
import componentsConfiguration from './component-configuration';
import stylingPalette from './styling-palette';

export const slides: Slide[] = [
  {
    slideId: 'bundler-support-wcomp',
    title: 'Bundler Support - WCOMP',
    content: bundlerSupportWCOMP,
  },
  {
    slideId: 'bundler-support-mfed',
    title: 'Bundler Support - MFED',
    content: bundlerSupportMFED,
  },
  {
    slideId: 'webpack-mfed',
    title: 'Webpack - MFED',
    content: webpackMFED,
  },
  {
    slideId: 'webpack-wcomp',
    title: 'Webpack - WCOMP',
    content: webpackWCOMP,
  },
  {
    slideId: 'webpack-shell',
    title: 'Webpack - Shell',
    content: webpackShell,
  },
  {
    slideId: 'confgi-json',
    title: 'Config - JSON',
    content: configJson,
  },
  {
    slideId: 'shell-infra-script-remote',
    title: 'Shell Infra Remote',
    content: shellInfraRemote,
  },
  {
    slideId: 'shell-infra-script-loading',
    title: 'Shell Infra Script Loading',
    content: shellInfraScriptLoading,
  },
  {
    slideId: 'use-dynamic-script',
    title: 'Dynamic Script Loading',
    content: useDynamicScript,
  },
  {
    slideId: 'shell-infra-mfed',
    title: 'Shell Infra MFED',
    content: shellInfraMFED,
  },
  {
    slideId: 'shell-infra-wcomp',
    title: 'Shell Infra WCOMP',
    content: shellInfraWCOMP,
  },
  {
    slideId: 'integration-support-wcomp',
    title: 'Integration Support WCOMP',
    content: integrationSupportWCOMP,
  },
  {
    slideId: 'integration-support-wcomp-style',
    title: 'Integration Support WCOMP Style',
    content: integrationSupportWCOMPStyle,
  },
  {
    slideId: 'integration-support-app-bootstrap',
    title: 'Integration Support AppBootstrap',
    content: integrationSupportAppBootstrap,
  },
  {
    slideId: 'styling',
    title: 'Styling',
    content: styling,
  },
  {
    slideId: 'styling-palette',
    title: 'Styling palette',
    content: stylingPalette,
  },
  {
    slideId: 'component-configuration',
    title: 'Components Configuration',
    content: componentsConfiguration,
  },
];
