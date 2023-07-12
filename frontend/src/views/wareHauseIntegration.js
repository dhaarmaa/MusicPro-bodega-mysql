import React, {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const WareHouseIntegration = () => {
    const navigate = useNavigate();

    

//     const myModal = document.getElementById('myModal')
//     const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

    const [productList, setProductList] = useState([])

    const solicitarProductos = () =>{
        Axios.get('https://musicpro.bemtorres.win/api/v1/bodega/producto')
        .then((response) => {
            setProductList(response.data.productos)
        })
    }

    useEffect(() => {
        solicitarProductos();
      }, [])

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
      
        <div className="tableProduct">
      <table className="table table-dark">
            <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Codigo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
         
          {
            productList.map((val, key) => {
              return <tr key={val.id}>
                <th scope="row">{val.id}</th>
                <td>{val.nombre}</td>
                <td>{val.codigo}</td>
                <td>{val.descripcion}</td>
                <td>{val.precio}</td>
                </tr>
            })
          }
            
          
        </tbody>
      </table>
      </div>
        </div>
        
    )
}

export default WareHouseIntegration;