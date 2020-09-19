import React, { useState ,useEffect,useContext} from 'react'
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';
import moment from 'moment-timezone'
import formato from 'moment'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import {CRMContext}from '../context/CRMContext'


function ListaGrafico(props){

    const [auth,guardarAuth]=useContext(CRMContext);

    const [dientes,guardarDientes]=useState([]);
    const Usuario=useState(
        {
         _id:'1234',
         nombre:'raul',correo:'corre@correo.cl',
         password:'1234'

        })

    const eliminarDiente = idDiente => {
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
                clienteAxios.delete(`/diente/${idDiente}`)
                    .then(res => {
                        Swal.fire(  
                            'Eliminado', 
                            res.data.mensaje, 
                            'success'
                        );
                    }

                    );
                    props.history.push('/intranet')

            }
        });
    };
    

   

    
    useEffect(()=>{


        const id=localStorage.getItem('id')
        
        
        if (auth.token !== '') {
        const consultarApi=async()=>{
            try {
                  
                    
                const diariosConsulta= await clienteAxios.get(`/dienteporusuario/${id}`
                ,{
                    headers:
                    {
                        Authorization:`bearer ${auth.token}`
                    }
                });


                
                    var lista=diariosConsulta.data;

                    for (let i = 0; i < lista.length; i++) {


                            
                            
                           var fechaprueba=moment.tz(lista[i].fecha,'Asia/Kuwait')
                           
                           
                           
                           
                           

                           //var fechaLocal=fechaprueba.format()
                           var fechaLocal=lista[i].fecha
                           
                           
                           var fechaFinal =moment(fechaLocal).format('MMMM Do YYYY, h:mm:ss a');
                           var newYork = moment.tz(fechaLocal, "Europe/Kirov");
                          
                           
                           
                           
                           lista[i].fecha=moment(newYork).format('llll');
                           


                    }

              


                    
                
                
                guardarDientes(lista);
            } catch (error) {
                console.log(error)
            }


           

        }
        consultarApi();

    }
        else
        {
           props.history.push('/login') 
        }

        

        },[dientes])
            


    return (



<table className="responsive-table">
    <thead>
      <tr>
          <th>Fecha</th>
          <th>Dientes</th>
          <th>Hilo Dental</th>
          <th>Editar</th>
          <th>Borrar</th>

      </tr>
    </thead>

    <tbody>
     
     

            {dientes.map(diente=>
                (
                    <tr>
                    <td>{diente.fecha}</td>
                    <td>{diente.cepillo}</td>
                    <td>{diente.hilo}</td>
                    <td>
                        <Link  to={`/editar/${diente._id}`} class="btn orange">
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

export default withRouter(ListaGrafico);


