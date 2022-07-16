import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavbarcompStudenti from '../Components/NavbarcompStudenti';

import { Provider } from 'react-redux';

import { paraqitProvimetStore } from '../ParaqitProvimet/actions/store';
import {semestriStore} from '../Semestri/actions/store';
import ParaqitProvimet from '../ParaqitProvimet/Components/ParaqitProvimet';
import Semestri from '../Semestri/Components/Semestri';

function UserView() {
  return(
    <Router>
      <Switch>
        <Provider exact path="/semestri" store={semestriStore}><NavbarcompStudenti/><Semestri/></Provider>
        <Provider exact path="/ParaqitProvimet" store={paraqitProvimetStore}><NavbarcompStudenti/><ParaqitProvimet/></Provider>
     </Switch>
    </Router>
  );
}

export default UserView;

