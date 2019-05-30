import { LitElement } from 'lit-element';
import './quest-label.js';

/**
 * @customElement
 * @polymer
 */
export class AbstractRandomizer extends LitElement {

    static get properties() {
        return {
            showQuests: { type: Boolean }
        };
    }
}

window.customElements.define('abstract-randomizer', AbstractRandomizer);
