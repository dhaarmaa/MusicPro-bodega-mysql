
import React, {useState , useEffect} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'



const Home = () => {

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [id, setId] = useState(0);

  const [editar, setEditar] = useState(false);

  const [productList, setProductList] = useState([])
}
//add product
  const addProduct = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      code: code,
      description: description,
      price: price,
      stock: stock
    }).then(() => {
      getProducts();
      limpiarDatos();
      Swal.fire({
        title: "<strong>Registro Exitoso!!</strong>",
        html: "<i>Producto <strong>"+ name +"</strong> fue registrado exitosamente!</i>",
        icon: 'success',
        timer:2500
        
      })
    })
  }

//update product
const update = () => {
  Axios.put('http://localhost:3001/update', {
    id: id,
    name: name,
    code: code,
    description: description,
    price: price,
    stock: stock
  }).then(() => {
    getProducts();
    limpiarDatos();
    Swal.fire({
      title: "<strong>Actualizacion Exitosa!!</strong>",
      html: "<i>Producto <strong>"+ name +"</strong> fue actualizado exitosamente!</i>",
      icon: 'success',
      timer:2500
      
    })
  })
}  

//delete product
const eliminar = (val) => {
  
    Swal.fire({
      title: "<strong>Eliminar</strong>",
      html: "<i>Desea eliminar a <strong>"+ val.name +"</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`, {
          }).then(() => {
            getProducts();
            limpiarDatos();
          });
        Swal.fire(
          'Eliminado!',
          val.name + ' fue eleiminado.',
          'success'
        )
      }
    })

  
} 

const limpiarDatos = ()=>{
      setName("");
      setCode("");
      setDescription("");
      setPrice("");
      setStock("");
      setEditar(false);
}

//change dates
const editarProducto = (val) =>{
    setEditar(true);
    
    setName(val.name);
    setCode(val.code);
    setDescription(val.description);
    setPrice(val.price);
    setStock(val.stock);
    setId(val.id);
}

//get product
  const getProducts = () => {
    Axios.get('http://localhost:3001/apiV1')
    .then((response) => {
      setProductList(response.data);
    })
  }

  useEffect(() => {
    getProducts();
    apiSaludo();
    apiSaldo();
  }, []);

  const [saldo, setSaldo] = useState(0);
  const [saludo, setSaludo] = useState('');

const apiSaludo = () => {
  Axios.get('https://musicpro.bemtorres.win/api/v1/test/saludo')
  .then((response) => {
    setSaludo(response.data.message);
    console.log(response.data);
  })
}

const apiSaldo = ()=>{
  Axios.get('https://musicpro.bemtorres.win/api/v1/test/saldo')
  .then((response) => {
    setSaldo(response.data.saldo);
    console.log(response.data.message);
  })
}

  //consumo de api
  // const apiSaludo = ()=>{
  //   fetch('https://musicpro.bemtorres.win/api/v1/test/saludo').then((response)=>{
  //   console.log(response.json());
  //   })
  // }

  return (
    <div className="container">
      <div className="App">



      </div>
            <div className="card text-center">
        <div className="card-header">
          Gestion Bodega MusicPro
        </div>
        <div className="card-body">
          {/* campo nombre */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre</span>
            <input type="text"
            onChange={(event) => {setName(event.target.value)}} 
            className="form-control" value={name} placeholder="Ingrese Nombre del Producto" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          {/* campo codigo */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Codigo</span>
            <input type="text"
            onChange={(event) => {setCode(event.target.value)}}
            className="form-control" value={code} placeholder="Ingrese Codigo del Producto" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          {/* campo descripcion */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Descripcion</span>
            <input type="text"
            onChange={(event) => {setDescription(event.target.value)}}
            className="form-control" value={description} placeholder="Ingrese Descripcion del Producto" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          {/* campo precio */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Precio</span>
            <input type="number"
            onChange={(event) => {setPrice(event.target.value)}}
            className="form-control" value={price} placeholder="Ingrese Precio del Producto" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>


          {/* campo stock */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Stock</span>
            <input type="number"
            onChange={(event) => {setStock(event.target.value)}}
            className="form-control" value={stock} placeholder="Ingrese Stock del Producto" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>



        </div>
        {/*Botones */}
        <div className="card-footer text-muted">
          {
            editar? 
            <div>
            <button className = "btn btn-warning m-2" onClick={update}>Actualizar</button>
            <button className = "btn btn-danger m-2" onClick={limpiarDatos}>Cancelar</button>
            </div>
            :<button className = "btn btn-dark" onClick={addProduct}>Ingresar producto</button>
          }
        </div>
      </div>
      <div className="tableProduct">
      <table className="table table-striped" >
            <thead>
          <tr>
            <th scope="col" className="custom-header">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Codigo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
         
          {
            productList.map((val, key) => {
              return <tr key={val.id}>
                <th scope="row" className="custom-header">{val.id}</th>
                <td>{val.name}</td>
                <td>{val.code}</td>
                <td>{val.description}</td>
                <td>{val.price}</td>
                <td>{val.stock}</td>

                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" 
                onClick={()=>{
                  editarProducto(val)
                }}
                className="btn btn-info">Editar</button>
                <button type="button"
                onClick={()=>{
                  eliminar(val);
                }}
                className="btn btn-danger">Eliminar</button>
                </div>
                </td>
                </tr>
            })
          }
            
          
        </tbody>
      </table>
    </div>
  )
  
}

export default Home;
