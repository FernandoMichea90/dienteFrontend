import React, { useState ,useEffect,useContext } from 'react';
import {Line} from 'react-chartjs-2';
import clienteAxios from '../config/axios'
import moment from 'moment-timezone'
import formato from 'moment'
import {CRMContext}from '../context/CRMContext'


   const Grafico=(props)=> {


    const [auth]=useContext(CRMContext);

    
    


    const [chartData, setChartData] =useState({})

    var label=[];
    var cepillodos=[];

    const chart=() => {
      
        setChartData({
            labels: label,
            datasets: [
              {
                label: 'Diente',
                data: cepillodos,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderWith:4
              }
            ]

        }
        
        )
       
    }



    const consultarApi=async()=>{
      try {

          const id =localStorage.getItem('id')
          
          const diariosConsulta= await clienteAxios.get(`/dienteporusuario/${id}`,{
            headers:{
                
                Authorization:`Bearer ${auth.token}`}
        });


      
              var lista=diariosConsulta.data;
              let numero=0;

              for(let i=0;i<lista.length;i++)
              {
                 

                   numero=lista[i].cepillo;

                

                  

                  
                  cepillodos.push(numero)

                  // fecha 
                  var fechaprueba=moment.tz(lista[i].fecha,'America/Santiago')       
                     var fechaLocal=fechaprueba.format()
                     var fechaFinal =formato(fechaLocal).format('LL');
                     lista[i].fecha=fechaFinal;

                  let fechatest=lista[i].fecha

                  label.push(fechatest.toString());
                  
              }
             
             

              
          
          
        
      } catch (error) {
          console.log(error)
      }

      chart();

     

  }

       
      

      useEffect(() => {

       
        consultarApi()
        

        },[])
            




    return (
      <div>
        
        <Line data={chartData} />
      </div>
    );
  

    }
export default Grafico
