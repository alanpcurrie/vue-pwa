import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCHHStkZCWF3FNHTbcWQJ5AqGuOq9ELo-A',
  authDomain: 'https://pwa-chat-2a5f9.firebaseapp.com',
  databaseURL: 'https://pwa-chat-2a5f9.firebaseio.com',
  projectId: 'pwa-chat-2a5f9',
  storageBucket: 'pwa-chat-2a5f9.appspot.com',
  messagingSenderId: '187222083715'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
