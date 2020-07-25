import React, { Fragment,useContext } from 'react'

import Navbar from '../componentes/Navbar';

import Footer from '../componentes/Footer';
import  Crear from '../componentes/Creardiente'
import EditarCita from '../componentes/EditarCita';
import { CRMContext } from '../context/CRMContext';


function EditarCitas(props)
{

    const [auth,guardarAutentificacion] =useContext(CRMContext);
    if(!auth.auth)
    {
        props.history.push('/login')
    } 


return (

<Fragment>

    <Navbar></Navbar>
    <EditarCita></EditarCita>

     <Footer></Footer>

</Fragment> 


)


}




export default EditarCitas;