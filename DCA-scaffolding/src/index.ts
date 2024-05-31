// import styles from './index.css';
// import { addSongs, getSongs } from './utils/firebaseConfig';
// import './components/export';
// import { Musiclist } from './components/export';

// class AppContainer extends HTMLElement {
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}

// 	connectedCallback() {
// 		this.render();
// 		this.loadSongs();
// 		const formElement = this.shadowRoot?.querySelector('form');
// 		if (formElement) {
// 			formElement.addEventListener('submit', this.handleSubmit.bind(this));
// 		}
// 	}

// 	async handleSubmit(event: SubmitEvent) {
// 		event.preventDefault();
// 		const formData = new FormData(event.target as HTMLFormElement);
// 		const songData = {
// 			name: formData.get('title') as string,
// 			image: formData.get('image') as string,
// 			author: formData.get('author') as string,
// 			album: formData.get('album') as string,
// 			dateAdded: formData.get('dateAdded') as string,
// 			duration: formData.get('duration') as string,
// 		};
// 		await addSongs(songData);

// 		const removeElement = this.shadowRoot?.querySelector('form');
// 		if (removeElement) {
// 			removeElement.reset();
// 		}

// 		this.loadSongs();
// 	}

// 	async loadSongs() {
// 		const saveSongs = await getSongs();

// 		const container = this.shadowRoot?.querySelector('.list-songs');
// 		if (container) {
// 			container.innerHTML = '';

// 			saveSongs.forEach((song) => {
// 				const songComponent = document.createElement('my-music') as Musiclist;
// 				songComponent.name = song.name;
// 				songComponent.image = song.image;
// 				songComponent.autor = song.author;
// 				songComponent.album = song.album;
// 				songComponent.dateAdded = song.dateAdded;
// 				songComponent.duration = song.duration;
// 				container.appendChild(songComponent);
// 			});
// 		}
// 	}

// 	render() {
// 		if (this.shadowRoot) {
// 			this.shadowRoot.innerHTML = `
// 				<style>${styles}</style>
// 				<div class="app-container">
// 					<div class="title"><h1>MY PLAYLIST</h1></div>
// 					<div class = "form-create-song">
// 						<form id="form-song">
// 							<input type="text" name="title" placeholder="Title" required>
// 							<input type="text" name="author" placeholder="Author" required>
// 							<input type="text" name="album" placeholder="Album" required>
// 							<input type="text" name="dateAdded" placeholder="Date Added" required>
// 							<input type="text" name="duration" placeholder="Duration" required>
// 							<input type="text" name="image" placeholder="Image" required>
// 							<input type="submit" id="save-song" value="Save"/>
// 						</form>
// 					</div>
// 					<div class="list-songs"></div>
// 				</div>
//       `;
// 			// input imagen ctrl c ctrl v url imagen
// 		}
// 	}
// }

// customElements.define('app-container', AppContainer);

// import styles from './index.css';
// import { addSongs, getSongs } from './utils/firebaseConfig';
// import './components/export';
// import { Musiclist } from './components/export';

// class AppContainer extends HTMLElement {
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}

// 	connectedCallback() {
// 		this.render();
// 		this.loadSongs();
// 		const formElement = this.shadowRoot?.querySelector('form');
// 		if (formElement) {
// 			formElement.addEventListener('submit', this.handleSubmit.bind(this));
// 		}
// 	}

// 	async handleSubmit(event: SubmitEvent) {
// 		event.preventDefault();
// 		const formData = new FormData(event.target as HTMLFormElement);
// 		const songData = {
// 			name: formData.get('title') as string,
// 			image: formData.get('image') as string,
// 			author: formData.get('author') as string,
// 			album: formData.get('album') as string,
// 			dateAdded: formData.get('dateAdded') as string,
// 			duration: formData.get('duration') as string,
// 		};
// 		await addSongs(songData);

// 		// Actualizar local storage con la nueva canción
// 		this.saveSongToLocal(songData);

// 		const removeElement = this.shadowRoot?.querySelector('form');
// 		if (removeElement) {
// 			removeElement.reset();
// 		}

// 		this.loadSongs();
// 	}

// 	async loadSongs() {
// 		const saveSongs = await getSongs();

// 		// Guardar las canciones obtenidas en local storage
// 		localStorage.setItem('songs', JSON.stringify(saveSongs));

// 		const container = this.shadowRoot?.querySelector('.list-songs');
// 		if (container) {
// 			container.innerHTML = '';

// 			saveSongs.forEach((song) => {
// 				const songComponent = document.createElement('my-music') as Musiclist;
// 				songComponent.name = song.name;
// 				songComponent.image = song.image;
// 				songComponent.autor = song.author;
// 				songComponent.album = song.album;
// 				songComponent.dateAdded = song.dateAdded;
// 				songComponent.duration = song.duration;
// 				container.appendChild(songComponent);
// 			});
// 		}
// 	}

// 	saveSongToLocal(songData: any) {
// 		let songs = JSON.parse(localStorage.getItem('songs') || '[]') || [];
// 		songs.push(songData);
// 		localStorage.setItem('songs', JSON.stringify(songs));
// 	}

// // 	El código saveSongToLocal es responsable de guardar los datos de una canción en el almacenamiento local del navegador. El almacenamiento local es una característica en los navegadores web que permite almacenar datos localmente en el dispositivo del usuario, incluso después de cerrar y volver a abrir el navegador.

