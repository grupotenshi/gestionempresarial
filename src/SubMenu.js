import React from 'react';

//Url Route
import {
  Route,
  NavLink,
  Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Contenido from './Contenido'

const RouterContenido = (props) => {


return (
  <Switch>
    {props.submenu.map((prop, key) => {
        return (
        <Route key={key} exact path={prop.path+"*"} component={() => <Contenido path={prop.path}/>} />
        );
    })}
  </Switch>
)

};

const Submenu = (props) => {


return (
  <div>
    <div className="submenu">
    {props.submenu.map((prop, key) => {
        return (
          <NavLink exact to={prop.path} activeClassName="active" className="submenu-btn" href="#" key={key}>
            <i className={prop.claseicono}></i>
            <span>{prop.span}</span>
          </NavLink>
        );
    })}

    </div>
    <RouterContenido {...props}/>
  </div>
)

};

export default Submenu;
