import React from 'react';
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import { store } from './Profesori/actions/store';
import { piketStore } from './PiketProvimit/actions/store';
import { LendaStore } from "./Lendet/actions/store";
import { DepartamentiStore } from "./Departamenti/actions/store";
import { Provider } from 'react-redux';
import Profesori from './Profesori/Components/Profesoret';
import PiketProvimeve from './PiketProvimit/Components/PiketProvimeve';
import Lendet from "./Lendet/Components/Lenda";
import Departamenti from './Departamenti/Components/Departamenti';
import { Container } from "@material-ui/core";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Components/Navbarcomp';

function App() {
  return (
    <div>
      <Navbarcomp/>
    <BrowserRouter>
      <Switch>
            <Provider path="/profesori" store={store}><Container maxWidth="lg"><Profesori/></Container></Provider>
            <Provider path="/lendet" store={LendaStore}><Container maxWidth="lg"><Lendet/></Container></Provider>
            <Provider path="/piketprovimit" store={piketStore}><Container maxWidth="lg"><PiketProvimeve/></Container></Provider>
            <Provider path="/departamenti" store={DepartamentiStore}><Container maxWidth="lg"><Departamenti/></Container></Provider>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
