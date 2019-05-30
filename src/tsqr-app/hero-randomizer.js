import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-icons/iron-icons.js';
import { selectRandomlyFrom } from './randomizer.js';
import './category-heading.js';
import {AbstractRandomizer} from './abstract-randomizer.js';

/**
 * @customElement
 * @polymer
 */
class HeroRandomizer extends AbstractRandomizer {

  static get properties() {
    return {
      cards: {
        type: Array
      },
      selected: {
        type: Array,
        hasChanged: (value, oldValue) => true // Any change triggers update
      },
      _classes: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.cards = [];
    this.selected = [];
    this._classes = ["Cleric", "Fighter", "Rogue", "Wizard"];
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
      `
    ];
  }

  randomize() {
    if (this.shadowRoot.getElementById('fourclass').checked) {
      this._selectFourClasses();
    }
    else {
      this._selectRandomly();
    }
  }

  render() {
    return html`
      <style>
        .heroclass {
          font-style: italic
        }
        .heroclass:after {
          content: ", "
        }
        .heroclass:last-of-type:after {
          content: ""
        }
      </style>
      <category-heading @refresh="${this.randomize}" .disabled="${this._isDisabled(this.cards)}">Heroes</category-heading>
      <paper-checkbox checked id="fourclass">Ensure one of each class</paper-checkbox>
      ${this.selected.length == 0 ?
        html`` :
        html`
      <table>
      ${this.selected.map(hero => html`
        <tr>
        <td>
          ${hero.Name}
        </td>
        <td>
          ${hero.Classes.map(Class => html`<span class="heroclass">${Class}</span>`)}
        </td>
        ${this.showQuests?html`<td><quest-label .quest="${hero.Quest}"></quest-label></td>`:html``}
        </tr>
      </table>
      `)}`
      }
    `;
  }

  _isDisabled(cards) {
    // Not every set of four heroes is a match (e.g. promo + black rock)
    // but it seems every case with one of each class is, so that's our proxy.
    var allFound = true;
    this._classes.forEach(clazz=>{
      for (var i=0; i<this.cards.length; i++) {
        if (this.cards[i].Classes.indexOf(clazz)!=-1) {
          return;
        }
      }
      allFound = false;
    });
    return !allFound;
  }

  _selectRandomly() {
    this.selected = selectRandomlyFrom(this.cards, 4);
    this.requestUpdate('selected');
  }

  _pickRandomHeroes() {
    while (this.selected.length < 4) {
      var index = Math.floor(Math.random() * this.cards.length);
      var hero = this.cards[index];
      var name = hero.Name;
      if (this.selected.indexOf(hero) == -1) {
        this.selected.push(hero);
      }
    }
  }

  _selectFourClasses() {
    do {
      this.selected = selectRandomlyFrom(this.cards, 4);
    } while (!this._areFourClassesSelected());
    this.requestUpdate('selected');
  }

  _areFourClassesSelected() {
    var required = this._classes;
    var permutations = this._permute(this.selected);
    for (var i=0; i<permutations.length; i++) {
      var match = true;
      for (var j=0; j<required.length; j++) {
        if (permutations[i][j].Classes.indexOf(required[j])==-1) {
          match = false;
        }
      }
      if (match) {
        return true;
      }
    }
    return false;
  }

  // Algorithm courtesy https://stackoverflow.com/a/43260158/176007
  _permute(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = this._permute(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
}

window.customElements.define('hero-randomizer', HeroRandomizer);
