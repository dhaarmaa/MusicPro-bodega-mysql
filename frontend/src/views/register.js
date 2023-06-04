import React from 'react';
import '../register.css';


const Register = () => {

    
    return(
      <div class="register">
          <img className= 'logo' src="../logoWhite.svg" alt="" width="150"/>
          <h1>Registro Bodega</h1>
        
        <form>
          {/* ingreso del nombre */}
            <label for="validationName" class="form-label">Nombre</label>
            <input type="text" class="form-control" placeholder='Ingrese su nombre' id="validationName"  required/>        
          
          {/* ingreso del apellido */}
            <label for="validationLastName" class="form-label">Apellido</label>
            <input type="text" class="form-control" placeholder='Ingrese su apellido' id="validationCustom02"  required/>         

          {/* ingreso del correo */}
            <label for="validationCustom03" class="form-label">Correo</label>
            <input type="email" class="form-control" placeholder='Ingrese su correo' id="validationCustom03" required/>
            <div class="invalid-feedback">
              correo invalido
            </div>
          
          {/* ingreso de la contraseña */}
            <label for="validationCustom03" class="form-label">Contraseña</label>
            <input type="password" class="form-control" placeholder='Ingrese su contraseña' id="validationCustom03" required/>
            <div class="invalid-feedback">
              contraseña invalido
            </div>
          
          {/* ingreso de confirmación de contraseña */}
            <label for="validationCustom03" class="form-label">Confirmación de contraseña</label>
            <input type="password" class="form-control" placeholder='Confirme su contraseña' id="validationCustom03" required/>
            <div class="invalid-feedback">
              contraseña invalido
            </div>
          

          {/* ingreso de fecha de nacimiento */}
            <label for="validationCustom05" class="form-label">Fecha de nacimiento</label>
            <input type="date" class="form-control" id="validationCustom05" required/>       


          {/* boton de registro */}
            <input type="submit" value="Registrarme"/>
        </form>
      </div>
   
    )   
}

export default Register;