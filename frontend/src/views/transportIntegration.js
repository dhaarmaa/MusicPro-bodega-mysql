import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransportIntegration() {
  const [codigoSeguimientoTranspTeacher, setCodigoSeguimientoTranspTeacher] = useState('');


  const enviarSolicitud =  () => {
    // Realiza la solicitud POST utilizando Axios a tranporte profesor
   
      Axios.post('https://musicpro.bemtorres.win/api/v1/transporte/solicitud', {
        nombre_origen: 'Mario Perez',
        direccion_origen: 'Av 1 de mayo # 1-1',
        nombre_destino: 'Marcela Torres',
        direccion_destino: 'Calle 1 # 1-1',
        comentario: 'Envio de documentos',
        info: ''
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
