import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { auth, database } from '../firebase-config'

export default {
  actions: {
    async login ({ commit }, { email, password }) {
      /* eslint-disable */
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
      } catch (e) {
        console.log(e.message)
        commit('setError', e.message)
        throw e
      }
      /* eslint-enable */
    },
    async logout () {
      await signOut(auth)
    },
    async register ({ commit }, { email, password, name }) {
      /* eslint-disable */
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
        set(ref(database, 'users/' + user.user.uid + '/info'), {
          bill: 10090,
          name
        })
      } catch (e) {
        console.log(e.message)
        commit('setError', e.message)
        throw e
      }
      /* eslint-enable */
    }
  }
}
