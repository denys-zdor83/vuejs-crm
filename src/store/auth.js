import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      /* eslint-disable */
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
      } catch (e) {
        console.log(e.message)
        throw e
      }
      /* eslint-enable */
    }
  }
}
