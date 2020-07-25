import React, { useState,useContext } from 'react'
import '../css/indexco.css'
import {Link} from 'react-router-dom'

import Icono from '../imagen/login.png'
import Swal   from 'sweetalert2'
import {withRouter} from 'react-router-dom'
import clienteAxios from '../config/axios'
import {CRMContext}from '../context/CRMContext'



function Login(props)
{
  const [auth,guardarAuth]=useContext(CRMContext);

      const [credenciales,guardarCredenciales]=useState({})


      const iniciarSesion= async e=>
      {
        e.preventDefault();
        try{
            const respuesta=await clienteAxios.post('/iniciar-sesion',credenciales)
            console.log("respuesta "+respuesta.data);
            
            const {token}=respuesta.data
            const {usuario}=respuesta.data

            const {_id}=usuario
            console.log("el id "+ _id );
            localStorage.setItem('token',token)
            localStorage.setItem('id',_id)


            guardarAuth({
              token,auth:true
            })

            Swal.fire(
                'Login Correcto','Has Iniciado Sesion','success'

            )
            
            props.history.push('/intranet');


        }catch(error)
        {

          console.log(error);
          console.log("toy dentro del catch");
          

            Swal.fire(
              {
                  icon:'error',title:'hubo un error',text:error

              })
  

        }

      }


      const leerDatos=e=>
      {
          guardarCredenciales(
            {
              ...credenciales,[e.target.name]:e.target.value
            })
      }





    return(



        <div>
        <div class="row">
            <div class="col l8 m12 s12 fondoLeft">

              
                
            </div>

            <form onSubmit={iniciarSesion}>
            <div class="col l4 m12 s12 divLogin">
                <div class="container marginTop">
                        <div class="row">
                            <img class="marginLeft" src={Icono} height="145" width="145" />    
                        </div>

                      <div class="row">
                        <div class="input-field col s12">
                          <input name="correo" type="text" onChange={leerDatos}/>
                          <label for="email">Email</label>
                        </div>
                      </div>

                      <div class="row">
                        <div class="input-field col s12">
                          <input name="password" type="password" class="validate" onChange={leerDatos}/>
                          <label for="password">Password</label>
                        </div>
                      </div>
                      <button type="onSubmit" class="waves-effect btnVerde btn todoelEspacio">Ingresar</button>
                

                      <Link to={'/cuenta'}>  
                     <p className="pTexto">
                         ¿ Desea Crear una Cuenta ? 
                     </p>
                     </Link>

                </div>     


            </div>
            </form>

        </div>


    </div>



        
    )




}

export default withRouter(Login);