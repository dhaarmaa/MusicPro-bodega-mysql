import React, {useEffect, useState} from 'react';
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
    const [validateEmail, setValidateEmail] = useState(0);
    const [emailList, setEmailList] = useState([]);
    //const [userList, setUserList] = useState([]);
    
    const navigate = useNavigate();

    //funcion para limpiar los datos del formulario
    const limpiarDatos = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setBirthDate('');
    }  
    //funcion para obtener y comparar los correos de la base de datos
    const getEmail = () => {
      Axios.get('http://localhost:3001/v1/user')
        .then((res) => {
          const userList = res.data;
          const emailList = userList.map((val) => val.email);
          if(emailList.includes(email)) {
            //console.log('correo ya registrado');
            setValidateEmail(1)
          }
          else{
            //console.log('correo no registrado');
            setValidateEmail(2)
          }
        })
        .catch((err)=>{
          console.log(err);
        });
          //console.log(emailList);

         
        };

        useEffect(() => {
          getEmail();
        }, [email]);

    
    const addUser = (event) => {
      event.preventDefault();

      console.log(firstName, lastName, email, password, passwordConfirm, birthDate);

      //para poder validar la fecha de nacimiento
      const date = new Date(birthDate);
      const year = date.getFullYear();
      //console.log(year);
  
      //para validar que las contraseñas sean iguales
      if (password !== passwordConfirm) {
        Swal.fire(
          'Contraseñas no coinciden', 
          'Por favor ingrese nuevamente la contraseña', 
          'error'
          );
      } 
      //para validar que la fecha de nacimiento sea mayor a 2005
      else if (year > 2005) {
        Swal.fire(
          'Fecha de nacimiento inválida', 
          'Por favor ingrese nuevamente la fecha de nacimiento', 
          'error'
          );
      } 
      //para validar que todos los campos esten llenos
      else if(firstName === '' || lastName === '' || email === '' || password === '' || passwordConfirm === '' || birthDate === ''){
        Swal.fire(
          'Campos vacíos', 
          'Por favor ingrese todos los datos', 
          'error'
          );
      }

      else if (validateEmail === 1){
        Swal.fire(
          'Usuario ya registrado', 
          'Por favor ingrese otro correo', 
          'error'
          );
          navigate('/registro')
      }   
      else {

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
        navigate('/home')
       }
       
        }

    return(
      <div className="register">
          <img className= 'logo' src="../logoWhite.svg" alt="" width="150"/>
          <h1>Registro Bodega</h1>
        
        <form onSubmit={limpiarDatos}>
          {/* ingreso del nombre */}
            <label  className="form-label">Nombre</label>
            <input 
            type="text" 
            onChange={(event) => {setFirstName(event.target.value)}} 
            className="form-control" value={firstName}  
            placeholder='Ingrese su nombre' 
            minLength='3' 
            maxLength='50' 
            required
            />        
          
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
            <input type="submit" onClick={addUser}  value="Registrarme"/>
            <a href ='' onClick={() =>{navigate('/');}}>¿Ya tienes cuenta? Inicia sesión aqui</a>
       
        </form>
      </div>
   
    )   
}

export default Register;