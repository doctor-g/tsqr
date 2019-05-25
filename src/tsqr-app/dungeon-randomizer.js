import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';
import { selectRandomlyFrom } from './randomizer.js';

/**
 * @customElement
 * @polymer
 */
class DungeonRandomizer extends LitElement {

    static get properties() {
        return {
            cards: {
                type: Array
            },
            _rooms: { 
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
        this._rooms = [];
    }

    render() {
        return html`
          <style>
              .level {
                  font-style: italic
              }
          </style>
          <paper-button .disabled="${this._isDisabled(this.cards)}" raised @click="${this._onClick}">Random Dungeon</paper-button>
          ${(this._rooms.length > 0)?html`
          <ul>
            ${this._rooms.map(room=>html`
                <li>${room.Name} (Level ${room.Level})</li>
            `)}
          </ul>
          `:html``}
        `;
    }

    _isDisabled(cards) {
        // This is a bit of a kludge. We really need two level 1, 2, and 3
        // dungeon rooms for this to work, but there are no sets where
        // there's an uneven distribution of dungeon rooms, so this works.
        return cards.length < 6;
    }

    _onClick() {
        this._rooms = [];
        ["1","2","3"].forEach(level => {
            var oneLevelRooms = selectRandomlyFrom(this.cards.filter(room=>room.Level==level), 2);
            this._rooms = this._rooms.concat(oneLevelRooms);
        });
        this.requestUpdate('_monsters');
    }

}

window.customElements.define('dungeon-randomizer', DungeonRandomizer);
