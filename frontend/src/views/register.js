import React from 'react';
import '../register.css'


const Register = () => {

    
    return(

      <div class="register">
        <div>
          <img src="logoBlack.svg" alt="" width="150"/>
          <h1>Registro</h1>
        </div>
        <form class="column g-3 needs-validation" novalidate>
          {/* ingreso del nombre */}
          <div class="col-md-3 .offset-md-3">
            <label for="validationName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationName"  required/>        
          </div>

          {/* ingreso del apellido */}
          <div class="col-md-4">
            <label for="validationLastName" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="validationCustom02"  required/>         
          </div>

          {/* ingreso del correo */}
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Correo</label>
            <input type="email" class="form-control" id="validationCustom03" required/>
            <div class="invalid-feedback">
              correo invalido
            </div>
          </div>

          {/* ingreso de la contraseña */}
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="validationCustom03" required/>
            <div class="invalid-feedback">
              contraseña invalido
            </div>
          </div>

          {/* ingreso de confirmación de contraseña */}
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Confirmación de ontraseña</label>
            <input type="password" class="form-control" id="validationCustom03" required/>
            <div class="invalid-feedback">
              contraseña invalido
            </div>
          </div>

          {/* ingreso de fecha de nacimiento */}
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Fecha de nacimiento</label>
            <input type="date" class="form-control" id="validationCustom05" required/>       
          </div>

          {/* boton de registro */}
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Registrarse</button>
          </div>
        </form>
      </div>
    )   
}

export default Register;