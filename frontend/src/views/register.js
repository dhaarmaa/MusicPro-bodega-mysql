import React, {useState} from 'react';
import '../register.css';
import Axios from 'axios';
import Swal from 'sweetalert2'


const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthDate, setBirthDate] = useState('');
    
    const addUser = () => {
      if(password !== passwordConfirm){
        Swal.fire({
          title: "<strong>Error!!</strong>",
          html: "<i>Las contraseñas no coinciden</i>",
          icon: 'error',
          timer:2500
          
        })
      }else{
        Axios.post('http://localhost:3001/createUser', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          birthDate: birthDate
        }).then(() => {
          Swal.fire({
            title: "<strong>Registro Exitoso!!</strong>",
            html: "<i>Usuario <strong>"+ firstName +"</strong> fue registrado exitosamente!</i>",
            icon: 'success',
            timer:2500
            
          })
        })
      }
   
    }


    return(
      <div class="register">
          <img className= 'logo' src="../logoWhite.svg" alt="" width="150"/>
          <h1>Registro Bodega</h1>
        
        <form>
          {/* ingreso del nombre */}
            <label for="validationName" class="form-label">Nombre</label>
            <input type="text" onChange={(event) => {setFirstName(event.target.value)}} class="form-control" value={firstName}  placeholder='Ingrese su nombre' id="validationName"  required/>        
          
          {/* ingreso del apellido */}
            <label for="validationLastName" class="form-label">Apellido</label>
            <input type="text" onChange={(event) => {setLastName(event.target.value)}} class="form-control" value={lastName} placeholder='Ingrese su apellido' id="validationCustom02"  required/>         

          {/* ingreso del correo */}
            <label for="validationCustom03" class="form-label">Correo</label>
            <input type="email" onChange={(event) => {setEmail(event.target.value)}} class="form-control" value={email} placeholder='Ingrese su correo' id="validationCustom03" required/>
            <div class="invalid-feedback">
              correo invalido
            </div>
          
          {/* ingreso de la contraseña */}
            <label for="validationCustom03" class="form-label">Contraseña</label>
            <input type="password" onChange={(event) => {setPassword(event.target.value)}} class="form-control" value={password} placeholder='Ingrese su contraseña' id="validationCustom03" required/>
            <div class="invalid-feedback">
              contraseña invalida
            </div>
          
          {/* ingreso de confirmación de contraseña */}
            <label for="validationCustom03" class="form-label">Confirmación de contraseña</label>
            <input type="password" onChange={(event) => {setPasswordConfirm(event.target.value)}} class="form-control" value={passwordConfirm} placeholder='Confirme su contraseña' id="validationCustom03" required/>
            <div class="invalid-feedback">
              confirmación invalida
            </div>
          

          {/* ingreso de fecha de nacimiento */}
            <label for="validationCustom05" class="form-label">Fecha de nacimiento</label>
            <input type="date" onChange={(event) => {setBirthDate(event.target.value)}} class="form-control" value={birthDate} id="validationCustom05" required/>       


          {/* boton de registro */}
            <input type="submit" onClick={addUser} value="Registrarme"/>
        </form>
      </div>
   
    )   
}

export default Register;