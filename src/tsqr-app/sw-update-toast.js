import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-toast/paper-toast.js';

/**
 * `sw-update-toast` Update toast on service worker update.
 * Based on https://github.com/morbidick/serviceworker-helpers.
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class SwUpdateToast extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String,
        value: "Site update available"
      },
      buttonLabel: {
        type: String,
        value: "Reload"
      },
      /** Toast duration, default 0 to persist */
      duration: {
        type: Number,
        value: 0
      },
      opened: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style>
        span {
          margin-right: 1em;
        }
        a {
          color: var(--primary-color, orange);
          text-decoration: none;
        }
      </style>
      <paper-toast id="toast" duration="[[duration]]" opened="[[opened]]">
        <span>[[message]]</span>
        <a href on-click="_reload">[[buttonLabel]]</a>
      </paper-toast>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.getRegistration().then((registration) => {
          if (registration) {
            registration.addEventListener('updatefound', () => {
              this.$.toast.open();
            });
          }
        });
      });
    }
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }

  _reload() {
    window.location.reload();
  }
}

customElements.define('sw-update-toast', SwUpdateToast);