import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//Url Route
import {
  Route,
  NavLink,
  Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import SubMenu from "./SubMenu";
import menuPrincipal from "./routes.js";


const menu = (
  <ul>
    {menuPrincipal.map((prop, key) => {
        return (
          <li key={key}>
            <NavLink className="sub-menu" activeClassName="active" to={prop.path} dangerouslySetInnerHTML={{__html: prop.contenido}} />
          </li>
        );
    })}

  </ul>
);

const routerSubMenu = (
  <Switch>
    {menuPrincipal.map((prop, key) => {
        return (
        <Route exact key={key} path={prop.path+"*"} component={() => <SubMenu path={prop.path} submenu={prop.submenu}/>} />
        );
    })}
      <Redirect from="/" to="/PanelDeControl" />
  </Switch>
);

const routing = (
  <Router>
    <div>
    <header>
        <nav>
        {menu}
        </nav>
    </header>
    {routerSubMenu}
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
