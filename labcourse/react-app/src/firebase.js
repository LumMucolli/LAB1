import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDsLecbNgg-D8AzKbHMgq4dWMEu8BVWs34",
  authDomain: "auth-development-c99b1.firebaseapp.com",
  projectId: "auth-development-c99b1",
  storageBucket: "auth-development-c99b1.appspot.com",
  messagingSenderId: "220741640343",
  appId: "1:220741640343:web:61dce60b8e48719e4b49d2"
})

export const auth = app.auth()
export default app
