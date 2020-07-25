import React ,{useState ,useEffect,useContext}from 'react'
import plus from '../../src/imagen/signs.png'
import calendario from '../../src/imagen/interface.png'
import iconoHilo from '../../src/imagen/dentist.png'
import iconoCepillo from '../../src/imagen/hygiene.png'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios';
import moment from 'moment-timezone'
import formato from 'moment'
import Dentista  from '../componentes/Dentista' 
import {CRMContext}from '../context/CRMContext'




function Control(props){

    const [auth,guardarAuth]=useContext(CRMContext);

   
    const[control,guardar]=useState([])

   
      

    useEffect(()=>{

       
        

    
        const consultarApi=async()=>{
            try {



                
    

                const diariosConsulta= await clienteAxios.get('/dienteporfecha');


                
                    var lista=diariosConsulta.data;

                    for (let i = 0; i < lista.length; i++) {
                           var fechaprueba=moment.tz(lista[i].fecha,'America/Santiago')       
                           var fechaLocal=fechaprueba.format()
                           var fechaFinal =formato(fechaLocal).format('LL');
                           lista[i].fecha=fechaFinal;
                           
                         guardar(lista[i]);   

                    }

              

                    
                    
                
                
            } catch (error) {
                console.log(error)
            }


           

        }

   
        consultarApi();
        },[])
    
    

return(



<div class="row marginTop12vh cajaControl anchominimo">

<div class="col s12 l2 divRelative nodisplay">
<Link to={"/crear"}>
<img className="posicionPlus" src={plus} alt="" height="50"></img>
</Link>
</div>

<div class="col s12 m6 l3 divRelative">
<img  alt="" height="50" src={calendario}></img>
<p className="interfacePmes" >

</p>
<p className="interfacePdia">
    {control.fecha}
</p>


</div>
<div class="col s12 m6 l2 divRelative">

<img src={iconoCepillo} alt="" height="50"></img>

<p className="countHigiene" >
   {control.cepillo}
</p>


</div>
<div class="col s12 m6 l2 divRelative">
<img src={iconoHilo} alt="" height="50"></img>
<p className="countHigiene">
{control.hilo}

</p>

</div>
<div class="col s12 m6 l3 divRelative" >


<Dentista>

</Dentista>




</div>

</div>   


)


}


export default Control;