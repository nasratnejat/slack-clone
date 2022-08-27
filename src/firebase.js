import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/analytics'
import { getStorage } from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDGHtIw6vYjYUfAa3xilMQVqps_LyDTGgA',

	authDomain: 'slack-clone-d5e0d.firebaseapp.com',

	databaseURL: 'https://slack-clone-d5e0d-default-rtdb.firebaseio.com',

	projectId: 'slack-clone-d5e0d',

	storageBucket: 'slack-clone-d5e0d.appspot.com',

	messagingSenderId: '722482103299',

	appId: '1:722482103299:web:554a28810f8230df23ba36',

	measurementId: 'G-XKY1E1L3PP',
}

const app = firebase.initializeApp(firebaseConfig)
export const db = getFirestore(app)
const auth = firebase.default.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage = getStorage(app)
export { auth, provider, storage }
export default db
