import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { BaseWebComponentEntry } from './BaseWebComponentEntry';

export abstract class StyledWebComponentEntry extends BaseWebComponentEntry {
  private _styleContainer: HTMLStyleElement;
  private _styleCache: EmotionCache;

  protected constructor() {
    super();

    this._styleContainer = document.createElement('style');
    this._styleCache = createCache({
      key: 'css',
      prepend: true,
      container: this._styleContainer,
    });
  }

  protected override attach2ShadowDom() {
    const shadowNode = super.attach2ShadowDom();
    shadowNode.appendChild(this._styleContainer);
    return shadowNode;
  }

  protected override doRender() {
    if (this.connected && this.reactRoot && this._portalContext) {
      this._portalContext.themeOptions.container = this.mountNode;
      this.reactRoot.render(
        <StrictMode>
          <CacheProvider value={this._styleCache}>
            {this.render(this._portalContext)}
          </CacheProvider>
        </StrictMode>
      );
    }
  }
}
