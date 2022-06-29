import React from 'react';
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import { store } from './Profesori/actions/store';
import { piketStore } from './PiketProvimit/actions/store';
import { LendaStore } from "./Lendet/actions/store";
import { DepartamentiStore } from "./Departamenti/actions/store";
import { ProvimetStore } from "./Provimet/actions/store";
import {studentiStore} from "./Studenti/actions/store";
import { paraqitProvimetStore } from './ParaqitProvimet/actions/store';
import {semestriStore} from './Semestri/actions/store';

import { Provider } from 'react-redux';
import Profesori from './Profesori/Components/Profesoret';
import PiketProvimeve from './PiketProvimit/Components/PiketProvimeve';
import Lendet from "./Lendet/Components/Lenda";
import Departamenti from './Departamenti/Components/Departamenti';
import Provimet from './Provimet/Components/Provimet';
import Studenti from './Studenti/Components/Studentet';
import ParaqitProvimet from './ParaqitProvimet/Components/ParaqitProvimet';
import Semestri from './Semestri/Components/Semestri';

import { Container } from "@material-ui/core";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Components/Navbarcomp';
import Signup from "./Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"


function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
            <Provider path="/profesori" store={store}><Navbarcomp/><Profesori/></Provider>
            <Provider path="/lendet" store={LendaStore}><Navbarcomp/><Lendet/></Provider>
            <Provider path="/piketprovimit" store={piketStore}><Navbarcomp/><PiketProvimeve/></Provider>
            <Provider path="/departamenti" store={DepartamentiStore}><Navbarcomp/><Departamenti/></Provider>
            <Provider path="/provimet" store={ProvimetStore}><Navbarcomp/><Provimet/></Provider>
            <Provider path="/studenti" store={studentiStore}><Navbarcomp/><Studenti/></Provider>
             <Provider path="/semestri" store={semestriStore}><Navbarcomp/><Semestri/></Provider>
            <Provider path="/ParaqitProvimet" store={paraqitProvimetStore}><Navbarcomp/><ParaqitProvimet/></Provider>
            
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >

              <div className="w-100" style={{ maxWidth: "400px" }}>
              <PrivateRoute exact path="/dashboard" component={Dashboard}  />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              </div>
              </Container>
            </Switch>
          </AuthProvider>
        </Router>
      
  );
}

export default App;
