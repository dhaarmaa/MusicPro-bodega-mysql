import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransportIntegration() {
  const [codigoSeguimientoTranspTeacher, setCodigoSeguimientoTranspTeacher] = useState('');
  const [codigoSeguimientoTranspStudent, setCodigoSeguimientoTranspStudent] = useState('');
  const [estadoTranspStudent, setEstadoTranspStudent] = useState('');

  const enviarSolicitud = async () => {
    // Realiza la solicitud POST utilizando Axios a tranporte profesor
    try {
      const response = await axios.post('https://musicpro.bemtorres.win/api/v1/transporte/solicitud', {
        nombre_origen: 'Mario Perez',
        direccion_origen: 'Av 1 de mayo # 1-1',
        nombre_destino: 'Marcela Torres',
        direccion_destino: 'Calle 1 # 1-1',
        comentario: 'Envio de documentos',
        info: ''
      });

      // Obtén el código de seguimiento de la respuesta y actualiza el estado
      const codigo = response.data.codigo_seguimiento;
      setCodigoSeguimientoTranspTeacher(codigo);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
    }


    // Realiza la solicitud POST utilizando Axios a tranporte estudiante
    try {
      const response = await axios.post('', {
        nombre_origen: 'Mario Perez',
        direccion_origen: 'Av 1 de mayo # 1-1',
        celular_origen: '3000000002',
        nombre_destino: 'Marcela Torres',
        direccion_destino: 'Calle 1 # 1-1',
        celular_destino: '3000000000',
        obs: 'guitarra electrica'
        
      });

      // Obtén el código de seguimiento de la respuesta y actualiza el estado
      const codigo = response.data.codigo_seguimiento;
      setCodigoSeguimientoTranspStudent(codigo);
      const estado = response.data.estado;
      setEstadoTranspStudent(estado);

    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
    }
  };

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
    <tr>
      <th scope="row">3</th>
       <td>{codigoSeguimientoTranspStudent}</td>
      <td>{estadoTranspStudent}</td>
      
    </tr>

  </tbody>
</table>
      
     
    </div>
  
    </div>
  );
   
}

export default TransportIntegration;
