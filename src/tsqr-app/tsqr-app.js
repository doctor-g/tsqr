import { html, css, LitElement } from '@polymer/lit-element';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-button/paper-button.js';
import './hero-randomizer.js';
import './marketplace-randomizer.js';
import './monster-randomizer.js';
import './guardian-randomizer.js';
import './dungeon-randomizer.js';
import { sharedStyles } from './shared-styles.js';
import { cardDB } from './card-db.js';
import './sw-update-toast.js';

/**
 * @customElement
 * @polymer
 */
class TsqrApp extends LitElement {

  static get properties() {
    return {
      cards: {
        type: Array,
        hasChanged(newVal,oldVal) { return true; }
      },
      _excludes: {
        type: Array,
        hasChanged(newVal,oldVal) { return true; }
      }
    };
  }

  static get styles() {
    return [
      sharedStyles
    ]
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        paper-checkbox {
          display: block;
        }
      </style>
      
      <h1>Thunderstone Quest Randomizer</h1>

      <paper-button raised @click="${this._randomize}">Randomize!</paper-button>

      <h2>Quests</h2>
      ${this._extractQuests(cardDB).map(quest=>html`
        <paper-checkbox checked quest="${quest}" @change="${this._onFilterChange}">${quest}</paper-checkbox>
      `)}

      <hero-randomizer 
        .cards="${this._filterCategory(this.cards, ['Heroes'])}"
        class="randomizer">
      </hero-randomizer>
      <marketplace-randomizer
       .cards="${this._filterCategory(this.cards, ['Items', 'Spells', 'Weapons'])}"
       class="randomizer">
      </marketplace-randomizer>
      <monster-randomizer 
       .cards="${this._filterCategory(this.cards, ['Monsters'])}"
       class="randomizer">
      </monster-randomizer>
      <guardian-randomizer 
        .cards="${this._filterCategory(this.cards, ['Guardians'])}"
        class="randomizer">
      </guardian-randomizer>
      <dungeon-randomizer 
        .cards="${this._filterCategory(this.cards, ['Dungeon Rooms'])}"
        class="randomizer">
      </dungeon-randomizer>

      <sw-update-toast></sw-update-toast>
    `;
  }

  _randomize() {
    // Tell all randomizers to randomize.
    let randomizers = this.shadowRoot.querySelectorAll(".randomizer");
    randomizers.forEach(randomizer=>randomizer.randomize());
  }

  _extractQuests(cards) {
    var questSet = new Set();
    cards.forEach(card=>questSet.add(card.Quest));
    return Array.from(questSet);
  }

  _onFilterChange(e) {
    var quest = e.target.getAttribute('quest');
    if (e.target.checked) {
      var index = this._excludes.indexOf(quest);
      this._excludes.splice(index, 1);
    } 
    else {
      this._excludes.push(quest);
    }
    
    this.requestUpdate('_excludes');

    this.cards = cardDB.filter(card=>this._excludes.indexOf(card.Quest)==-1);
    this.requestUpdate('cards');
  }

  _filterCategory(cards, categories) {
    return cards.filter(card => categories.indexOf(card.Category)!=-1);
  }

  constructor() {
    super();
    this._excludes = [];
    this.cards = cardDB;
  }
}

window.customElements.define('tsqr-app', TsqrApp);
