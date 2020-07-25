import React, { useState, useEffect ,Fragment,useContext} from 'react'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
import {withRouter} from 'react-router-dom';
import { DatePicker } from "react-materialize";
import {CRMContext}from '../context/CRMContext'
import moment from 'moment'

function EditarDiente(props)
{

const [auth]=useContext(CRMContext);
console.log(auth);

   if(!auth.auth)
   {
       props.history.push('/login')
   } 
    const {id}=props.match.params;
    const [diente,guardarDiente]=useState(
        {
            fecha:'',cepillo:'',hilo:''

        })



    const retornarDiente=async()=>
    {

        const consulta=await clienteAxios.get(`/diente/${id}`,{
            headers:{

                Authorization :`Bearer ${auth.token}` 
            }
        });

        const fecha=consulta.data.fecha;
        consulta.data.fecha=moment(fecha).format('LL')
        
        guardarDiente(consulta.data);
    }    



    useEffect(()=>{

        retornarDiente();        
    },[])


    const actualizarState=e=>
    {
        guardarDiente(
            {
                    ...diente,[e.target.name]:e.target.value

            })


    }



    const actualizarDiente = e => {
        e.preventDefault();

        // enviar petición por axios
        clienteAxios.put(`/diente/${diente._id}`, diente) 
            .then(res => {
                // validar si hay errores de mongo 
                if(res.data.code === 11000) {
                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'Ese cliente ya esta registrado'
                    })
                } else {
                    Swal.fire(
                        'Correcto',
                        'Se actualizó Correctamente',
                        'success'
                    )
                }

                // redireccionar
                props.history.push('/intranet');
            })
    }




    return(






        <Fragment>
        <div className="container">

            <div className="row">
                  
            <h1>
Registro Diario
</h1>

<form onSubmit={actualizarDiente}>
<div class="input-field col s12">
<DatePicker options={{format:'mmm dd, yyyy',i18n:{
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'January',
        'February',
        'March',
        'April',
        'Mayo',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]}}}
                label="fecha"
                value={diente.fecha}
                id="DatePicker-5"
                onChange={(newDate)=>
                    {
                     actualizarState(
                         {
                            target:
                            {
                                name:"fecha",
                                value:newDate
     
                            }     

                         })   
                      

                    }}
            
            >


            </DatePicker>

</div>
<div class="input-field col s12">
<input id="caliper" type="text" name="cepillo" class="validate" onChange={actualizarState} value={diente.cepillo}/>
<label class="active" for="caliper">Diente</label>
</div>

<div class="input-field col s12">
<input id="cintura" name="hilo" type="text" class="validate" onChange={actualizarState} value={diente.hilo}/>
<label class="active" for="cintura">Hilo</label>
</div>



<div class="input-field col s6">

</div>
<div class="input-field col s6">

<button class="btn waves-effect waves-light" type="submit" name="action">Crear Registro
<i class="material-icons right">add_circle</i>
</button>

</div>
</form>




            </div>


        </div>


    </Fragment>





    )




}



export default withRouter(EditarDiente);