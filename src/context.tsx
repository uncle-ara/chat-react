import { createContext } from 'react'
import { auth, firestore, firebase } from './firebase'

export const initialContext = { auth, firestore, firebase }
export const Context = createContext(initialContext)
