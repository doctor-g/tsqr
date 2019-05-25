import { html, LitElement } from 'lit-element';
import './category-heading.js';
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
          <category-heading .disabled="${this._isDisabled(this.cards)}" @refresh="${this.randomize}">Dungeon</category-heading>
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

    randomize() {
        this._rooms = [];
        ["1","2","3"].forEach(level => {
            var oneLevelRooms = selectRandomlyFrom(this.cards.filter(room=>room.Level==level), 2);
            this._rooms = this._rooms.concat(oneLevelRooms);
        });
        this.requestUpdate('_monsters');
    }

}

window.customElements.define('dungeon-randomizer', DungeonRandomizer);
