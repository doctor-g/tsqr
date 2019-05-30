import { html } from 'lit-element';
import './category-heading.js';
import { selectRandomlyFrom } from './randomizer.js';
import { AbstractRandomizer } from './abstract-randomizer.js';

/**
 * @customElement
 * @polymer
 */
class MonsterRandomizer extends AbstractRandomizer {

    static get properties() {
        return {
            cards: {
                type: Array
            },
            _monsters: { 
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
        this._monsters = [];
    }

    render() {
        return html`
          <category-heading @refresh="${this.randomize}" .disabled="${this._isDisabled(this.cards)}">Monsters</category-heading>
          ${(this._monsters.length > 0)?html`
          <table>
            ${["1","2","3"].map(level=>html`
              <tr>
                <td>Level ${level}:</td>
                <td>${this._monsters[Number(level)-1].Name}</td>
                ${this.showQuests?html`
                  <td><quest-label .quest="${this._monsters[Number(level)-1].Quest}"></quest-label>
                `:html``}
              </tr>
            `)}
          </table>
          `:html``}
        `;
    }

    _isDisabled(cards) {
        // Every quest that has at least three cards has enough to 
        // do randomization, so we don't check levels to save time.
        return cards.length < 3;
    }

    randomize() {
        this._monsters = [];
        ["1","2","3"].forEach(level => {
            var monster = selectRandomlyFrom(this.cards.filter(monster=>monster.Level==level), 1)[0];
            this._monsters.push(monster);
        });
        this.requestUpdate('_monsters');
    }

}

window.customElements.define('monster-randomizer', MonsterRandomizer);
