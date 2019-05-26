import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import { selectRandomlyFrom } from './randomizer.js';
import './category-heading.js';

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
                    return true;
                }
            },
            _spells: { 
                type: Array,
                hasChanged(newVal, oldVal) {
                    return true;
                }
            },
            _weapons: { 
                type: Array,
                hasChanged(newVal, oldVal) {
                    return true;
                }
            }
        };
    }

    static get styles() {
        return [
            css`
              paper-radio-group {
                display: block;
             }
             ul {
                 margin-top: 1px;
             }
        `];
    }

    constructor() {
        super();
        this.cards = [];
        this._items = [];
        this._weapons = [];
        this._spells = [];
    }

    render() {
        return html`
          <category-heading @refresh="${this.randomize}" ?disabled="${this._isDisabled(this.cards)}">Marketplace</category-heading>
          <paper-radio-group id="radiogroup" selected="random">
              <paper-radio-button name="random">Random</paper-radio-button>
              <paper-radio-button name="items">Three Items</paper-radio-button>
              <paper-radio-button name="spells">Three Spells</paper-radio-button>
              <paper-radio-button name="weapons">Three Weapons</paper-radio-button>
          </paper-radio-group>
          Items:
          <ul>
            ${this._items.map(item => html`<li>${item.Name}</li>`)}
          </ul>
          Spells:
          <ul>
            ${this._spells.map(item => html`<li>${item.Name}</li>`)}
          </ul>
          Weapons:
          <ul>
            ${this._weapons.map(item => html`<li>${item.Name}</li>`)}
          </ul>
        `;
    }

    randomize() {
        let selected = this.shadowRoot.getElementById("radiogroup").selected;
        var items = 2;
        var spells = 2;
        var weapons = 2;
        if (selected == "random") {
            switch (Math.floor(Math.random()*3)) {
                case 0: items = 3; break;
                case 1: spells = 3; break;
                case 2: weapons = 3; break;
                default: throw "Unreachable case";
            }
        }
        else {
            switch (selected) {
                case "items": items = 3; break;
                case "spells": spells = 3; break;
                case "weapons":  weapons = 3; break;
                default: throw "Unreachable case";
            }
        }
        this._items = selectRandomlyFrom(this.cards.filter(card=>card.Category=="Items"), items, true);
        this._spells = selectRandomlyFrom(this.cards.filter(card=>card.Category=="Spells"), spells, true);
        this._weapons = selectRandomlyFrom(this.cards.filter(card=>card.Category=="Weapons"), weapons, true);
        this.requestUpdate('_items');
        this.requestUpdate('_spells');
        this.requestUpdate('_weapons');
    }

    _isDisabled(cards) {
        // A "full" set (non-promo) that has at least 10 cards will
        // have enough to fit any marketplace combo, so we save
        // some time by doing that instead of searching for each
        // type.
        return cards.length < 10;
    }
}

window.customElements.define('marketplace-randomizer', MarketplaceRandomizer);
