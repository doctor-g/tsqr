import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';
import { selectRandomlyFrom } from './randomizer.js';

/**
 * @customElement
 * @polymer
 */
class MarketplaceRandomizer extends LitElement {

    static get properties() {
        return {
            cards: {
                type: Array
            },
            _items: { 
                type: Array,
                hasChanged(newVal, oldVal) {
                    console.log('newval is ', newVal);
                    return true;
                }
            }
        };
    }

    constructor() {
        super();
        this.cards = [];
        this._items = [];
    }

    render() {
        return html`
          <style>
          </style>
          <paper-button raised @click="${this._onClickFourItem}">Four-Item Marketplace</paper-button>
          <ul>
            ${this._items.map(item => html`<li>${item.Name}</li>`)}
          </ul>
        `;
    }

    _onClickFourItem() {
        var oldVal = this._items;
        this._items = selectRandomlyFrom(this.cards, 4, true);
        this.requestUpdate('_items', oldVal);
    }

}

window.customElements.define('marketplace-randomizer', MarketplaceRandomizer);
