import React, { Fragment,useState,useContext } from 'react'
import clienteAxios from '../config/axios'
import Swal  from  'sweetalert2';
import { DatePicker } from "react-materialize";
import ListarCita from '../componentes/ListarCita'
import moment from 'moment-timezone'
import {CRMContext} from '../context/CRMContext'


function  CrearDiente (props){


const [auth,guardarAuth]=useContext(CRMContext);

    

 var fechaFinal;

    const [cita,guardarDiente]=useState(
        {
            
          fecha:moment().format('LL'),
          usuario:localStorage.getItem('id')
        
        
        })
    













const actualizarState=e=>
{





guardarDiente(
    {


        ...cita,[e.target.name]:e.target.value
    })
}    







const agregarCita=e=>{

    e.preventDefault();


    clienteAxios.post('/cita',cita).then(res=>
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







        }
        
        )
    }







        return(

            <Fragment>
                <div className="container">

                    <div className="row">
                          
                    <h1>
        Crear Cita
      </h1>
      
<form onSubmit={agregarCita}>
  <div class="input-field col s12">
            <DatePicker options={{format:'mmm dd, yyyy',i18n:{
      
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
                value={cita.fecha}
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
 

  <div class="input-field col s6">
   
  </div>
  <div class="input-field col s6">

  <button class="btn waves-effect waves-light" type="submit" name="action">Crear Cita
<i class="material-icons right">add_circle</i>
</button>

  </div>
  </form>


<div className="container">


        <ListarCita></ListarCita>



</div>




                    </div>


                </div>


            </Fragment>




        )


}


export default CrearDiente;