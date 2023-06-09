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

      if(password !== passwordConfirm){
         
        Swal.fire(
          'contraseñas no coinciden',
          'por favor ingrese nuevamente la contraseña',
          'error'
        )

      // }if (firstName.length <3  ) {
      //   alert('Por favor ingrese un nombre valido')
         
      // }if (lastName.length <3 ) {
      //   alert('Por favor ingrese un apellido valido')
         
      // }if (password.length < 6) {
      //   alert('Por favor ingrese una contraseña de minimo 6 caracteres')
      }else{
        Axios.post('http://localhost:3001/createUser', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          birthDate: birthDate
        }).then(() => {
        
          Swal.fire(
            'registro exitoso!',
            'bievenido a la familia de bodega',
            'success'
          )
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
            <input type="text" onChange={(event) => {setFirstName(event.target.value)}} className="form-control" value={firstName}  placeholder='Ingrese su nombre'   required/>        
          
          {/* ingreso del apellido */}
            <label  className="form-label">Apellido</label>
            <input type="text" onChange={(event) => {setLastName(event.target.value)}} className="form-control" value={lastName} placeholder='Ingrese su apellido'   required/>         

          {/* ingreso del correo */}
            <label  className="form-label">Correo</label>
            <input type="email" onChange={(event) => {setEmail(event.target.value)}} className="form-control" value={email} placeholder='Ingrese su correo'  required/>
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

          {/* ingreso de fecha de nacimiento */}
            <label  className="form-label">Fecha de nacimiento</label>
            <input type="date" onChange={(event) => {setBirthDate(event.target.value)}} className="form-control" value={birthDate} required/>       


          {/* boton de registro */}
            <input type="submit" onClick={addUser}  value="Registrarme"/>
            {/* onSubmit={limpiarDatos} */}
        </form>
      </div>
   
    )   
}

export default Register;