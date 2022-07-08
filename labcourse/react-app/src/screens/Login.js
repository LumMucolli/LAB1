import React, {useState } from "react";
import { Form, Button, Card } from "react-bootstrap"

import firebaseApp from "../firebase/credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);

function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegister, setisRegister] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegister) {
      // registrar
      registrarUsuario(email, password, rol);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <div style={{paddingLeft:'250px', paddingRight:'450px', marginTop:'100px', marginLeft:'140px'}}>
    <Card style={{paddingLeft:'150px'}}>
      <Card.Body>
        <h1>{isRegister ? "Register" : "Log in"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
        <Form.Label>Email:
        <Form.Control type="email" id="email" />
        </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:
          <Form.Control type="password" id="password"/>
          </Form.Label>
         </Form.Group>

        <Form.Group>
        <Form.Label style={{width:'210px'}}>Role:
          <Form.Select id="rol">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select></Form.Label>
        </Form.Group>
        
        <Form.Label style={{width:'210px'}}>
        <Form.Control
          type="submit"
          value={isRegister ? "Register" : "Log in"}
        />
        </Form.Label>

      </Form>
      <Button onClick={() => setisRegister(!isRegister)} style={{width:'210px'}}>
        {isRegister ? "Already have an account?" : "Register"}
      </Button>
      </Card.Body>
      </Card>
      
    </div>
  );
}

export default Login;