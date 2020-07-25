import React, { Fragment,useContext } from 'react'
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import CrearCita from '../componentes/CrearCita';
import {CRMContext}from '../context/CRMContext'



function Citas(props)
{

    const [auth,guardarAuth]=useContext(CRMContext);
    if(!auth.auth)
    {
        props.history.push('/login')
    } 
return (

<Fragment>

    <Navbar></Navbar>
    <CrearCita></CrearCita>

     <Footer></Footer>

</Fragment> 


)


}




export default Citas;