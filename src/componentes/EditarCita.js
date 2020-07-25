import React, { useState, useEffect ,Fragment} from 'react'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
import {withRouter} from 'react-router-dom';
import { DatePicker } from "react-materialize";
import moment from 'moment-timezone'
import formato from 'moment'


function EditarCita(props)
{
    const {id}=props.match.params;
    const [cita,guardarCita]=useState(
        {
            fecha:''

        })



    const retornarCita=async()=>
    {

        const consulta=await clienteAxios.get(`/cita/${id}`);
        var cita=consulta.data;
        var fechaprueba=moment.tz(cita.fecha,'America/Santiago')       
        var fechaLocal=fechaprueba.format()
        var fechaFinal =formato(fechaLocal).format('LL');
        cita.fecha=fechaFinal;
        
        guardarCita(cita);
    }    



    useEffect(()=>{

        retornarCita();        
    },[])


    const actualizarState=e=>
    {
        guardarCita(
            {
                    ...cita,[e.target.name]:e.target.value

            })


    }



    const actualizarCita = e => {
        e.preventDefault();

        // enviar petición por axios
        clienteAxios.put(`/cita/${cita._id}`, cita) 
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
                props.history.push('/citas');
            })
    }




    return(






        <Fragment>
        <div className="container">

            <div className="row">
                  
            <h1>
Actualizar Cita
</h1>

<form onSubmit={actualizarCita}>
<div class="input-field col s12">
<DatePicker options={
    {
    format:'mmm dd',i18n:{
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
                value={cita.fecha}
                id="DatePicker-5"
                onChange={(newDate)=>
                    {

        var fechaprueba=moment.tz(newDate,'America/Santiago')       
        var fechaLocal=fechaprueba.format()
        var fechaFinal =formato(fechaLocal).format('LL');
        newDate=fechaFinal;
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




<div class="input-field col s6">

</div>
<div class="input-field col s6">

<button class="btn waves-effect waves-light" type="submit" name="action">Editar Cita
<i class="material-icons right">create</i>
</button>

</div>
</form>




            </div>


        </div>


    </Fragment>





    )




}



export default withRouter(EditarCita);