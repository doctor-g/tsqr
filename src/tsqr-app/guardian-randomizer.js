import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';
import { selectRandomlyFrom } from './randomizer.js';

/**
 * @customElement
 * @polymer
 */
class GuardianRandomizer extends LitElement {

    static get properties() {
        return {
            cards: {
                type: Array
            },
            _guardian: { 
                type: Object,
            }
        };
    }

    constructor() {
        super();
        this.cards = [];
    }

    render() {
        return html`
          <style>
              .level {
                  font-style: italic
              }
          </style>
          <paper-button raised @click="${this._onClick}">Random Guardian</paper-button>
          ${this._guardian?html`
            ${this._guardian.Name}, Level ${Math.floor(Math.random()*3)+4}
          `:html``}
        `;
    }

    _onClick() {
        this._guardian = selectRandomlyFrom(this.cards, 1)[0];
    }

}

window.customElements.define('guardian-randomizer', GuardianRandomizer);
