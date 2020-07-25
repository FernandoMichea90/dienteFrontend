import React ,{useState ,useEffect,Fragment}from 'react'

import { Link } from 'react-router-dom'
import dentista from '../../src/imagen/avatar (2).png'

import clienteAxios from '../config/axios';
import formato from 'moment'
function Dentista ()
{
    
 
    const[cita ,guardarCita]=useState([])

    useEffect(()=>{



        

        const consultarApi=async()=>{
            try {



                const citaConsulta=await clienteAxios.get('/proximacitados')


                
                var fechaActual=formato(citaConsulta.data[0].fecha).format('LL');
                console.log(fechaActual);
                cita.fecha=fechaActual

                console.log("la cita " +cita.fecha);
                
                       
                
                guardarCita(cita)
                
                
    

                    
                    
                
                
            } catch (error) {
                console.log(error)
            }


           

        }
    

        consultarApi();
        },[])
            

    

return (


<Fragment>





                        <Link to={"/citas"}>   
                        <img src={dentista} alt="" height="50"></img>
                        </Link>
                        <p className="pCitaDos">
                            Cita
                        
                        </p>
                        <p className="pDia">
                                {cita.fecha}
                        </p>




</Fragment>



)



}




export default Dentista;


