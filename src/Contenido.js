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
                //<div className="Contenido grey boxShadow h-100 w-100">
                //<i className="material-icons btnCancel mr-3">cancel</i></div>

                <ul class="collapsible">
                            <!-- CACORRO EL QUE LO LEA -->
                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Formatos</span></div>
                                <div class="collapsible-body bg-gris-claro">
                                    <div class="row justify-content-around">

                                        <div class="input-field col-2">
                                            <input id="Hora" type="text" class="validate">
                                            <label for="Hora" class="font-weight-bold">Formato de Hora</label>
                                            <i class="material-icons prefix">help</i>
                                        </div>

                                        <div class="input-field col-2">
                                            <input id="fecha" type="text" class="validate">
                                            <label for="fecha" class="font-weight-bold">formato de fecha</label>
                                            <i class="material-icons prefix">help</i>
                                        </div>


                                        <div class="input-field col-2">
                                            <input id="numeros" type="text" class="validate">
                                            <label for="numeros" class="font-weight-bold">formato de numeros</label>
                                            <i class="material-icons prefix">help</i>
                                        </div>

                                        <div class="input-field col-2">
                                            <input id="dinero" type="text" class="validate">
                                            <label for="dinero" class="font-weight-bold">formato de dinero</label>
                                            <i class="material-icons prefix">help</i>
                                        </div>

                                        <div class="input-field col-2">
                                            <input id="icon_prefix" type="text" class="validate">
                                            <label for="icon_prefix">First Name</label>
                                            <i class="material-icons prefix">help</i>
                                        </div>


                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Atajos de teclado</span></div>
                                <div class="collapsible-body bg-gris">
                                    <div class="container ">
                                        <div class="header row align-items-cemter justify-content-center ">
                                            <div class="col-10 pl-5  d-flex align-items-center">Funciones</div>
                                            <div class="col-2 d-flex align-items-center  justify-content-center">Atajos</div>
                                        </div>

                                        <ul class="collapsible">
                                            <li class="active">
                                                <div class="collapsible-header p-0">
                                                    <div class="row w-100 align-items-center">
                                                        <div class="col-10 d-flex align-items-center ">
                                                            <i class="material-icons">add_box</i> CUADRO DE MANDO INTEGRAL</div>
                                                        <div class="col-2 text-center"></div>
                                                    </div>
                                                </div>

                                                <div class="collapsible-body tabla ">

                                                    <div class="row  align-items-center align-items-center">
                                                        <div class="col-10 d-flex align-items-center ">
                                                            CUADRO DE MANDO INTEGRAL</div>
                                                        <div class="col-2 text-center">Ctrl+R</div>
                                                    </div>
                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            SELECCIONAR TODO</div>
                                                        <div class="col-2 text-center">Ctrl+A</div>
                                                    </div>
                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            COPIAR</div>
                                                        <div class="col-2 text-center">Ctrl+C</div>
                                                    </div>
                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            PEGAR</div>
                                                        <div class="col-2 text-center">Ctrl+V</div>
                                                    </div>



                                                </div>
                                            </li>

                                            <li>
                                                <div class="collapsible-header p-0" s>
                                                    <div class="row w-100 align-items-center mx-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            <i class="material-icons">add_box</i>GESTIÓN CONTABLE</div>
                                                        <div class="col-2 text-center"></div>
                                                    </div>
                                                </div>

                                                <div class="collapsible-body tabla py-0  px-0 ">


                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            GESTIÓN FINANCIERA</div>
                                                        <div class="col-2 text-center">Ctrl+R</div>
                                                    </div>



                                                </div>
                                            </li>

                                            <li>
                                                <div class="collapsible-header p-0">
                                                    <div class="row w-100 align-items-center mx-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            <i class="material-icons">add_box</i>GESTIÓN FINANCIERA</div>
                                                        <div class="col-2 text-center"></div>
                                                    </div>
                                                </div>

                                                <div class="collapsible-body tabla py-0  px-0 ">


                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            CUADRO DE MANDO INTEGRAL</div>
                                                        <div class="col-2 text-center">Ctrl+R</div>
                                                    </div>



                                                </div>
                                            </li>


                                            <li>
                                                <div class="collapsible-header p-0">
                                                    <div class="row w-100 align-items-center mx-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            <i class="material-icons">add_box</i>CALENDARIO DE ACTIVIDADES</div>
                                                        <div class="col-2 text-center"></div>
                                                    </div>
                                                </div>


                                                <div class="collapsible-body tabla py-0  px-0 ">


                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            RECURSOS HUMANOS</div>
                                                        <div class="col-2 text-center">Ctrl+R</div>
                                                    </div>



                                                </div>
                                            </li>

                                            <li>
                                                <div class="collapsible-header p-0">
                                                    <div class="row w-100 align-items-center mx-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            <i class="material-icons">add_box</i> RECURSOS HUMANOS</div>
                                                        <div class="col-2 text-center"></div>
                                                    </div>
                                                </div>

                                                <div class="collapsible-body tabla py-0  px-0 ">


                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                        <div class="col-10 pr-0 d-flex align-items-center ">
                                                            <i class="material-icons"></i> CUADRO DE MANDO INTEGRAL</div>
                                                        <div class="col-2 text-center">Ctrl+R</div>
                                                    </div>



                                                </div>
                                            </li>

                                        </ul>
                
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Cuadro de mando integral</span></div>
                                <div class="collapsible-body bg-gris-claro">


                                    <div class="row  justify-content-around font-weight-bold">
                                        <div class="col-6">
                                            <div class="div">
                                                <div class="row justify-content-center mx-0">
                                                    <div class="col-10 text-center border py-2 font-weight-bold">Orden por defecto</div>
                                                    <div class="col-5 border py-2 font-weight-bold">Listados</div>
                                                    <div class="col-5 py-2 font-weight-bold">Orden</div>
                                                    <div class="col-10 px-0">

                                                        <ul class="collapsible">

                                                            <li>
                                                                <div class="collapsible-header p-0">
                                                                    <div class="row w-100 align-items-center mx-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            <i class="material-icons">add_box</i>Captura de variables</div>
                                                                        <div class="col-5 text-center"></div>
                                                                    </div>
                                                                </div>

                                                                <div class="collapsible-body tabla py-0  px-0 ">
                                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            Variables</div>
                                                                        <div class="col-5 text-center ">
                                                                            <a href="#" class="btn"> Descendente</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>


                                                            <li>
                                                                <div class="collapsible-header p-0">
                                                                    <div class="row w-100 align-items-center mx-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            <i class="material-icons">add_box</i>Administrar variables</div>
                                                                        <div class="col-5 text-center"></div>
                                                                    </div>
                                                                </div>

                                                                <div class="collapsible-body tabla py-0  px-0 ">
                                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            variables</div>
                                                                        <div class="col-5 text-center">Ctrl+R</div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div class="collapsible-header p-0">
                                                                    <div class="row w-100 align-items-center mx-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            <i class="material-icons">add_box</i>Administrar indicadores</div>
                                                                        <div class="col-5 text-center"></div>
                                                                    </div>
                                                                </div>

                                                                <div class="collapsible-body tabla py-0  px-0 ">
                                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            variables</div>
                                                                        <div class="col-5 text-center">Ctrl+R</div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div class="collapsible-header p-0">
                                                                    <div class="row w-100 align-items-center mx-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            <i class="material-icons">add_box</i>Administrar modelos</div>
                                                                        <div class="col-5 text-center"></div>
                                                                    </div>
                                                                </div>

                                                                <div class="collapsible-body tabla py-0  px-0 ">
                                                                    <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                        <div class="col-7 pr-0 d-flex align-items-center ">
                                                                            variables</div>
                                                                        <div class="col-5 text-center">Ctrl+R</div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                        </ul>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row justify-content-center mx-0">
                                                <div class="col-10 text-center border py-2 font-weight-bold">Valores por defecto</div>
                                                <div class="col-5 border py-2 font-weight-bold">Vistas de creacion</div>
                                                <div class="col-5 py-2"></div>
                                                <div class="col-10 px-0">

                                                    <ul class="collapsible">

                                                        <li class="active">
                                                            <div class="collapsible-header p-0">
                                                                <div class="row w-100 align-items-center mx-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        <i class="material-icons">add_box</i>Captura de variables</div>
                                                                    <div class="col-5 text-center"></div>
                                                                </div>
                                                            </div>

                                                            <div class="collapsible-body tabla py-0  px-0 ">
                                                                <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        Nueva variable</div>
                                                                    <div class="col-5 text-center">
                                                                        <a href="#" class="btn">Editar</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>


                                                        <li>
                                                            <div class="collapsible-header p-0">
                                                                <div class="row w-100 align-items-center mx-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        <i class="material-icons">add_box</i>Administrar indicadores</div>
                                                                    <div class="col-5 text-center"></div>
                                                                </div>
                                                            </div>

                                                            <div class="collapsible-body tabla py-0  px-0 ">
                                                                <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        Nueva variable</div>
                                                                    <div class="col-5 text-center">Ctrl+R</div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="collapsible-header p-0">
                                                                <div class="row w-100 align-items-center mx-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        <i class="material-icons">add_box</i>Administrar modelos</div>
                                                                    <div class="col-5 text-center"></div>
                                                                </div>
                                                            </div>

                                                            <div class="collapsible-body tabla py-0  px-0 ">
                                                                <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        variables</div>
                                                                    <div class="col-5 text-center">Ctrl+R</div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="collapsible-header p-0">
                                                                <div class="row w-100 align-items-center mx-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        <i class="material-icons">add_box</i>Generar informes</div>
                                                                    <div class="col-5 text-center"></div>
                                                                </div>
                                                            </div>

                                                            <div class="collapsible-body tabla py-0  px-0 ">
                                                                <div class="row  w-100 align-items-center align-items-center mx-0 px-0 mb-0">
                                                                    <div class="col-7 pr-0 d-flex align-items-center ">
                                                                        variables</div>
                                                                    <div class="col-5 text-center">Ctrl+R</div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Gestión financiera</span></div>
                                <div class="collapsible-body bg-gris-claro">
                                    <div class="div d-flex  justify-content-center">
                                        <div class="switch">
                                            <label>
                                                Off
                                                <input type="checkbox">
                                                <span class="lever"></span>
                                                On
                                            </label>
                                        </div>
                                    </div>


                                    <!-- Disabled Switch -->

                                </div>
                            </li>

                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Gestión contable</span></div>
                                <div class="collapsible-body bg-gris-claro">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Even</td>
                                                <td>100</td>
                                                <td>$0.87</td>
                                            </tr>
                                            <tr>
                                                <td>Jazmin</td>
                                                <td>254</td>
                                                <td>$3.76</td>
                                            </tr>
                                            <tr>
                                                <td>Diclonenac</td>
                                                <td>364</td>
                                                <td>$7.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>

                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Calendario de actividades</span></div>
                                <div class="collapsible-body bg-gris-claro">
                                    <div class="progress">
                                        <div class="indeterminate"></div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Recursos humanos</span></div>
                                <div class="collapsible-body bg-gris-claro">

                                </div>
                            </li>


                            <li>
                                <div class="collapsible-header menu text-center "><i class="material-icons">play_arrow</i><span>Archivo</span></div>
                                <div class="collapsible-body bg-gris-claro">
                                    <div class="d-flex justify-content-center">
                                        <ul class="pagination">
                                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                            <li class="active"><a href="#!">1</a></li>
                                            <li class="waves-effect"><a href="#!">2</a></li>
                                            <li class="waves-effect"><a href="#!">3</a></li>
                                            <li class="waves-effect"><a href="#!">4</a></li>
                                            <li class="waves-effect"><a href="#!">5</a></li>
                                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>






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
