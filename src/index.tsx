import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCjnhOZ5oHpGCbil5ktKH86N1yPqlZFafc',
  authDomain: 'chat-e1ddc.firebaseapp.com',
  projectId: 'chat-e1ddc',
  storageBucket: 'chat-e1ddc.appspot.com',
  messagingSenderId: '16013545275',
  appId: '1:16013545275:web:5669b1e7f375ec2788311e',
  measurementId: 'G-Q9WZ019103',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const auth = firebase.auth()
const firestore = firebase.firestore()
export const Context = createContext({ auth, firestore, firebase })

ReactDOM.render(
  <Context.Provider value={{ auth, firestore, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
)
