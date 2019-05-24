import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './card-data.js';

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
      [[foo("bar")]]
      <h2>Hello [[_sets(cards)]]!</h2>
    `;
  }
  static get properties() {
    return {
      cards: {
        type: Object
      }
    };
  }

  foo(mesg) {
    return "FOO";
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
