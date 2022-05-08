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
    /* eslint-disable */
    async register ({ commit, dispatch }, { email, password, name }) {
      console.log(auth)
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        const uid = await dispatch('getUid')
        set(ref(database, 'users/' + uid + '/info'), {
          bill: 10090,
          name
        })
      } catch (e) {
        console.log(e.message)
        commit('setError', e.message)
        throw e
      }
    },
    getUid () {
      const user = auth.currentUser
      return user ? user.uid : null
    }
    /* eslint-enable */
  }
}
