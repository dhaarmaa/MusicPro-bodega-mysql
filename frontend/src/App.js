import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const [productList, setProductList] = useState([])
//agregar producto
  const addProduct = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      code: code,
      description: description,
      price: price,
      stock: stock
    }).then(() => {
      getProducts();
      alert('Producto agregado');
    })
  }
//traer productos
  const getProducts = () => {
    Axios.get('http://localhost:3001/producto')
    .then((response) => {
      setProductList(response.data);
    })
  }

  getProducts();

  return (
    <div className="container">
      <div className="App">
        <div className="datos">
          {/* campo nombre */}
          <label htmlFor=""> Nombre</label>
          <input type="text"
          onChange={(event) => {setName(event.target.value)}} /><br />

          {/* campo codigo */}
          <label htmlFor="">Codigo</label>
          <input type="text"
          onChange={(event) => {setCode(event.target.value)}} /><br />

          {/* campo descripcion */}
          <label htmlFor="">Descripcion</label>
          <input type="text"
          onChange={(event) => {setDescription(event.target.value)}} /><br />

          {/* campo precio */}
          <label htmlFor="">Precio</label>
          <input type="number"
          onChange={(event) => {setPrice(event.target.value)}} /><br />

          {/* campo stock */}
          <label htmlFor="">Stock</label>
          <input type="number"
          onChange={(event) => {setStock(event.target.value)}} /><br />


          <button className = "btn btn-dark" onClick={addProduct}>Ingresar producto</button>
        </div>

        <div className="list">
    

          {
            productList.map((val, key) => {
              return <div className="">{val.name}</div>
            })
          }
        </div>

      </div>
    </div>
  );
}

export default App;
