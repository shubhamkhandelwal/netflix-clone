import firebase from 'firebase'

const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebaseApp.auth()
const db = firebaseApp.firestore()

export default db
