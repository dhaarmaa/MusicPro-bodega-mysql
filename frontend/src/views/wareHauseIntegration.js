import react from 'react';
import { useNavigate } from 'react-router-dom';

const WareHouseIntegration = () => {
    const navigate = useNavigate();

    

//     const myModal = document.getElementById('myModal')
//     const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

    return(
        <div>
            <nav className="navbar bg-dark bg-body-tertiary">
                <div className="container-fluid">
        
                    <a className="navbar-brand text-light" onClick={() =>{navigate('/home');}}><img src="logoWhite.svg" alt="Bootstrap" width="60" height="60"/> Familia Bodega </a>
                    <form className="d-flex " >
                        <li>
                            <a href ='' onClick={() =>{navigate('/transport');}} className="text-light">Transporte</a>
                        </li>
                        <li>
                            <a href ='' onClick={() =>{navigate('/wareHouse');}} className="text-light">Bodega</a>
                        </li>
                        <li>
                            <a href ='' onClick={() =>{navigate('/');}} className="text-light">Salir</a>
                        </li>
                    </form>
      </div>
    </nav>
        </div>
        
    )
}

export default WareHouseIntegration;