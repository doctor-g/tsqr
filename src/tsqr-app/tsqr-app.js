import { html, css, LitElement } from 'lit-element';
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
import '@polymer/paper-toast/paper-toast.js';

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
      },
      // Response from the beforeinstallprompt event
      _deferredPrompt: { type: Object }
    };
  }

  static get styles() {
    return [
      sharedStyles
    ]
  }

  constructor() {
    super();
    this._excludes = [];
    this.cards = cardDB;
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
        .about {
          margin-top: 16px;
          font-size: 85%;
        }
      </style>
      
      <h1>Thunderstone Quest Randomizer</h1>

      <paper-button raised @click="${this._randomize}">Randomize!</paper-button>

      <h2>Quests</h2>
      ${cardDB.sort((a,b)=>a.Code.localeCompare(b.Code)).map(entry=>html`
        <paper-checkbox checked quest="${entry.Quest}" @change="${this._onFilterChange}">${entry.Code}: ${entry.Quest}</paper-checkbox>
      `)}

      <hero-randomizer 
        .cards="${this._filterCategory(this.cards, 'Heroes')}"
        class="randomizer">
      </hero-randomizer>
      <marketplace-randomizer
       .itemCards="${this._filterCategory(this.cards, 'Items')}"
       .spellCards="${this._filterCategory(this.cards, 'Spells')}"
       .weaponCards="${this._filterCategory(this.cards, 'Weapons')}"
       class="randomizer">
      </marketplace-randomizer>
      <monster-randomizer 
       .cards="${this._filterCategory(this.cards, 'Monsters')}"
       class="randomizer">
      </monster-randomizer>
      <guardian-randomizer 
        .cards="${this._filterCategory(this.cards, 'Guardians')}"
        class="randomizer">
      </guardian-randomizer>
      <dungeon-randomizer 
        .cards="${this._filterCategory(this.cards, 'Dungeon Rooms')}"
        class="randomizer">
      </dungeon-randomizer>

      <sw-update-toast></sw-update-toast>
      <paper-toast id="a2hs" duration="10000">
        Add to home screen? 
        <paper-button @click="${this._addToHomeScreen}">Yes</paper-button>
        <paper-button @click="${this._dismissA2HS}">No</paper-button>
      </paper-toast>

      <div class="about">
      <a href="https://github.com/doctor-g/tsqr">About this App</a>
      </div>
    `;
  }

  _randomize() {
    // Tell all randomizers to randomize.
    let randomizers = this.shadowRoot.querySelectorAll(".randomizer");
    randomizers.forEach(randomizer=>randomizer.randomize());
  }

  _extractQuests(cards) {
    var questSet = new Set();
    cards.forEach(quest=>questSet.add(quest.Quest));
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

    this.cards = cardDB.filter(quest=>this._excludes.indexOf(quest.Quest)==-1);
    this.requestUpdate('cards');
  }

  _filterCategory(cards, category) {
    var result = [];
    cards.forEach(quest=>result = result.concat(quest[category]));  
    return result;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this._deferredPrompt = e;
      // Prompt the user to add it to their home screen.
      let a2hs = this.shadowRoot.getElementById("a2hs");
      a2hs.open();
    });
  }

  _addToHomeScreen() {
    if (this._deferredPrompt) {
      this._deferredPrompt.prompt();
      this._deferredPrompt = null;
    }
  }

  _dismissA2HS() {
    let a2hs = this.shadowRoot.getElementById("a2hs");
    a2hs.close();
  }
}

window.customElements.define('tsqr-app', TsqrApp);
