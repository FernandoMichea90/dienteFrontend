import React, { Fragment,useContext } from 'react';
import '../src/css/intranet.css'
import Principal from '../src/paginas/Principal'
import Crear from '../src/paginas/CrearDiente'
import Editar from '../src/paginas/EditarDiente'
import Citas from '../src/paginas/Citas'
import EditarCitas from '../src/paginas/EditarCita'
import PrincipalDos from '../src/paginas/Principaldos'
import Home from '../src/paginas/Home'
import Login from '../src/paginas/Login'
import Cuenta from '../src/paginas/Cuenta'
import {CRMContext,CRMProvider}from '../src/context/CRMContext'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {

//UTILIZAR CONTEXT 

  const [auth,guardarAuth]=useContext(CRMContext);
  return (
   <Router>
      <Fragment>

        <CRMProvider value={[auth,guardarAuth]}>
            <Switch>


              <Route exac path="/crear"  component ={Crear}></Route>
              <Route exac path="/editar/:id"  component ={Editar}></Route>
              <Route exac path="/citas"  component ={Citas}></Route>
              <Route exac path="/editarcitas/:id"  component ={EditarCitas}></Route>
              <Route exac path="/alt"  component ={PrincipalDos}></Route>
              <Route exac path="/login"  component ={Login}></Route>
              <Route exac path="/cuenta"  component ={Cuenta}></Route>

              <Route exac path="/intranet"  component ={Principal}></Route>
              <Route exac path="/"  component ={Home}></Route>




            </Switch>

          </CRMProvider>

      </Fragment>



   </Router>

    );
}

export default App;
