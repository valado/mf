export const defineCustomElement = (
  customTag: string,
  constructor: CustomElementConstructor,
  options?: ElementDefinitionOptions
) => {
  if (!customElements.get(customTag)) {
    customElements.define(customTag, constructor, options);
  } else {
    console.warn(`Tried to redefine a custom element: ${customTag}`);
  }
};
