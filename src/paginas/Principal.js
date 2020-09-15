import React ,{Fragment, useState,useEffect,useContext}from 'react'

import '../../src/css/intranet.css'
import {Link,withRouter} from 'react-router-dom'
import dentista from '../../src/imagen/avatar (2).png'
import {CRMContext}from '../context/CRMContext'
import Navegacion from '../../src/componentes/Navbar.js'
import Control from '../../src/componentes/Control.js'
import Grafico from '../../src/componentes/Grafico.js'
import ListaGrafico from '../../src/componentes/listaGrafico'
import Footer from '../componentes/Footer'
import clienteAxios from '../config/axios';
import BotonFlotante from '../componentes/BotonFlotante'





function Principal(props)
{
    const [auth,guardarAuth]=useContext(CRMContext);



    

    
    const[ci ,guardar]=useState([])

    

useEffect(()=>{



    if (auth.token !== '') {

    const consultarApi=async()=>{
        try {
                const citaConsulta=await clienteAxios.get('/proximacita',{
                    headers:{
                        
                        Authorization:`Bearer ${auth.token}`}
                })

                guardar(citaConsulta.data)


    
            
        } catch (error) {


            if(error.response.status = 500)
            {
                props.history.push('/login')
            }

        }

            

    } 
    consultarApi();

}
else {
                
    props.history.push('/login')



       

    }





    },[ci])
        
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
           <Link class="btn orange"  to={"/alt"} >
          <i class="material-icons">
                                 autorenew
                             </i>   
          </Link>

          
           <Grafico  />
     
     </div>
     
     <div class="col s12 marginTop12vh">
     
         <ListaGrafico />
     </div>
     
     </div>
     
     
     
     </div>
     
                <Footer></Footer>
     
     <BotonFlotante></BotonFlotante>
          </Fragment>
        
        
         






    )



}


export default withRouter(Principal);