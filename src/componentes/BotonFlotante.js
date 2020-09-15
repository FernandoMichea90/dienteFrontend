import React from 'react'
import { Link } from 'react-router-dom'

import '../css/BotonFlotante.css'




function BotonFlotante (){

    return (

        <Link  to="/crear"   className="botonPrincipal">
            <i class="fas fa-plus ibPrincipal"></i>
        </Link>
    )

}

export default BotonFlotante;