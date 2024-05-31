import styles from './carta.css';

export enum MusicAttribute {
	'image' = 'image',
	'name' = 'name',
	'autor' = 'autor',
	'album' = 'album',
	'dateAdded' = 'dateAdded',
	'duration' = 'duration',
}

export default class Musiclist extends HTMLElement {
	image?: string;
	name?: string;
	autor?: string;
	album?: string;
	dateAdded?: string;
	duration?: string;

	static get observedAttributes() {
		const attrs: Record<MusicAttribute, null> = {
			image: null,
			name: null,
			autor: null,
			album: null,
			dateAdded: null,
			duration: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propname: MusicAttribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propname) {
			default:
				this[propname] = newValue;
				break;
		}
	}
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <section>
        <div>
        <img src="${this.image}">
        <b>${this.name}</b>
        <p>${this.autor}</p>
        <p>Album: ${this.album}</p>
        <p>Date added: ${this.dateAdded}</p>
        <p>Duration: ${this.duration}</p>
    </div>
    </section>
`;
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('my-music', Musiclist);
