import { html, LitElement } from '@polymer/lit-element';
import './hero-randomizer.js';
import './marketplace-randomizer.js';
import './monster-randomizer.js';
import './guardian-randomizer.js';
import './dungeon-randomizer.js';

/**
 * @customElement
 * @polymer
 */
class TsqrApp extends LitElement {

  static get properties() {
    return {
      cards: {
        type: Array
      }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <hero-randomizer .cards="${this._filterCategory(this.cards, 'Heroes')}">
      </hero-randomizer>
      <marketplace-randomizer .cards="${this._filterCategory(this.cards, 'Items')}">
      </marketplace-randomizer>
      <monster-randomizer .cards="${this._filterCategory(this.cards, 'Monsters')}">
      </monster-randomizer>
      <guardian-randomizer .cards="${this._filterCategory(this.cards, 'Guardians')}">
      </guardian-randomizer>
      <dungeon-randomizer .cards="${this._filterCategory(this.cards, 'Dungeon Rooms')}">
      </dungeon-randomizer>
    `;
  }

  _filterCategory(cards, category) {
    return cards.filter(card => card.Category == category);
  }

  constructor() {
    super();
    this.cards =
      [
        {
          "Name": "Outlands",
          "Quest": "Promos",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Stalker",
          "Quest": "Promos",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "The Yellow Knight",
          "Quest": "Promos",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Edlin",
          "Quest": "Bandits of Black Rock",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Gorlandor",
          "Quest": "A Mirror in the Dark",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Hawkswood",
          "Quest": "A Mirror in the Dark",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Pylorian",
          "Quest": "A Mirror in the Dark",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Scathian",
          "Quest": "A Mirror in the Dark",
          "Classes": [
            "Rogue",
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Silverhelm",
          "Quest": "A Mirror in the Dark",
          "Classes": [
            "Cleric",
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Stormhand",
          "Quest": "A Mirror in the Dark",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Avania",
          "Quest": "Total Eclipse of the Sun",
          "Classes": [
            "Cleric"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Brimstone",
          "Quest": "Total Eclipse of the Sun",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Ehrlingal",
          "Quest": "Total Eclipse of the Sun",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Felin",
          "Quest": "Total Eclipse of the Sun",
          "Classes": [
            "Cleric",
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Gendarme",
          "Quest": "Total Eclipse of the Sun",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Sephilest",
          "Quest": "Total Eclipse of the Sun",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Baharan",
          "Quest": "Risen from the Mire",
          "Classes": [
            "Cleric"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Darameric",
          "Quest": "Risen from the Mire",
          "Classes": [
            "Cleric",
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Linsha",
          "Quest": "Risen from the Mire",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Markennan",
          "Quest": "Risen from the Mire",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Nimblefingers",
          "Quest": "Risen from the Mire",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Regalen",
          "Quest": "Risen from the Mire",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Darkrend",
          "Quest": "At the Foundations of the World",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Grimwolf",
          "Quest": "At the Foundations of the World",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Honormain",
          "Quest": "At the Foundations of the World",
          "Classes": [
            "Cleric"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Jadress",
          "Quest": "At the Foundations of the World",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Moonblades",
          "Quest": "At the Foundations of the World",
          "Classes": [
            "Fighter",
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Stormskull",
          "Quest": "At the Foundations of the World",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Aird",
          "Quest": "Ripples in Time",
          "Classes": [
            "Rogue"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Arcanian",
          "Quest": "Ripples in Time",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Dunardic",
          "Quest": "Ripples in Time",
          "Classes": [
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Regian",
          "Quest": "Ripples in Time",
          "Classes": [
            "Cleric"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Terakian",
          "Quest": "Ripples in Time",
          "Classes": [
            "Cleric",
            "Fighter"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Veris",
          "Quest": "Ripples in Time",
          "Classes": [
            "Wizard"
          ],
          "Category": "Heroes"
        },
        {
          "Name": "Necklace of Dawn",
          "Quest": "Promos",
          "Category": "Items"
        },
        {
          "Name": "Scionic Annals",
          "Quest": "Bandits of Black Rock",
          "Category": "Items"
        },
        {
          "Name": "Amulet of Infravision",
          "Quest": "A Mirror in the Dark",
          "Category": "Items"
        },
        {
          "Name": "Gem of Healing",
          "Quest": "A Mirror in the Dark",
          "Category": "Items"
        },
        {
          "Name": "Tome of Knowledge",
          "Quest": "A Mirror in the Dark",
          "Category": "Items"
        },
        {
          "Name": "Elven Ring",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Items"
        },
        {
          "Name": "Headband of Intellect",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Items"
        },
        {
          "Name": "Strength Gauntlets",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Items"
        },
        {
          "Name": "Wand of Light",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Items"
        },
        {
          "Name": "Crystal of Scrying",
          "Quest": "Risen from the Mire",
          "Category": "Items"
        },
        {
          "Name": "Holy Symbol",
          "Quest": "Risen from the Mire",
          "Category": "Items"
        },
        {
          "Name": "Potion of Stamina",
          "Quest": "Risen from the Mire",
          "Category": "Items"
        },
        {
          "Name": "Ring of Learning",
          "Quest": "Risen from the Mire",
          "Category": "Items"
        },
        {
          "Name": "Damilu Huskie",
          "Quest": "At the Foundations of the World",
          "Category": "Items"
        },
        {
          "Name": "Daramere's Cloak",
          "Quest": "At the Foundations of the World",
          "Category": "Items"
        },
        {
          "Name": "Potion of Light",
          "Quest": "At the Foundations of the World",
          "Category": "Items"
        },
        {
          "Name": "Ring of Proficiency",
          "Quest": "At the Foundations of the World",
          "Category": "Items"
        },
        {
          "Name": "Amulet of Power",
          "Quest": "Ripples in Time",
          "Category": "Items"
        },
        {
          "Name": "Lightstone Gem",
          "Quest": "Ripples in Time",
          "Category": "Items"
        },
        {
          "Name": "Nature's Amulet",
          "Quest": "Ripples in Time",
          "Category": "Items"
        },
        {
          "Name": "Ring of Spell Storing",
          "Quest": "Ripples in Time",
          "Category": "Items"
        },
        {
          "Name": "Form of the Juggernaut",
          "Quest": "Promos",
          "Category": "Spells"
        },
        {
          "Name": "Dark Fire Torch",
          "Quest": "Bandits of Black Rock",
          "Category": "Spells"
        },
        {
          "Name": "Fireball",
          "Quest": "A Mirror in the Dark",
          "Category": "Spells"
        },
        {
          "Name": "Future Vision",
          "Quest": "A Mirror in the Dark",
          "Category": "Spells"
        },
        {
          "Name": "Magic Missile",
          "Quest": "A Mirror in the Dark",
          "Category": "Spells"
        },
        {
          "Name": "Moonlight",
          "Quest": "A Mirror in the Dark",
          "Category": "Spells"
        },
        {
          "Name": "Arcane Touch",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Spells"
        },
        {
          "Name": "Consecration",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Spells"
        },
        {
          "Name": "Lightning Bolt",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Spells"
        },
        {
          "Name": "Nature's Fury",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Spells"
        },
        {
          "Name": "Arcane Aura",
          "Quest": "Risen from the Mire",
          "Category": "Spells"
        },
        {
          "Name": "Charm Monster",
          "Quest": "Risen from the Mire",
          "Category": "Spells"
        },
        {
          "Name": "Enchant Weapons",
          "Quest": "Risen from the Mire",
          "Category": "Spells"
        },
        {
          "Name": "Vampiric Touch",
          "Quest": "Risen from the Mire",
          "Category": "Spells"
        },
        {
          "Name": "Death Pact",
          "Quest": "At the Foundations of the World",
          "Category": "Spells"
        },
        {
          "Name": "Mirror Image",
          "Quest": "At the Foundations of the World",
          "Category": "Spells"
        },
        {
          "Name": "Tempest",
          "Quest": "At the Foundations of the World",
          "Category": "Spells"
        },
        {
          "Name": "True Seeing",
          "Quest": "At the Foundations of the World",
          "Category": "Spells"
        },
        {
          "Name": "Creeping Death",
          "Quest": "Ripples in Time",
          "Category": "Spells"
        },
        {
          "Name": "Frostbolt",
          "Quest": "Ripples in Time",
          "Category": "Spells"
        },
        {
          "Name": "Mind Control",
          "Quest": "Ripples in Time",
          "Category": "Spells"
        },
        {
          "Name": "Summon Storm",
          "Quest": "Ripples in Time",
          "Category": "Spells"
        },
        {
          "Name": "Hand Axe",
          "Quest": "Promos",
          "Category": "Weapons"
        },
        {
          "Name": "Rapier",
          "Quest": "Bandits of Black Rock",
          "Category": "Weapons"
        },
        {
          "Name": "Hammer",
          "Quest": "A Mirror in the Dark",
          "Category": "Weapons"
        },
        {
          "Name": "Maul",
          "Quest": "A Mirror in the Dark",
          "Category": "Weapons"
        },
        {
          "Name": "Shortbow",
          "Quest": "A Mirror in the Dark",
          "Category": "Weapons"
        },
        {
          "Name": "Shortspear",
          "Quest": "A Mirror in the Dark",
          "Category": "Weapons"
        },
        {
          "Name": "Shortsword",
          "Quest": "A Mirror in the Dark",
          "Category": "Weapons"
        },
        {
          "Name": "Longbow",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Weapons"
        },
        {
          "Name": "Longsword",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Weapons"
        },
        {
          "Name": "Punching Dagger",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Weapons"
        },
        {
          "Name": "Quarterstaff",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Weapons"
        },
        {
          "Name": "Battle Axe",
          "Quest": "Risen from the Mire",
          "Category": "Weapons"
        },
        {
          "Name": "Boomerang",
          "Quest": "Risen from the Mire",
          "Category": "Weapons"
        },
        {
          "Name": "Crystal Dagger",
          "Quest": "Risen from the Mire",
          "Category": "Weapons"
        },
        {
          "Name": "Holy Mace",
          "Quest": "Risen from the Mire",
          "Category": "Weapons"
        },
        {
          "Name": "Broadsword",
          "Quest": "At the Foundations of the World",
          "Category": "Weapons"
        },
        {
          "Name": "Crossbow",
          "Quest": "At the Foundations of the World",
          "Category": "Weapons"
        },
        {
          "Name": "Flail",
          "Quest": "At the Foundations of the World",
          "Category": "Weapons"
        },
        {
          "Name": "Two-Handed Sword",
          "Quest": "At the Foundations of the World",
          "Category": "Weapons"
        },
        {
          "Name": "Cursed Mace",
          "Quest": "Ripples in Time",
          "Category": "Weapons"
        },
        {
          "Name": "King's Sword",
          "Quest": "Ripples in Time",
          "Category": "Weapons"
        },
        {
          "Name": "Longspear",
          "Quest": "Ripples in Time",
          "Category": "Weapons"
        },
        {
          "Name": "Magi Staff",
          "Quest": "Ripples in Time",
          "Category": "Weapons"
        },
        {
          "Name": "Miricelle",
          "Quest": "Bandits of Black Rock"
        },
        {
          "Name": "Stormland Mirror",
          "Quest": "A Mirror in the Dark"
        },
        {
          "Name": "Sun of the Forest",
          "Quest": "Total Eclipse of the Sun"
        },
        {
          "Name": "Elemental Elixir",
          "Quest": "Risen from the Mire"
        },
        {
          "Name": "Elmoran",
          "Quest": "At the Foundations of the World"
        },
        {
          "Name": "Axe of the Giants",
          "Quest": "Ripples in Time"
        },
        {
          "Name": "Lightbringer",
          "Quest": "Ripples in Time"
        },
        {
          "Name": "Black Rock Bandits",
          "Quest": "Bandits of Black Rock",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Kobold Skirmishers",
          "Quest": "A Mirror in the Dark",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Goblin Grunts",
          "Quest": "A Mirror in the Dark",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Hobgoblin Brutes",
          "Quest": "A Mirror in the Dark",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Spider Terrors",
          "Quest": "A Mirror in the Dark",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Ancient Adventurers",
          "Quest": "A Mirror in the Dark",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Goblin King's Guard",
          "Quest": "A Mirror in the Dark",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Twisted Creatures",
          "Quest": "Total Eclipse of the Sun",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Woodland Sprites",
          "Quest": "Total Eclipse of the Sun",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Corrupted Elves",
          "Quest": "Total Eclipse of the Sun",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Foundational Keepers",
          "Quest": "Total Eclipse of the Sun",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Corrupted Centaurs",
          "Quest": "Total Eclipse of the Sun",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Treefolk",
          "Quest": "Total Eclipse of the Sun",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Ensnaring Vines",
          "Quest": "Risen from the Mire",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Bog Zombies",
          "Quest": "Risen from the Mire",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Chaos Lizards",
          "Quest": "Risen from the Mire",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Moor Skeletons",
          "Quest": "Risen from the Mire",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Marsh Trolls",
          "Quest": "Risen from the Mire",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Swamp Spirits",
          "Quest": "Risen from the Mire",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Air Servitors",
          "Quest": "At the Foundations of the World",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Water Servitors",
          "Quest": "At the Foundations of the World",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Earth Servitors",
          "Quest": "At the Foundations of the World",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Fire Servitors",
          "Quest": "At the Foundations of the World",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Divine Founders",
          "Quest": "At the Foundations of the World",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Abyssal Founders",
          "Quest": "At the Foundations of the World",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Doomknights",
          "Quest": "Ripples in Time",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Gnoll Raiders",
          "Quest": "Ripples in Time",
          "Level": 1,
          "Category": "Monsters"
        },
        {
          "Name": "Minions of Chaos",
          "Quest": "Ripples in Time",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Torments",
          "Quest": "Ripples in Time",
          "Level": 2,
          "Category": "Monsters"
        },
        {
          "Name": "Ancient Wyrms",
          "Quest": "Ripples in Time",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Ancient Protectors",
          "Quest": "Ripples in Time",
          "Level": 3,
          "Category": "Monsters"
        },
        {
          "Name": "Smorga the Queen",
          "Quest": "A Mirror in the Dark",
          "Category": "Guardians"
        },
        {
          "Name": "Guardian of the Sun",
          "Quest": "Total Eclipse of the Sun",
          "Category": "Guardians"
        },
        {
          "Name": "Baalok, the Flesh Weaver",
          "Quest": "Risen from the Mire",
          "Category": "Guardians"
        },
        {
          "Name": "Miricelle, Scion Defender",
          "Quest": "At the Foundations of the World",
          "Category": "Guardians"
        },
        {
          "Name": "Death Sentinel",
          "Quest": "Ripples in Time",
          "Category": "Guardians"
        },
        {
          "Name": "Abandoned Gate",
          "Quest": "A Mirror in the Dark",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Mine",
          "Quest": "A Mirror in the Dark",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Crypt",
          "Quest": "A Mirror in the Dark",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Sunken Well",
          "Quest": "A Mirror in the Dark",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Throne Room",
          "Quest": "A Mirror in the Dark",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Vault",
          "Quest": "A Mirror in the Dark",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Fairy Meadow",
          "Quest": "Total Eclipse of the Sun",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Ominous Looking Road",
          "Quest": "Total Eclipse of the Sun",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Hollow Tree",
          "Quest": "Total Eclipse of the Sun",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Tree House",
          "Quest": "Total Eclipse of the Sun",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Elven Outpost",
          "Quest": "Total Eclipse of the Sun",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Elven Ruins",
          "Quest": "Total Eclipse of the Sun",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Alchemy Chamber",
          "Quest": "Risen from the Mire",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "The Servant's Tombs",
          "Quest": "Risen from the Mire",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Bog",
          "Quest": "Risen from the Mire",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Sunken Graveyard",
          "Quest": "Risen from the Mire",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Blood Altar Room",
          "Quest": "Risen from the Mire",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "The Lich's Tomb",
          "Quest": "Risen from the Mire",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Air Temple",
          "Quest": "At the Foundations of the World",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Water Temple",
          "Quest": "At the Foundations of the World",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Earth Temple",
          "Quest": "At the Foundations of the World",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Fire Temple",
          "Quest": "At the Foundations of the World",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Abyssal Temple",
          "Quest": "At the Foundations of the World",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Celestial Temple",
          "Quest": "At the Foundations of the World",
          "Level": 3,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Gate Cavern",
          "Quest": "Ripples in Time",
          "Level": 1,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Dangerous Passageway",
          "Quest": "Ripples in Time",
          "Level": 2,
          "Category": "Dungeon Rooms"
        },
        {
          "Name": "Fire Chasm",
          "Quest": "Ripples in Time",
          "Level": 3,
          "Category": "Dungeon Rooms"
        }
      ];
  }
}

window.customElements.define('tsqr-app', TsqrApp);
