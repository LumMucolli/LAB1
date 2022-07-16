import React from "react";

import AdminView from "../componentsss/AdminView";
import UserView from "../componentsss/UserView";
import ParaqitProvimet from '../ParaqitProvimet/Components/ParaqitProvimet';
import { paraqitProvimetStore } from '../ParaqitProvimet/actions/store';

import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      <div style={{paddingLeft:'420px',backgroundColor:'#006FFC', fontFamily:'bold', fontWeight:'bold',color:'#9DBEFF'}}>
      Welcome at UBT - Structures Management Information System
      <button onClick={() => signOut(auth)} style={{marginLeft:'45%',marginTop:'10px',borderStyle:'none', backgroundColor:'#9DBEFF',borderRadius:'5px'}}> Sign out</button>
      </div>
      {user.rol === "admin" ? <AdminView path="/"/> : <UserView path="/ParaqitProvimet"/>}
    </div>  
  );
}

export default Home;
