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

    constructor() {
        super();
        this.cards = [];
        this._items = [];
        this._weapons = [];
        this._spells = [];
    }

    render() {
        return html`
          <style>
          </style>
          <paper-button raised @click="${this._onClick}" random>Random Marketplace</paper-button>
          <paper-button raised @click="${this._onClick}" items=4 spells=3 weapons=3>Four-Item Marketplace</paper-button>
          <paper-button raised @click="${this._onClick}" items=3 spells=4 weapons=3>Four-Spell Marketplace</paper-button>
          <paper-button raised @click="${this._onClick}" items=3 spells=3 weapons=4>Four-Weapon Marketplace</paper-button>
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

    _onClick(e) {
        var items = 3;
        var spells = 3;
        var weapons = 3;
        if (e.target.hasAttribute("random")) {
            switch (Math.floor(Math.random()*3)) {
                case 0: items = 4; break;
                case 1: spells = 4; break;
                case 2: weapons = 4; break;
                default: throw "Unreachable case";
            }
        }
        else {
            items = Number(e.target.getAttribute("items"));
            spells = Number(e.target.getAttribute("spells"));
            weapons = Number(e.target.getAttribute("weapons"));
        }
        this._items = selectRandomlyFrom(this.cards, items, true);
        this._spells = selectRandomlyFrom(this.cards, spells, true);
        this._weapons = selectRandomlyFrom(this.cards, weapons, true);
        this.requestUpdate('_items');
        this.requestUpdate('_spells');
        this.requestUpdate('_weapons');
    }

}

window.customElements.define('marketplace-randomizer', MarketplaceRandomizer);
