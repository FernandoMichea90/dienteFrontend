import React from 'react'
import whatsapp from '../imagen/whatsapp.png'
import facebook from '../imagen/facebook.png'
import instagram from '../imagen/instagram.png'

import '../../src/css/principal.css';











function Footer ()

{

            return(
                <div class="margenTopdos pie">
                        <div class="pieLogo">
                                <img class="logoFootUno" alt="" src={instagram} height="40"></img>
                                <img  class="logoFootDos" alt=""  src={facebook} height="40"></img>
                                <img class="logoFootTres" alt=""  src={whatsapp} height="40"></img>
                        </div>
                </div>



            );




}



export default Footer;