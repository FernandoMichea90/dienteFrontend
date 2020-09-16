import React, { Fragment,useState,useEffect ,useContext} from 'react'
import clienteAxios from '../config/axios'
import Swal  from  'sweetalert2';

import { DatePicker } from "react-materialize";


import {withRouter} from 'react-router-dom';

import moment from 'moment-timezone'

import {CRMContext}from '../context/CRMContext'




function  CrearDiente (props){

  
  const [auth,guardarAuth]=useContext(CRMContext);

   if(!auth.auth)
   {
       props.history.push('/login')
   } 




const [diente,guardarDiente]=useState(
    {
        fecha:moment().format('LL'),
        usuario:localStorage.getItem('id')

    })

const actualizarState=e=>
{

guardarDiente(
    {
        ...diente,[e.target.name]:e.target.value
    })
}    







const agregarDiente=e=>{

    e.preventDefault();



    clienteAxios.post('/diente'
    ,diente).then(res=>
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



                    props.history.push('/intranet')




        }
        
        )


   
        
    }



                useEffect(() => {
                    console.log("CAMBIO DATE");
                    console.log(diente.fecha);
                    
                    
                   
                }, [diente])




        return(

            <Fragment>
                <div className="container">

                    <div className="row">
                          
                    <h1>
        Registro Diario
      </h1>
      
<form onSubmit={agregarDiente}>
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
                                value:moment(newDate).format('LL')

     
                            }     

                         })   
                      

                    }}
            
            >


            </DatePicker>

  </div>
  <div class="input-field col s12">
    <input id="caliper" type="text" name="cepillo" class="validate" onChange={actualizarState}/>
    <label for="caliper">Diente</label>
  </div>

  <div class="input-field col s12">
    <input id="cintura" name="hilo" type="text" class="validate" onChange={actualizarState}/>
    <label for="cintura">Hilo</label>
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


export default withRouter(CrearDiente);