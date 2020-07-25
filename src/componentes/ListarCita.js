import React, { useState ,useEffect, useContext} from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';
import {Link} from 'react-router-dom'
import moment from 'moment-timezone'
import formato from 'moment'
import { CRMContext } from '../context/CRMContext';

function ListaGrafico(props){

    const[auth]=useContext(CRMContext)
    const [citas,guardarCita]=useState([]);

    const eliminarDiente = idCita => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un registro  eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Llamado a axios
                clienteAxios.delete(`/cita/${idCita}`)
                    .then(res => {
                        Swal.fire(  
                            'Eliminado', 
                            res.data.mensaje, 
                            'success'
                        );
                    });
                    
            }
        });
    };
    

   

    
    useEffect(()=>{

        const consultarApi=async()=>{
            try {

                const id =localStorage.getItem('id')     


                const diariosConsulta= await clienteAxios.get(`/cita/${id}`,
                {
                    headers:{
                        Authorization:`bearer ${auth.token} `
                    }
                });


                
                    var lista=diariosConsulta.data;

                    for (let i = 0; i < lista.length; i++) {
                           var fechaprueba=moment.tz(lista[i].fecha,'America/Santiago')       
                           var fechaLocal=fechaprueba.format()
                           var fechaFinal =formato(fechaLocal).format('LL');
                           lista[i].fecha=fechaFinal;
                           


                    }

              


                    
                
                
                guardarCita(lista);
            } catch (error) {
                console.log(error)
            }


           

        }

        consultarApi();
        },[citas])
            


    return (



<table>
    <thead>
      <tr>
          <th>Fecha</th>
          <th>Editar</th>
          <th>Borrar</th>

      </tr>
    </thead>

    <tbody>
     
     

            {citas.map(diente=>
                (
                    <tr>
                    <td>{diente.fecha}</td>
                
                    <td>
                        <Link  to={`/editarcitas/${diente._id}`} class="btn orange">
                             <i class="material-icons">
                                 create
                             </i>   
                        </Link>
                    </td>
                    <td>
                        <button  class="btn red" onClick={()=>eliminarDiente(diente._id)}>
                             <i class="material-icons">
                                 delete 
                             </i>   
                        </button>
                    </td>

                    </tr>


                ))}



      
    </tbody>
  </table>



    )

}

export default ListaGrafico;


