import {html, LitElement} from '@polymer/lit-element';
import '@polymer/paper-checkbox/paper-checkbox.js';

/**
 * @customElement
 * @polymer
 */
class QuestSelector extends LitElement {
  static get properties() {
    return {
      quests: {
        type: Array,
      },
      selected: {
        type: Array,
        notify: true,
        hasChanged: (value, oldValue) => true // Any change triggers update.
      }
    };
  }

  updated(changedProperties) {
     // All quests are selected by default.
     // Be sure to use requestUpdate to notify of the array contents change.
    if (changedProperties.has('quests')) {
      this.quests.forEach(quest => this.selected.push(quest));      
      this.requestUpdate('selected', this.selected);
    }
  }

  render() {
    return html`
      <style>
        paper-checkbox {
          display: block;
        }
      </style>
      Quest Filter:
      ${this.quests.map(quest => html`
        <paper-checkbox checked @change="${this._handleClick}" quest="${quest}">${quest}</paper-checkbox>
      `)}
    `;
  }

  _handleClick(e) {
    var quest = e.target.getAttribute("quest");
    if (e.target.checked) {
      this.quests.push(quest);
    }
    else {
      var index = this.selected.indexOf(quest);
      this.selected.splice(index, 1);
      this.requestUpdate('selected', this.selected);
    }
  }

}

window.customElements.define('quest-selector', QuestSelector);
