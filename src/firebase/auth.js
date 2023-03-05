// https://firebase.google.com/docs/auth/web/start?authuser=0&hl=es#web-version-9

import app from './client'
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

const auth = getAuth(app)

export const signIn = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const { email: userEmail } = user
    return { code: 200, user: { email: userEmail, name: 'andres' } }
  } catch (error) {
    return { code: 400, error: error.code }
  }
}

export const onAuth = (set) => {
  return onAuthStateChanged(auth, user => {
    if (!user) {
      set({ user: null })
      return
    }
    set({ user: { email: user.email, name: 'andres' } })
  })
}

export const signOutUser = () => {
  return signOut(auth)
}
