import { html, css, LitElement } from '@polymer/lit-element';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import { sharedStyles } from './shared-styles.js';

/**
 * @customElement
 * @polymer
 */
class CategoryHeading extends LitElement {
  static get properties() {
      return {
          disabled: {type: Boolean}
      }
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  constructor() {
      super();
      this.disabled = false;
  }

  render() {
    return html`
      <h2>
        <slot></slot> 
        <paper-icon-button icon="refresh" ?disabled="${this.disabled}" raised @click="${this._refresh}"></paper-icon-button>
      </h2>
    `;
  }

  _refresh() {
      this.dispatchEvent(new CustomEvent('refresh'));
  }
}

window.customElements.define('category-heading', CategoryHeading);
