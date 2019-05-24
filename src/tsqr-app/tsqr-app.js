import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './card-data.js';
import './quest-selector.js';
import './hero-randomizer.js';

/**
 * @customElement
 * @polymer
 */
class TsqrApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <card-data cards="{{cards}}"></card-data>
      <quest-selector 
        quests="[[quests]]"
        selected="{{questFilter}}">
      </quest-selector>

      <hero-randomizer cards="[[_filterCategory(cards, 'Heroes')]]">
      </hero-randomizer>

      <br/>
      [[_filterCategory(cards, 'Heroes')]]
    `;
  }
  static get properties() {
    return {
      cards: {
        type: Array
      },
      quests: {
        type: Array,
        value: [
          'A Mirror in the Dark',
          'Total Eclipse of the Sun',
          'Risen from the Mire',
          'At the Foundations of the World',
          'Ripples in Time',
          'Promos',
          'Bandits of Black Rock'
        ]
      },
      questFilter: {
        type: Array,
        value: function() { return [] }
      }
    };
  }

  _filterCategory(cards, category) {
    return cards.filter(card => card.Category==category);
  }

}

window.customElements.define('tsqr-app', TsqrApp);
