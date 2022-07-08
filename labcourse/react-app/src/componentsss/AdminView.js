import React from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbarcomp from '../Components/Navbarcomp';

import { Provider } from 'react-redux';
import { DepartamentiStore } from "../Departamenti/actions/store";
import Departamenti from '../Departamenti/Components/Departamenti';
import { LendaStore } from "../Lendet/actions/store";
import Lendet from "../Lendet/Components/Lenda";
import { store } from '../Profesori/actions/store';
import Profesori from '../Profesori/Components/Profesoret';
import { piketStore } from '../PiketProvimit/actions/store';
import PiketProvimeve from '../PiketProvimit/Components/PiketProvimeve';
import Provimet from '../Provimet/Components/Provimet';
import Studenti from '../Studenti/Components/Studentet';
import ParaqitProvimet from '../ParaqitProvimet/Components/ParaqitProvimet';
import Semestri from '../Semestri/Components/Semestri';
import { ProvimetStore } from "../Provimet/actions/store";
import {studentiStore} from "../Studenti/actions/store";
import { paraqitProvimetStore } from '../ParaqitProvimet/actions/store';
import {semestriStore} from '../Semestri/actions/store';


function AdminView() {
  return(
    <Router>
      <Switch>
        <Provider path="/departamenti" store={DepartamentiStore}><Navbarcomp/><Departamenti/></Provider>
        <Provider path="/lendet" store={LendaStore}><Navbarcomp/><Lendet/></Provider>
        <Provider path="/profesori" store={store}><Navbarcomp/><Profesori/></Provider>
        <Provider path="/piketprovimit" store={piketStore}><Navbarcomp/><PiketProvimeve/></Provider>
        <Provider path="/provimet" store={ProvimetStore}><Navbarcomp/><Provimet/></Provider>
        <Provider path="/studenti" store={studentiStore}><Navbarcomp/><Studenti/></Provider>
        <Provider path="/semestri" store={semestriStore}><Navbarcomp/><Semestri/></Provider>
        <Provider path="/ParaqitProvimet" store={paraqitProvimetStore}><Navbarcomp/><ParaqitProvimet/></Provider>
     </Switch>
    </Router>
  );
}

export default AdminView;