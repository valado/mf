import {
  PortalContext,
  StyledWebComponentEntry,
  defineCustomElement,
} from '@mf/integration-support';
import App from './app/App';

class CustomWebComponentEntry extends StyledWebComponentEntry {
  constructor() {
    super();
  }

  override render(portalContext: PortalContext) {
    return <App portalContext={portalContext} />;
  }
}

defineCustomElement('example-remote', CustomWebComponentEntry);
