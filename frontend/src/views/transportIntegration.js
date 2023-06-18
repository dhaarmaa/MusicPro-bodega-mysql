import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransportIntegration() {
  const [codigoSeguimiento, setCodigoSeguimiento] = useState('');

  const enviarSolicitud = async () => {
    // Realiza la solicitud POST utilizando Axios
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
      setCodigoSeguimiento(codigo);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
    }
  };

  return (
    <div>
      <button onClick={enviarSolicitud}>Enviar Solicitud</button>
      {codigoSeguimiento && <div ClassName ="bg-light">Código de seguimiento: {codigoSeguimiento}</div>}
    </div>
  );
}

export default TransportIntegration;
