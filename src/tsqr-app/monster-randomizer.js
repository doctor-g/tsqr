import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';
import { selectRandomlyFrom } from './randomizer.js';

/**
 * @customElement
 * @polymer
 */
class MonsterRandomizer extends LitElement {

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
          <style>
              .level {
                  font-style: italic
              }
          </style>
          <paper-button .disabled="${this._isDisabled(this.cards)}" raised @click="${this._onClick}">Random Monster</paper-button>
          ${(this._monsters.length > 0)?html`
          <table>
            ${["1","2","3"].map(level=>html`
              <tr><td>${this._monsters[Number(level)-1].Name}</td><td class="level">Level ${level}</td></tr>
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

    _onClick() {
        this._monsters = [];
        ["1","2","3"].forEach(level => {
            var monster = selectRandomlyFrom(this.cards.filter(monster=>monster.Level==level), 1)[0];
            this._monsters.push(monster);
        });
        this.requestUpdate('_monsters');
    }

}

window.customElements.define('monster-randomizer', MonsterRandomizer);
