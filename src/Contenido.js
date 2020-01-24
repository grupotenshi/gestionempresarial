import React from 'react';
import {Row , Col} from 'react-materialize';
import {  NavLink } from "react-router-dom";

import * as $ from 'jquery';

const Contenido = (props) => {
  function handleClick() {
      $("#toggleDashMenu").toggleClass("active");
    }

return (
<div>
<main>
      <div className="dashboard" style={{display: 'flex'}}>

          <div id="toggleDashMenu" className="togle active" style={{overflow: 'hidden'}}>

              <a className="submenu-btn" href="#">
                  <i className="material-icons">add_box</i>
                  <span>Agregar panel</span>
              </a>

              <a className="submenu-btn" href="#">
                  <i className="material-icons">cancel</i>
                  <span>Remover panel</span>
              </a>


              <a className="submenu-btn" href="#">
                  <i className="material-icons">fullscreen</i>
                  <span>Editar forma</span>
              </a>


          </div>



          <div>
              <a id="btnDashboard" className="btn btn-1 " onClick={handleClick}> <i className="medium material-icons">fast_rewind</i></a>
          </div>

          <section className="container" >
          <div className="row mx-0 justify-content-between align-items-center h-100">
              <div className="col-12 caja boxShadow grey px-0">
                <i className="material-icons btnCancel">cancel</i>

                <div className="row mx-0">
                  <div className="col px-0">
                    <a className="submenu-btn mt-1" href="#">
                        <i className="material-icons">add</i>
                        <span>Nueva variable</span>
                    </a>

                  </div>
                  <div className="col px-0 text-center">
                    <h3>{props.path}</h3>

                  </div>
                  <div className="col px-0">


                  </div>


                </div>


              </div>
              <div className="col-6 caja pl-0">
                <div className="Contenido grey boxShadow h-100 w-100">
                <i className="material-icons btnCancel mr-3">cancel</i></div>
              </div>
              <div className="col-6 caja pr-0">
                <div className="Contenido grey boxShadow h-100 w-100">
                <i className="material-icons btnCancel">cancel</i></div>
              </div>
          </div>
          </section>

      </div>
  </main>

  </div>
)

};

export default Contenido;
