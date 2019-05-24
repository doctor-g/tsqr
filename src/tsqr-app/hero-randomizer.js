import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class HeroRandomizer extends LitElement {

  static get properties() {
    return {
      cards: {
        type: Array
      },
      selected: {
        type: Array,
        hasChanged: (value, oldValue) => true // Any change triggers update
      }
    };
  }

  constructor() {
    super();
    this.cards = [];
    this.selected = [];
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
      <paper-button raised @click="${this._onClickNormal}">Random Heroes</paper-button>
      <paper-button raised @click="${this._onClickFourClass}">Random Heroes 4 Classes</paper-button>
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
        </tr>
      </table>
      `)}`
      }
    `;
  }

  _onClickNormal() {
    this.selected = [];
    this._pickRandomHeroes();
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

  _onClickFourClass() {
    do {
      this.selected = [];
      this._pickRandomHeroes();
    } while (!this._areFourClassesSelected());
    this.requestUpdate('selected');
  }

  _areFourClassesSelected() {
    var required = ["Rogue", "Cleric", "Fighter", "Wizard"];
    var permutations = [];
    this._permute(this.selected, value=>permutations.push(value));
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


  // Algorithm courtesy http://dsernst.com/2014/12/14/heaps-permutation-algorithm-in-javascript/

  _swap(array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };

  _permute(array, output, n) {
    n = n || array.length; // set n default to array.length
    if (n === 1) {
      output(array);
    } else {
      for (var i = 1; i <= n; i += 1) {
        this._permute(array, output, n - 1);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        this._swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
      }
    }
  };
}

window.customElements.define('hero-randomizer', HeroRandomizer);