// // El propósito de este código es guardar la información de una canción, como su nombre, imagen, autor, álbum, fecha de adición y duración, en el almacenamiento local del usuario.

// // La función toma un único parámetro de entrada llamado songData, que se espera que sea un objeto que contenga la información de la canción.

// // La salida de esta función es el almacenamiento local actualizado con los nuevos datos de la canción agregados.

// // Así es como la función logra su propósito:

// // Primero, recupera los datos de canciones existentes del almacenamiento local utilizando localStorage.getItem('songs'). Si no hay datos existentes, inicializa un arreglo vacío.
// // Luego, analiza los datos recuperados de una cadena a un arreglo utilizando JSON.parse.
// // A continuación, agrega el nuevo objeto songData al arreglo utilizando el método push.
// // Finalmente, convierte el arreglo actualizado de vuelta a una cadena utilizando JSON.stringify y lo guarda en el almacenamiento local utilizando localStorage.setItem('songs', ...).
// // El flujo lógico y la transformación de datos importantes que ocurren aquí son:

// // Recuperar los datos existentes del almacenamiento local y analizarlos de una cadena a un arreglo.
// // Agregar los nuevos datos de la canción al arreglo.
// // Convertir el arreglo actualizado de vuelta a una cadena y guardarlo en el almacenamiento local.
// // En términos simples, esta función toma la información de una nueva canción como entrada, recupera los datos de canciones guardados previamente del almacenamiento local del navegador, agrega la nueva canción a los datos existentes y luego guarda los datos actualizados de vuelta en el almacenamiento local. De esta manera, la colección de canciones del usuario se conserva localmente en su dispositivo, incluso si cierra y vuelve a abrir el navegador o actualiza la página.

// 	render() {
// 		if (this.shadowRoot) {
// 			this.shadowRoot.innerHTML = `
// 				<style>${styles}</style>
// 				<div class="app-container">
// 					<div class="title"><h1>MY PLAYLIST</h1></div>
// 					<div class = "form-create-song">
// 						<form id="form-song">
// 							<input type="text" name="title" placeholder="Title" required>
// 							<input type="text" name="author" placeholder="Author" required>
// 							<input type="text" name="album" placeholder="Album" required>
// 							<input type="text" name="dateAdded" placeholder="Date Added" required>
// 							<input type="text" name="duration" placeholder="Duration" required>
// 							<input type="text" name="image" placeholder="Image" required>
// 							<input type="submit" id="save-song" value="Save"/>
// 						</form>
// 					</div>
// 					<div class="list-songs"></div>
// 				</div>
// 			`;
// 			// input imagen ctrl c ctrl v url imagen
// 		}
// 	}
// }

// customElements.define('app-container', AppContainer);


import styles from './index.css';
import { addSongs, getSongs } from './utils/firebaseConfig';
import './components/export';
import { Musiclist } from './components/export';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.loadSongs();
		const formElement = this.shadowRoot?.querySelector('form');
		if (formElement) {
			formElement.addEventListener('submit', this.handleSubmit.bind(this));
		}
	}

	async handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const songData = {
			name: formData.get('title') as string,
			image: formData.get('image') as string,
			author: formData.get('author') as string,
			album: formData.get('album') as string,
			dateAdded: formData.get('dateAdded') as string,
			duration: formData.get('duration') as string,
		};
		await addSongs(songData);

		// Actualizar local storage y session storage con la nueva canción
		this.saveSongToLocalAndSession(songData);

		const removeElement = this.shadowRoot?.querySelector('form');
		if (removeElement) {
			removeElement.reset();
		}

		this.loadSongs();
	}

	async loadSongs() {
		const saveSongs = await getSongs();

		// Guardar las canciones obtenidas en local storage y session storage
		localStorage.setItem('songs', JSON.stringify(saveSongs));
		sessionStorage.setItem('songs', JSON.stringify(saveSongs));

		const container = this.shadowRoot?.querySelector('.list-songs');
		if (container) {
			container.innerHTML = '';

			saveSongs.forEach((song) => {
				const songComponent = document.createElement('my-music') as Musiclist;
				songComponent.name = song.name;
				songComponent.image = song.image;
				songComponent.autor = song.author;
				songComponent.album = song.album;
				songComponent.dateAdded = song.dateAdded;
				songComponent.duration = song.duration;
				container.appendChild(songComponent);
			});
		}
	}

	saveSongToLocalAndSession(songData:any) {
		let songs = JSON.parse(localStorage.getItem('songs') || '[]');
		songs.push(songData);
		localStorage.setItem('songs', JSON.stringify(songs));

		let sessionSongs = JSON.parse(sessionStorage.getItem('songs') || '[]');
		sessionSongs.push(songData);
		sessionStorage.setItem('songs', JSON.stringify(sessionSongs));
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>${styles}</style>
				<div class="app-container">
					<div class="title"><h1>MY PLAYLIST</h1></div>
					<div class = "form-create-song">
						<form id="form-song">
							<input type="text" name="title" placeholder="Title" required>
							<input type="text" name="author" placeholder="Author" required>
							<input type="text" name="album" placeholder="Album" required>
							<input type="text" name="dateAdded" placeholder="Date Added" required>
							<input type="text" name="duration" placeholder="Duration" required>
							<input type="text" name="image" placeholder="Image" required>
							<input type="submit" id="save-song" value="Save"/>
						</form>
					</div>
					<div class="list-songs"></div>
				</div>
			`;
		}
	}
}

customElements.define('app-container', AppContainer);
