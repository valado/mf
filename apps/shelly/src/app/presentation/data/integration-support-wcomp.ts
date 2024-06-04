const content = `
import { ReactNode, StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { PortalAppProps, PortalContext } from '../model/PortalContext';

const SHADOW_CONTAINER_CSS =
  'margin: 0; padding: 0; height: 100%; width: 100%, overflow: hidden;';

export abstract class BaseWebComponentEntry
  extends HTMLElement
  implements PortalAppProps
{
  private _connected = false;
  private _mountNode: HTMLDivElement;
  private _reactRoot: Root | undefined;
  protected _portalContext: PortalContext | undefined;

  protected constructor() {
    super();

    this._mountNode = document.createElement('div');
    this._mountNode.style.cssText = SHADOW_CONTAINER_CSS;
  }

  connectedCallback() {
    this.attach2ShadowDom();
    this._reactRoot = createRoot(this._mountNode);

    this._connected = true;
    this.doRender();
  }

  disconnectedCallback() {
    this._connected = false;
    this._reactRoot?.unmount();
  }

  protected attach2ShadowDom() {
    const shadowNode = this.attachShadow({ mode: 'open' });
    shadowNode.appendChild(this._mountNode);
    return shadowNode;
  }

  protected doRender() {
    if (this._connected && this._portalContext && this._reactRoot) {
      this._reactRoot.render(
        <StrictMode>{this.render(this._portalContext)}</StrictMode>
      );
    }
  }

  set portalContext(portalContext: PortalContext) {
    this._portalContext = portalContext;
    this.doRender();
  }

  get reactRoot() {
    return this._reactRoot;
  }

  get connected() {
    return this._connected;
  }

  get mountNode() {
    return this._mountNode;
  }

  abstract render(portalContext: PortalContext): ReactNode;
}

    `;

export default content;
