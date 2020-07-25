import React ,{ Fragment } from 'react'

import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import  Crear from '../componentes/EditarDiente'



function EditarDiente()
{

    return (

        <Fragment>
               <Navbar></Navbar>
                <Crear></Crear>

                <Footer></Footer>
        </Fragment>




    )


}

export default EditarDiente;