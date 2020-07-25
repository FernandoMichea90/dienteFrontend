import React ,{Fragment,useContext}from 'react'
import {CRMContext} from '../context/CRMContext'

import '../../src/css/intranet.css'
import dentista from '../../src/imagen/avatar (2).png'

import Navegacion from '../../src/componentes/Navbar.js'
import Control from '../../src/componentes/Control.js'
import Graficodos from '../../src/componentes/GraficoDos'
import ListaGrafico from '../../src/componentes/listaGrafico'
import Footer from '../componentes/Footer'
import {Link} from 'react-router-dom'


function Principaldos(props)
{

    const [auth,guardarAuth]=useContext(CRMContext);


    if(!auth.auth)
    {
        props.history.push('/login')
    }

    return(

        
        <Fragment>
        

        <Navegacion></Navegacion>
        <div class="container">
        
            <Control  ></Control>
        
        </div>
        
            
        <div  class="container marginTop12vh anchominimo">
        
        <div class="row" >
        
        <div class="col s12 cajaTopInforme">
            
                Informe 
          
        </div>
        
        
        </div>
        
        
        
        
        <div class="row" >
        
        <div class="col l6 s12">
            
            <div class="row">
                <div className="col s12 divRelative cincuenta">
               <Link to={"/citas"}>
                <img class="imagenAvatar" src={dentista} alt=""/>
                </Link>   
        </div>    
       
            </div>
          
        </div>
        
        <div class="col l6 s12 ">
              <Link class="btn orange"  to={"/intranet"} >
             <i class="material-icons">
                                    autorenew
                                </i>   
             </Link>
   
             
              <Graficodos  />
        
        </div>
        
        <div class="col s12 marginTop12vh">
        
            <ListaGrafico />
        </div>
        
        </div>
        
        
        
        </div>
        
                   <Footer></Footer>
        
             </Fragment>
           
           







    )



}


export default Principaldos;