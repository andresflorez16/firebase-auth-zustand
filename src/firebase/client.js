import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCAiIbTZtkV4MHsqeoMcqpfGnrr4t-KSrE',
  authDomain: 'ladrillera-dev.firebaseapp.com',
  projectId: 'ladrillera-dev',
  storageBucket: 'ladrillera-dev.appspot.com',
  messagingSenderId: '46134608117',
  appId: '1:46134608117:web:442c4a947bc561022805bc'
}

const app = initializeApp(firebaseConfig)

export default app
