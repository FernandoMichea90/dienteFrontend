import React, { Fragment,useContext,useEffect } from 'react'
import imgPrincipal from '../imagen/dientefoto.jpg'
import Imagen from '../componentes/Imagen'
import ParalaxCom from '../componentes/Parrallax'
import Footer from '../componentes/Footer'
import Navegacion from '../componentes/Navbar'
import {CRMContext} from '../context/CRMContext'




const prueba = {
        margin:'10px 0 0 0'    
  };


function Home()
    {


        const[auth,guardarAuth]=useContext(CRMContext)

        console.log(auth);
        
        useEffect(() => {
          document.title="Inicio"
        }, [])
        return(

          <Fragment>  
              <Navegacion></Navegacion>

            <div class="row">
            <div class="col s12 divRelative" style={prueba}>
               
                <img class="sombraFoto" src={imgPrincipal}  width="100%"  />
                 <h1 class="textoTitulo">Toothbrush</h1>  
                 <div class="divTitulo">
        
                    <span >
                     Registrar
                    </span>
                 </div>
                 
            </div>
            </div>
             
        <div class="container margenTop">
        <div class="row">

            <div class="col s12 l4 centro">


                    
               <Imagen imgSonrisa="imgRedonda"></Imagen>

                <p class="parrafoCircular">
                Sonrie 
                </p>
                <p>
                    tu sonrisa es lo mas importante Cuidala 
                </p>


            </div>
           

            <div class="col s12 l4 centro">


                    
<Imagen imgSonrisa="imgRedondaDos"></Imagen>

<p class="parrafoCircular">
                Familia
                </p>
                <p>

                    Sonríe con los tuyos 
                </p>


</div>

                    
<div class="col s12 l4 centro">


                    
<Imagen imgSonrisa="imgRedondaTres"></Imagen>

<p class="parrafoCircular">
                Registralo
 </p>
 <p>
    
Lleva contigo un registro 
De tu salud dental
 </p>



 

</div>


                    

</div>
 </div>
   
   
          

<ParalaxCom>

</ParalaxCom>
   

<Footer></Footer>
     
   
    </Fragment>


        )


    }


    export default Home