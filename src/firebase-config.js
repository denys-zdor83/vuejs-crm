import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
  /* eslint-disable */
  apiKey: "AIzaSyDcRgvCZp6JaluyAnxjc4axvT267hmQssQ",
  authDomain: "vuejs-crm-5d8d1.firebaseapp.com",
  databaseURL: "https://vuejs-crm-5d8d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vuejs-crm-5d8d1",
  storageBucket: "vuejs-crm-5d8d1.appspot.com",
  messagingSenderId: "614013795172",
  appId: "1:614013795172:web:35413bb44d084bf4921871"
  /* eslint-enable */
})

export const auth = getAuth(firebaseApp)
