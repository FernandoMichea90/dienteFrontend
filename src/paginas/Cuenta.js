import React,{useState} from 'react'
import '../css/registrarUsuario.css'

import Imagen from '../imagen/medical (3).png'
import clienteAxios from '../config/axios'
import Swal  from  'sweetalert2';
import {withRouter} from 'react-router-dom';

function CrearCuenta(props)

{




const [usuario,guardarUsuario]=useState(
    {


    })

const actualizarState=e=>
{





guardarUsuario(
    {
        ...usuario,[e.target.name]:e.target.value
    })
}    







const agregarUsuario =e=>{

    e.preventDefault();


    clienteAxios.post('/crearcliente',usuario).then(res=>
        {
                if(res.data.code===11000)
                {

                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'Ese cliente ya esta registrado'
                    })
                }   
                else {
                    Swal.fire(
                        'Se agregó el Cliente',
                        res.data.mensaje,
                        'success'
                    )
                    }

                    props.history.push('/login')






        }
        
        )
    }


return (
    <form onSubmit={agregarUsuario}>
    <div class="row">
    <div class="col s12 fondoPrincipal">


        <div class="fondoSecundario">
            <div class="container margen">
            <div class="row">
                <div class="col s2">
                    <img src={Imagen} alt="" height="60" width="60" /> 

                </div>
             <div class="input-field col s10 text">
                    Registrar Usuario
             </div>
                
            </div>

            <div class="row">

                <div class="input-field col s12">
                    <input name="nombre" type="text" onChange={actualizarState} />
                    <label for="nombre">Nombre</label>
                </div>

            </div>

            <div class="row">

                <div class="input-field col s12">
                    <input name="correo" type="text" onChange={actualizarState} />
                    <label for="correo">Correo</label>
                </div>

            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input name="password" type="password" class="validate" onChange={actualizarState}/>
                    <label for="password">Password</label>
                </div>

            </div>
            <div class="row">


                <button class="btn azul" type="submit" name="action">Registrar
                <i class="material-icons right">add_circle</i>
                </button>


            </div>


        </div>

       

    </div>
        
    </div>
 </div>
 </form>


)

}
export default withRouter(CrearCuenta);