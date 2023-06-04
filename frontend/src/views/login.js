import React from 'react';
import '../login.css';

const Login = () => {
    return(
        <div>
            <div>
                <div className="login-box">
                    <img className='avatar' src="../logoWhite.svg" alt="Logo MusicPro" />
                    <h1>Login Bodega</h1>
                    <form>
                        {/* //Username */}
                        <label for="username">Correo</label>
                        <input type="text" placeholder="Ingrese su correo" required/>
                        <div class="invalid-feedback">
                            correo invalido
                        </div>  

                        {/* //Password */}
                        <label for="password">Contraseña</label>
                        <input type="password" placeholder="Ingrese su contraseña" required/>

                        {/* boton de login */}
                        <input type="submit" value="Ingresar"/>
                    </form>
                </div>    

            </div>
        </div>
    )   
}

export default Login;
