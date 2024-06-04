export type HasKey = {
  key: string;
};

export type HasName = {
  name: string;
};

export type App = HasKey &
  HasName & {
    config: AppConfig;
  };

export type AppConfig = {
  moduleFederated: ModuleFederationConfig;
  webComponent: WebComponentConfig;
};

export type CommonRemoteConfig = {
  url: string;
};

export type WebComponentConfig = CommonRemoteConfig & {
  customTag: string;
};

export type ModuleFederationConfig = CommonRemoteConfig & {
  remoteScope: string;
  dependencies: {
    name: string;
    version: string;
  }[];
};
