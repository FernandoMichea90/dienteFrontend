import React, { Fragment,useContext } from 'react'
import { Parallax } from "react-materialize";

import imgLogin from '../imagen/circle.png'
import imgPrincipal from '../imagen/nick-fewings-BPDJLWz_Bog-unsplash (4).jpg'
import Imagen from '../componentes/Imagen'
import imgRegistralo from '../imagen/registralo.jpg'
import imgFamilia from '../imagen/familia.jpg'
import imgParallax from '../imagen/technology.png'
import imgParallaxFondo from '../imagen/cepillo.jpg'
import ParalaxCom from '../componentes/Parrallax'
import Footer from '../componentes/Footer'
import {Link} from 'react-router-dom'
import Navegacion from '../componentes/Navbar'
import {CRMContext} from '../context/CRMContext'


function Home()
    {


        const[auth,guardarAuth]=useContext(CRMContext)

        console.log(auth);
        

        return(

          <Fragment>  
              <Navegacion></Navegacion>

            <div class="row">
            <div class="col s12 divRelative">
               
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