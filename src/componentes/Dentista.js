import React ,{useState ,useEffect,Fragment,useContext}from 'react'

import { Link } from 'react-router-dom'
import dentista from '../../src/imagen/avatar (2).png'
import {CRMContext}from '../context/CRMContext'

import clienteAxios from '../config/axios';
import formato from 'moment'
function Dentista ()
{
    
    const [auth,guardarAuth]=useContext(CRMContext);


    const[cita ,guardarCita]=useState({
            fecha:''

    })

    useEffect(()=>{



        

        const consultarApi=async()=>{
            try {



                const citaConsulta=await clienteAxios.get('/proximacita',{
                    headers:{
                        
                        Authorization:`Bearer ${auth.token}`}
                })


                
                var fechaActual=formato(citaConsulta.data[0].fecha).format('LL');
                console.log(fechaActual);
                cita.fecha=fechaActual

                
                       
                
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


