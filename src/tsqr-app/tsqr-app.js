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
      _showQuests: {
        type: Boolean,
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
        #filters {
          display: flex;
          flex-wrap: wrap;
        }
        #setfilters {
          flex: 140px;
        }
        #questfilters {
          flex: 200px;
        }
        #options {
          flex: 180px;
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

      <h2>Settings</h2>
      <div id="filters">
      <div id="setfilters">
        <h3>Sets</h3>
      ${this._extractSets(cardDB).map(set=>html`
        <paper-checkbox
          class="setfilter"
          .set="${set}"
          @change="${this._onSetFilterChange}">
            ${set}
        </paper-checkbox>
      `)}
      </div>
      <div id="questfilters">
        <h3>Quests</h3>
      ${cardDB.sort((a,b)=>a.Code.localeCompare(b.Code)).map(entry=>html`
        <paper-checkbox 
          class="questfilter"
          .quest="${entry.Quest}" 
          .sets="${entry.Sets}" 
          @change="${this._onQuestFilterChange}">
            ${entry.Code}: ${entry.Quest}
        </paper-checkbox>
      `)}
      </div>
      <div id="options">
        <h3>Options</h3>
        <paper-checkbox id="showquests" @change="${this._onShowQuestsChange}">Show Quests in results</paper-checkbox>
      </div>
      </div>

      <hero-randomizer 
        .cards="${this._filterCategory(this.cards, 'Heroes')}"
        ?showQuests="${this._showQuests}"
        class="randomizer">
      </hero-randomizer>
      <marketplace-randomizer
       .itemCards="${this._filterCategory(this.cards, 'Items')}"
       .spellCards="${this._filterCategory(this.cards, 'Spells')}"
       .weaponCards="${this._filterCategory(this.cards, 'Weapons')}"
       ?showQuests="${this._showQuests}"
       class="randomizer">
      </marketplace-randomizer>
      <monster-randomizer 
       .cards="${this._filterCategory(this.cards, 'Monsters')}"
       ?showQuests="${this._showQuests}"
       class="randomizer">
      </monster-randomizer>
      <guardian-randomizer 
        .cards="${this._filterCategory(this.cards, 'Guardians')}"
        ?showQuests="${this._showQuests}"
        class="randomizer">
      </guardian-randomizer>
      <dungeon-randomizer 
        .cards="${this._filterCategory(this.cards, 'Dungeon Rooms')}"
        ?showQuests="${this._showQuests}"
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

  _onShowQuestsChange(e) {
    this._showQuests = e.target.checked;
    localStorage.setItem('showQuests', this._showQuests);
  }

  _randomize() {
    // Tell all randomizers to randomize.
    let randomizers = this.shadowRoot.querySelectorAll(".randomizer");
    randomizers.forEach(randomizer=>randomizer.randomize());
  }

  _extractSets(cards) {
    var setOfSets = new Set();
    cards.forEach(quest=>quest.Sets.forEach(set=>setOfSets.add(set)));
    return Array.from(setOfSets).sort((a,b)=>a.localeCompare(b));
  }

  _onSetFilterChange(e) {
    var selectedSet = e.target.set;
    var isSelected = e.target.checked;
    var questFilters = this.shadowRoot.querySelectorAll('.questfilter');
    questFilters.forEach(questFilter=>{
      if (questFilter.sets.indexOf(selectedSet)!=-1) {
        questFilter.checked = isSelected;
      }
    });

    this._syncSetSelectionToQuestSelection();
    this._updateFilters();
  }

  _updateFilters() {
    var questFilters = this.shadowRoot.querySelectorAll('.questfilter');
    this._excludes = [];
    questFilters.forEach(questFilter => {
      if (!questFilter.checked) {
        this._excludes.push(questFilter.quest);
      }
    });
    this.requestUpdate('_excludes');

    // Update the cards based on the filter selection
    this.cards = cardDB.filter(quest => this._excludes.indexOf(quest.Quest) == -1);
    this.requestUpdate('cards');

    // Save to localstorage
    this.shadowRoot.querySelectorAll(".setfilter").forEach(item => {
      localStorage.setItem(item.set, item.checked);
    });
    this.shadowRoot.querySelectorAll(".questfilter").forEach(item => {
      localStorage.setItem(item.quest, item.checked);
    });
  }

  _onQuestFilterChange(e) {
    this._syncSetSelectionToQuestSelection();
    this._updateFilters();
  }

  _syncSetSelectionToQuestSelection() {
    // Make sure to deselect sets whose contents is no longer checked.
    this.shadowRoot.querySelectorAll('.setfilter').forEach(element=>{
      var allSelected = true;
      this.shadowRoot.querySelectorAll(".questfilter").forEach(questelement => {
        if (!questelement.checked && questelement.sets.indexOf(element.set)!==-1) {
          allSelected = false;
        }
      });
      element.checked = allSelected;
    });
  }

  _filterCategory(cards, category) {
    var result = [];
    cards.forEach(quest=>result = result.concat(quest[category]));  
    return result;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Each filter should be updated based on its state from local storage,
    // but if there's nothing in local storage, then default to checked.
    this.shadowRoot.querySelectorAll('.setfilter').forEach(element=>{
      let storedValue = localStorage.getItem(element.set);
      element.checked = storedValue === null || storedValue === "true";
    });
    this.shadowRoot.querySelectorAll('.questfilter').forEach(element=>{
      let storedValue = localStorage.getItem(element.quest);
      element.checked = storedValue === null || storedValue === "true";
    });

    // Update the options as well
    this._showQuests = localStorage.getItem('showQuests') === "true";
    this.shadowRoot.querySelector('#showquests').checked = this._showQuests;

    // Make sure the excludes list matches the checkbox selection
    this._updateFilters();

    // Set up add-to-homescreen
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
