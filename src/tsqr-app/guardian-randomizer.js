import { html } from 'lit-element';
import './category-heading.js';
import { selectRandomlyFrom } from './randomizer.js';
import { AbstractRandomizer } from './abstract-randomizer.js';

/**
 * @customElement
 * @polymer
 */
class GuardianRandomizer extends AbstractRandomizer {

    static get properties() {
        return {
            cards: {
                type: Array
            },
            _guardian: { 
                type: Object,
            },
            _level: {
                type: Number
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
          <category-heading .disabled="${this._isDisabled(this.cards)}" @refresh="${this.randomize}">Guardian</category-heading>
          ${this._guardian?html`
            ${this._guardian.Name}, Level ${this._level}
            ${this.showQuests?html`<quest-label .quest="${this._guardian.Quest}"></quest-label>`:html``}
          `:html``}
        `;
    }

    _isDisabled(cards) {
        return cards.length == 0;
    }

    randomize() {
        this._guardian = selectRandomlyFrom(this.cards, 1)[0];
        this._level = Math.floor(Math.random()*3)+4;
    }

}

window.customElements.define('guardian-randomizer', GuardianRandomizer);
