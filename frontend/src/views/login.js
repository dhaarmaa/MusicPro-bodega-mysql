import React from 'react';
import '../login.css';

const Login = () => {
    return(
        <div>
            <div>
                <div className="login-box">
                    <img className='avatar' src="../logoWhite.svg" alt="Logo MusicPro" />
                    <h1>Login Bodega MusicPro</h1>
                    <form action="">
                        {/* //Username */}
                        <label for="username">Correo</label>
                        <input type="text" placeholder="Ingrese su correo"/>

                        {/* //Password */}
                        <label for="password">Contraseña</label>
                        <input type="password" placeholder="Ingrese su contraseña"/>

                        <input type="submit" value="Ingresar"/>
                    </form>
                </div>    

            </div>
        </div>
    )   
}

export default Login;
