// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyA2g4FXl-_uoGFTbWAvB1eNwA-EXnpg8vw",
  authDomain: "login-27b21.firebaseapp.com",
  projectId: "login-27b21",
  storageBucket: "login-27b21.appspot.com",
  messagingSenderId: "1096762762036",
  appId: "1:1096762762036:web:c644d9843eb0bc5df87b61"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
