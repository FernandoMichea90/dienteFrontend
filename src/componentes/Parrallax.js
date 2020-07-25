import React from 'react'
import imgParallax from '../imagen/technology.png'
import imgParallaxFondo from '../imagen/cepillo.jpg'

import {Parallax} from "react-materialize"

function Paralax() {

    return (
        <div className="divRelative">
        <Parallax
          image={<img alt="" src={imgParallaxFondo}/>}
          options={{
            responsiveThreshold: 0
          }}

          
        />
        <div >
            
            <p class="tituloParallax">
                Disponible para PC y Celular

            </p>

            <img class="imagenParallax" src={imgParallax} height="200"></img>

          </div>
     
      </div>


    )
    
}



export default Paralax