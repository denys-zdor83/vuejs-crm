import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      /* eslint-disable */
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
      /* eslint-enable */
    }
  }
}
