import React,{useContext, Fragment,useEffect, useState} from 'react'
import '../css/navbar.css'
import {CRMContext} from '../context/CRMContext'
import Logo from '../../src/imagen/medical (3).png'
import {Navbar,NavItem} from 'react-materialize'
import {Icon} from 'react-materialize'
import {Link,withRouter} from 'react-router-dom'

import clienteAxios from '../config/axios'


function Navegacion(props)
{
  const id=localStorage.getItem('id');  

  const [datos,guardar]=useState('prueba');
  
  

    const[auth,guardarAuth]=useContext(CRMContext)

    const cerrarSesion=()=>{

            guardarAuth(
                {
                    token:'',auth:false
                })

            localStorage.setItem('token','')
                props.history.push('/')
    }


    const retornarDiente=async()=>
    {

      console.log("paso por aca");
      
        const consulta=await clienteAxios.get(`/usuario/${id}`
           ,{
             headers:
             {
               Authorization:`bearer ${auth.token}` 
             }
           });


        console.log("aqui deberia estar el nombre "+consulta.data);

          // datos=consulta.data
           guardar(consulta.data)
           console.log("aqui deberia estar el nombre "+datos);

    }    



 

       

    useEffect(() =>
    {

      



          // Buscar  el usuario 
          retornarDiente();        
        

      

    }

  , [])



return(
    
   <Navbar
   alignLinks="right"
   brand={<Link to={'/intranet'} className="brand-logo" href="#">  <img class="imgTooth" src={Logo} alt="logo" height="50"/> Toothbrush</Link>}
   id="mobile-nav"
   menuIcon={<Icon>menu</Icon>}
   options={{
     draggable: true,
     edge: 'left',
     inDuration: 250,
     onCloseEnd: null,
     onCloseStart: null,
     onOpenEnd: null,
     onOpenStart: null,
     outDuration: 200,
     preventScrolling: true
   }}
 >
   {auth.auth ?(
  <Fragment> 
  <NavItem >
    {datos}
<Icon left>
person
</Icon>
</NavItem>
<NavItem onClick={()=>{cerrarSesion()}}>
       Cerrar Sesion 
<Icon left>
 login
</Icon>

</NavItem>
</Fragment>
   ):(
    <NavItem  onClick={()=>{props.history.push('/login')}} >

    
      
    Iniciar Sesion 
<Icon left>
login
</Icon>
</NavItem>
   )}
   
 </Navbar>
    

)

}

export default withRouter(Navegacion);
