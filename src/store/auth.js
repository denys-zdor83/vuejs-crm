import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      /* eslint-disable */
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
      } catch (e) {
        throw e
      }
      /* eslint-enable */
    },
    async register ({ dispatch }, { email, password, name }) {
      /* eslint-disable */
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const uid = userCredential.user.uid || null
          console.log('-----------uid---------', uid)
          console.log('-----------name---------', name)
          dispatch('writeUserData', { uid, name })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })
      } catch (e) {
        throw e
      }
      /* eslint-enable */
    },
    async writeUserData (ctx, userData) {
      console.log('-----------writeUserData---------')
      console.log('-----------userData---------', userData)

      const db = getDatabase()
      console.log('-------db---------', db)
      await set(ref(db, `/users/${userData.uid}/info`), {
        bill: 10000,
        name: userData.name
      })
    },
    async logout () {
      const auth = getAuth()
      await signOut(auth)
    }
  }
}
