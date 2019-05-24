import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './card-data.js';
import './quest-selector.js';

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
      <h2>Hello [[_sets(cards)]]!</h2>
    `;
  }
  static get properties() {
    return {
      cards: {
        type: Object
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

  _sets(cards) {
    if (cards) {
      var questSet = new Set();
      Object.entries(cards).forEach(cardType => {
        Object.entries(cardType[1]).forEach(card => {
          questSet.add(card[1]["Quest"]);
        })
      });

      var result = '';
      questSet.forEach(item => result += item);
      return result;
    }
    else {
      return "Cards not loaded.";
    }
  }
}

window.customElements.define('tsqr-app', TsqrApp);
