import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import { selectRandomlyFrom } from './randomizer.js';
import './category-heading.js';
import { AbstractRandomizer } from './abstract-randomizer.js';

/**
 * @customElement
 * @polymer
 */
class MarketplaceRandomizer extends AbstractRandomizer {

    static get properties() {
        return {
            itemCards: {
                type: Array
            },
            spellCards: {
                type: Array
            },
            weaponCards: {
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
             h3 {
                 margin-bottom: 1px;
             }
        `];
    }

    constructor() {
        super();
        this.itemCards = [];
        this.spellCards = [];
        this.weaponCards = [];
        this._items = [];
        this._weapons = [];
        this._spells = [];
    }

    render() {
        return html`
          <category-heading @refresh="${this.randomize}" ?disabled="${this._isDisabled(this.cards)}">Marketplace</category-heading>
          <paper-radio-group id="radiogroup" selected="random">
              <paper-radio-button name="random">Random</paper-radio-button>
              <paper-radio-button name="items">Two Items</paper-radio-button>
              <paper-radio-button name="spells">Two Spells</paper-radio-button>
              <paper-radio-button name="weapons">Two Weapons</paper-radio-button>
          </paper-radio-group>

          ${this._marketplace("Items", this._items)}
          ${this._marketplace("Spells", this._spells)}
          ${this._marketplace("Weapons", this._weapons)}
        `;
    }

    _marketplace(title, cards) {
        return html`
          <h3>${title}</h3>
          <table>
            ${cards.map(card => html`
              <tr>
                <td>${card.Name}</td>
                ${this.showQuests?html`
                  <td><quest-label .quest="${card.Quest}"></quest-label></td>
                `:html``}
              </tr>
            `)}
          </table>
        `;
    }

    randomize() {
        let selected = this.shadowRoot.getElementById("radiogroup").selected;
        var items = 3;
        var spells = 3;
        var weapons = 3;
        if (selected == "random") {
            switch (Math.floor(Math.random()*3)) {
                case 0: items = 2; break;
                case 1: spells = 2; break;
                case 2: weapons = 2; break;
                default: throw "Unreachable case";
            }
        }
        else {
            switch (selected) {
                case "items": items = 2; break;
                case "spells": spells = 2; break;
                case "weapons":  weapons = 2; break;
                default: throw "Unreachable case";
            }
        }
        this._items = selectRandomlyFrom(this.itemCards, items, true);
        this._spells = selectRandomlyFrom(this.spellCards, spells, true);
        this._weapons = selectRandomlyFrom(this.weaponCards, weapons, true);
        this.requestUpdate('_items');
        this.requestUpdate('_spells');
        this.requestUpdate('_weapons');
    }

    _isDisabled(cards) {
        // A "full" set (non-promo) that has at least 10 cards will
        // have enough to fit any marketplace combo, so we save
        // some time by doing that instead of searching for each
        // type.
        return this.itemCards.length 
          + this.spellCards.length 
          + this.weaponCards.length < 10;
    }
}

window.customElements.define('marketplace-randomizer', MarketplaceRandomizer);
