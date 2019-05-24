import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class HeroRandomizer extends LitElement {
  
  static get properties() {
    return {
      heroes: {
        type: Object,
        readOnly: true
      },
      questFilter: {
        type: Array
      },
      selected: {
        type: Array,
        hasChanged: (value, oldValue) => true // Any change triggers update
      }
    };
  }

  render() {
    return html`
      <style>
      </style>
      <paper-button raised @click="${this._onClick}">Random Heroes</paper-button>
      ${this.selected.length==0?
      html``:
      html`${this.selected.map(name=>html`<div>${name}</div>`)}`
      }
    `;
  }

  _onClick() {
    var heroArray = Object.entries(this.heroes);
    while (this.selected.length < 4) {
      var index = Math.floor(Math.random() * heroArray.length);
      var hero = Object.entries(heroArray)[index];
      var name = hero[1][0];
      if (this.selected.indexOf(name) == -1) {
        this.selected.push(name);
      }
    }
    this.selected.forEach(name => console.log(name));
    this.requestUpdate('selected');
  }

  constructor() {
    super();
    this.selected = [];
    this.heroes =  {
      "Outlands": {
        "Quest": "Promos",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 7,
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Stalker": {
        "Quest": "Promos",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 6,
        "Summary": "Stalker uses Gear tokens for strength and provides [Light] at [III].",
        "Types": {
          "Rogue": true,
          "Elf": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true
        },
        "Category": "Heroes"
      },
      "The Yellow Knight": {
        "Quest": "Promos",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 8,
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Edlin": {
        "Quest": "Bandits of Black Rock",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 6,
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Gorlandor": {
        "Quest": "A Mirror in the Dark",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 7,
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Hawkswood": {
        "Quest": "A Mirror in the Dark",
        "Races": [
          "Avian",
          "Elf"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 6,
        "Types": {
          "Rogue": true,
          "Avian": true,
          "Elf": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true,
          "Light": true
        },
        "Category": "Heroes"
      },
      "Pylorian": {
        "Quest": "A Mirror in the Dark",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 6,
        "Summary": "[Arcane Spell] specialist.",
        "Types": {
          "Wizard": true,
          "Human": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Scathian": {
        "Quest": "A Mirror in the Dark",
        "Races": [
          "Halfling"
        ],
        "Classes": [
          "Rogue",
          "Wizard"
        ],
        "Cost": 8,
        "Types": {
          "Rogue": true,
          "Wizard": true,
          "Halfling": true
        },
        "Keywords": {
          "Magic Attack": true,
          "Gold": true
        },
        "Category": "Heroes"
      },
      "Silverhelm": {
        "Quest": "A Mirror in the Dark",
        "Races": [
          "Dwarf"
        ],
        "Classes": [
          "Cleric",
          "Fighter"
        ],
        "Cost": 6,
        "Types": {
          "Cleric": true,
          "Fighter": true,
          "Dwarf": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Stormhand": {
        "Quest": "A Mirror in the Dark",
        "Races": [
          "Dwarf"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 7,
        "Summary": "[Edged Weapon] specialist.",
        "Types": {
          "Fighter": true,
          "Dwarf": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Avania": {
        "Quest": "Total Eclipse of the Sun",
        "Races": [
          "Celestial",
          "Human"
        ],
        "Classes": [
          "Cleric"
        ],
        "Cost": 6,
        "Types": {
          "Cleric": true,
          "Celestial": true,
          "Human": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Brimstone": {
        "Quest": "Total Eclipse of the Sun",
        "Races": [
          "Dwarf"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 8,
        "Summary": "The more [Light] you have, the more powerful Brimstone gets.",
        "Types": {
          "Rogue": true,
          "Dwarf": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true,
          "Light": true
        },
        "Category": "Heroes"
      },
      "Ehrlingal": {
        "Quest": "Total Eclipse of the Sun",
        "Races": [
          "Halfling"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 7,
        "Summary": "Ehrlingal provides [Light] at [II] and is a [Dagger] specialist.",
        "Types": {
          "Rogue": true,
          "Halfling": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true
        },
        "Category": "Heroes"
      },
      "Felin": {
        "Quest": "Total Eclipse of the Sun",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Cleric",
          "Wizard"
        ],
        "Cost": 8,
        "Summary": "Felin can shapeshift her form, depending on the situation.",
        "Types": {
          "Cleric": true,
          "Wizard": true,
          "Elf": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Light": true
        },
        "Category": "Heroes"
      },
      "Gendarme": {
        "Quest": "Total Eclipse of the Sun",
        "Races": [
          "Dwarf"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 6,
        "Summary": "Gendarme uses secret Dwarven magic to empower your [Weapons].",
        "Types": {
          "Wizard": true,
          "Dwarf": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Sephilest": {
        "Quest": "Total Eclipse of the Sun",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 8,
        "Types": {
          "Fighter": true,
          "Elf": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Baharan": {
        "Quest": "Risen from the Mire",
        "Races": [
          "Triton"
        ],
        "Classes": [
          "Cleric"
        ],
        "Cost": 7,
        "Summary": "Baharan uses strange magics, allowing you to discard cards for bonuses.",
        "Types": {
          "Cleric": true,
          "Triton": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Darameric": {
        "Quest": "Risen from the Mire",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Cleric",
          "Wizard"
        ],
        "Cost": 9,
        "Types": {
          "Cleric": true,
          "Wizard": true,
          "Elf": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Linsha": {
        "Quest": "Risen from the Mire",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 7,
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Markennan": {
        "Quest": "Risen from the Mire",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 7,
        "Summary": "[Blunt Weapon] specialist.",
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Nimblefingers": {
        "Quest": "Risen from the Mire",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 8,
        "Types": {
          "Rogue": true,
          "Elf": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Light": true
        },
        "Category": "Heroes"
      },
      "Regalen": {
        "Quest": "Risen from the Mire",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 8,
        "Types": {
          "Wizard": true,
          "Elf": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Darkrend": {
        "Quest": "At the Foundations of the World",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 8,
        "Summary": "Using forbidden blood magic, Darkrend inflicts [Wound] to power her attacks.",
        "Types": {
          "Wizard": true,
          "Human": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Grimwolf": {
        "Quest": "At the Foundations of the World",
        "Races": [
          "Undead",
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 6,
        "Summary": "Risen to complete his mission, Grimwolf bleeds ([Wound]) to power himself.",
        "Types": {
          "Fighter": true,
          "Undead": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Honormain": {
        "Quest": "At the Foundations of the World",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Cleric"
        ],
        "Cost": 7,
        "Types": {
          "Cleric": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Jadress": {
        "Quest": "At the Foundations of the World",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 6,
        "Summary": "[Bow Weapon] specialist.",
        "Types": {
          "Rogue": true,
          "Elf": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true
        },
        "Category": "Heroes"
      },
      "Moonblades": {
        "Quest": "At the Foundations of the World",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter",
          "Rogue"
        ],
        "Cost": 7,
        "Types": {
          "Fighter": true,
          "Rogue": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true
        },
        "Category": "Heroes"
      },
      "Stormskull": {
        "Quest": "At the Foundations of the World",
        "Races": [
          "Human",
          "Orc"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 8,
        "Types": {
          "Wizard": true,
          "Human": true,
          "Orc": true
        },
        "Keywords": {
          "Magic Attack": true,
          "Light": true
        },
        "Category": "Heroes"
      },
      "Aird": {
        "Quest": "Ripples in Time",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Rogue"
        ],
        "Cost": 6,
        "Summary": "Aird uses your opponents' strengths against them.",
        "Types": {
          "Rogue": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true,
          "Gold": true
        },
        "Category": "Heroes"
      },
      "Arcanian": {
        "Quest": "Ripples in Time",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 8,
        "Summary": "Arcanian's sorcery changes dice rolls. She also provides [Light] at [II].",
        "Types": {
          "Wizard": true,
          "Human": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Dunardic": {
        "Quest": "Ripples in Time",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Fighter"
        ],
        "Cost": 6,
        "Summary": "Once a Town Guard, Dunardic uses your [XP] as a resource.",
        "Types": {
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Regian": {
        "Quest": "Ripples in Time",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Cleric"
        ],
        "Cost": 7,
        "Types": {
          "Cleric": true,
          "Human": true
        },
        "Keywords": {
          "Magic Attack": true
        },
        "Category": "Heroes"
      },
      "Terakian": {
        "Quest": "Ripples in Time",
        "Races": [
          "Human"
        ],
        "Classes": [
          "Cleric",
          "Fighter"
        ],
        "Cost": 8,
        "Summary": "[Potion] specialist.",
        "Types": {
          "Cleric": true,
          "Fighter": true,
          "Human": true
        },
        "Keywords": {
          "Physical Attack": true
        },
        "Category": "Heroes"
      },
      "Veris": {
        "Quest": "Ripples in Time",
        "Races": [
          "Elf"
        ],
        "Classes": [
          "Wizard"
        ],
        "Cost": 7,
        "Summary": "Veris has the ability to make [Weapons] glow bright.",
        "Types": {
          "Wizard": true,
          "Elf": true
        },
        "Keywords": {
          "Magic Attack": true,
          "Light": true
        },
        "Category": "Heroes"
      }
    };
  }

}

window.customElements.define('hero-randomizer', HeroRandomizer);
