import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseApp = initializeApp({
  /* config */
})

const auth = getAuth(firebaseApp)
onAuthStateChanged(auth, user => {
  // Check for user status
})
