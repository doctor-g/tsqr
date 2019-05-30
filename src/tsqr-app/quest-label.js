import { html, LitElement } from 'lit-element';
import { sharedStyles } from './shared-styles.js';

/**
 * @customElement
 * @polymer
 */
class QuestLabel extends LitElement {
  static get properties() {
      return {
        quest: { type: String }
      };
  }

  static get styles() {
    return [
      sharedStyles
    ];
  }

  render() {
    return html`
      [${this.quest.Code}: ${this.quest.Name}]
    `;
  }
}

window.customElements.define('quest-label', QuestLabel);
