import React, { useState } from 'react';
import '../login.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //get user
    const getUser = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:3001/compareData', { email: email, password: password })
        .then((response) => {
            if (response.data.success) {
            // Los datos coinciden, realiza las acciones correspondientes
            console.log('Datos coinciden');
            window.location.href = "/home";
            } else {
            // Los datos no coinciden, realiza las acciones correspondientes
            console.log('Datos no coinciden');
            }
        })
        .catch((error) => {
        // Maneja el error de la solicitud
        console.log(error);
        });
    }




    return(
        <div>
            <div>
                <div className="login-box">
                    <img className='avatar' src="../logoWhite.svg" alt="Logo MusicPro" />
                    <h1>Login Bodega</h1>
                    <form>
                        {/* //Username */}
                        <label>Correo</label>
                        <input type="text" onChange={(event) => {setEmail(event.target.value)}} placeholder="Ingrese su correo" value={email} required/>
                        <div className="invalid-feedback">
                            correo invalido
                        </div>  

                        {/* //Password */}
                        <label>Contraseña</label>
                        <input type="password" onChange={(event) => {setPassword(event.target.value)}} placeholder="Ingrese su contraseña" value={password} required/>

                        {/* boton de login */}
                        <input type="submit" onClick={getUser} value="Ingresar"/>
                        <a href ='' onClick={() =>{
                            navigate('/registro');}}
                        >¿No tienes cuenta? Registrate aqui</a>
                    </form>
                    
                </div>    
            
            </div>
        </div>
    )   
}

export default Login;
