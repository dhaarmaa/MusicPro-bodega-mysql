import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransportIntegration() {
  const [codigoSeguimientoTranspTeacher, setCodigoSeguimientoTranspTeacher] = useState('');
  const navigate = useNavigate();



  const enviarSolicitud =  () => {
    // Realiza la solicitud POST utilizando Axios a tranporte profesor
   
      Axios.post('https://musicpro.bemtorres.win/api/v1/transporte/solicitud', {
        nombre_origen: 'Mario Perez',
        direccion_origen: 'Av 1 de mayo # 1-1',
        celular_origen: '23424232',
        nombre_destino: 'Marcela Torres',
        direccion_destino: 'Calle 1 # 1-1',
        celular_destino: '2312441',
        obs: 'Envio de documentos'
      }).then((res) => { 
        console.log(res);
        setCodigoSeguimientoTranspTeacher(res.data.codigo_seguimiento);
      })
      .catch((error) => {
        // Maneja el error de la solicitud
        console.log(error);
      });

      
    }
   
  return (
    <div className="container">
      <nav className="navbar bg-dark bg-body-tertiary">
        <div className="container-fluid">
        
        <a className="navbar-brand text-light" onClick={() =>{navigate('/home');}}><img src="logoWhite.svg" alt="Bootstrap" width="60" height="60"/> Familia Bodega </a>
        

        <form className="d-flex " >
         <li>
         <a href ='' onClick={() =>{navigate('/transport');}} className="text-light">
        Transporte</a>
      </li>
      <li>
         <a href ='' onClick={() =>{navigate('/wareHouse');}} className="text-light">
        Bodega</a>
      </li>
      <li>
          <a href ='' onClick={() =>{navigate('/');}} className="text-light">Salir</a>
      </li>
        </form>
      </div>
    </nav>
    <button onClick={enviarSolicitud}>Enviar Solicitud</button>

    <div >
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">codigo de seguimiento</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>222202020202</td>
      <td>en camino</td>
      
      
    </tr>
    <tr>
      <th scope="row">2</th>
     <td>{codigoSeguimientoTranspTeacher}</td>
      <td>listo</td>
      
    </tr>
 

  </tbody>
</table>
      
     
    </div>
  
    </div>
  );
   
}

export default TransportIntegration;
