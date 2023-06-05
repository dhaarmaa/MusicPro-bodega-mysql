import React from 'react';
import '../register.css';


const Register = () => {

    
    return(
      <div className="register">
          <img className= 'logo' src="../logoWhite.svg" alt="" width="150"/>
          <h1>Registro Bodega</h1>
        
        <form>
          {/* ingreso del nombre */}
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" placeholder='Ingrese su nombre' id="validationName"  required/>        
          
          {/* ingreso del apellido */}
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" placeholder='Ingrese su apellido' id="validationCustom02"  required/>         

          {/* ingreso del correo */}
            <label className="form-label">Correo</label>
            <input type="email" className="form-control" placeholder='Ingrese su correo' id="validationCustom03" required/>
            <div className="invalid-feedback">
              correo invalido
            </div>
          
          {/* ingreso de la contraseña */}
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder='Ingrese su contraseña' id="validationCustom04" required/>
            <div className="invalid-feedback">
              contraseña invalido
            </div>
          
          {/* ingreso de confirmación de contraseña */}
            <label className="form-label">Confirmación de contraseña</label>
            <input type="password" className="form-control" placeholder='Confirme su contraseña' id="validationCustom05" required/>
            <div className="invalid-feedback">
              contraseña invalido
            </div>
          

          {/* ingreso de fecha de nacimiento */}
            <label className="form-label">Fecha de nacimiento</label>
            <input type="date" className="form-control" id="validationCustom06" required/>       


          {/* boton de registro */}
            <input type="submit" value="Registrarme"/>
        </form>
      </div>
   
    )   
}

export default Register;