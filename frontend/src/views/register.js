import React, {useState} from 'react';
import '../register.css';
import Axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [birthDate, setBirthDate] = useState('');
    // const [validateUser, setValidateUser] = useState(false);
    const navigate = useNavigate();

    const limpiarDatos = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setBirthDate('');
    }

    
    const addUser = () => {
      console.log(firstName, lastName, email, password, passwordConfirm, birthDate);
      const date = new Date(birthDate);
      const year = date.getFullYear();
      console.log(year);
  
      if (password !== passwordConfirm) {
        Swal.fire(
          'Contraseñas no coinciden', 
          'Por favor ingrese nuevamente la contraseña', 
          'error'
          );
      } else if (year > 2005) {
        Swal.fire(
          'Fecha de nacimiento inválida', 
          'Por favor ingrese nuevamente la fecha de nacimiento', 
          'error'
          );
      } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email) === false){
        Swal.fire(
          'Correo inválido', 
          'Por favor ingrese nuevamente el correo', 
          'error'
          );

      }else {

        Axios.post('http://localhost:3001/compareDataRegister',{email: email})
        .then((response) => {
          if (response.data.success) {
            // Los datos coinciden, realiza las acciones correspondientes
            console.log('Datos coinciden');
            Swal.fire(
              'Usuario ya registrado', 
              'Por favor ingrese un correo diferente', 
              'error'
            );
            
          } else {
            // Los datos no coinciden, realiza las acciones correspondientes
            console.log('Datos no coinciden');
            Axios.post('http://localhost:3001/createUser', {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              birthDate: birthDate
            }).then(() => {
            
              Swal.fire(
                'registro exitoso!',
                'bievenido a la familia de bodega MusicPro',
                'success'
              )
            })
            window.location.href = "/home";

          }
        })        
      }

    }

    return(
      <div className="register">
          <img className= 'logo' src="../logoWhite.svg" alt="" width="150"/>
          <h1>Registro Bodega</h1>
        
        <form>
          {/* ingreso del nombre */}
            <label  className="form-label">Nombre</label>
            <input type="text" onChange={(event) => {setFirstName(event.target.value)}} className="form-control" value={firstName}  placeholder='Ingrese su nombre' minLength='3' maxLength='50' required/>        
          
          {/* ingreso del apellido */}
            <label  className="form-label">Apellido</label>
            <input type="text" onChange={(event) => {setLastName(event.target.value)}} className="form-control" value={lastName} placeholder='Ingrese su apellido'   required/>         

          {/* ingreso del correo */}
            <label  className="form-label">Correo</label>
            <input type="email" onChange={(event) => {setEmail(event.target.value)}} className="form-control" value={email} placeholder='Ingrese su correo' required/>
            {/* <div className="invalid-feedback">
              correo invalido
            </div> */}
          
          {/* ingreso de la contraseña */}
            <label  className="form-label">Contraseña</label>
            <input type="password" onChange={(event) => {setPassword(event.target.value)}} className="form-control" value={password} placeholder='Ingrese su contraseña'  required/>
            {/* <div className="invalid-feedback">
              contraseña invalida
            </div> */}
          
          {/* ingreso de confirmación de contraseña */}
            <label  className="form-label">Confirmación de contraseña</label>
            <input type="password" onChange={(event) => {setPasswordConfirm(event.target.value)}} className="form-control" value={passwordConfirm} placeholder='Confirme su contraseña'  required/>
            {/* <div className="invalid-feedback">
              confirmación invalida
            </div>
           */}

          {/* ingreso de fecha de nacimiento  */}
            <label  className="form-label">Fecha de nacimiento</label>
            
            <input 
            type="date" onChange={(event) => {setBirthDate(event.target.value)}} className="form-control" value={birthDate} required/>       
            {/* <label for="start">Fecha de nacimineto</label>

            <input type="date" id="start" name="trip-start"
              value={birthDate} 
              
              onChange={(event) => {setBirthDate(event.target.value)}} ></input> */}


          {/* boton de registro */}
            <input type="submit" onClick={addUser} onSubmit={limpiarDatos} value="Registrarme"/>
            <a href ='' onClick={() =>{navigate('/');}}>¿Ya tienes cuenta? Inicia sesión aqui</a>
       
        </form>
      </div>
   
    )   
}

export default Register;