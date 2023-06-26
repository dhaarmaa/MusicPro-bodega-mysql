/** 
 * @swagger
 * components:
 *  schemas:
 *     Product:
 *          type: object
 *          required:
 *            - name
 *            - code
 *            - description
 *            - price
 *            - stock
 *          properties:
 *            id:
 *              type: integer
 *              description: El id del producto
 *            name:
 *              type: string
 *              description: El nombre del producto
 *            code:
 *              type: string
 *              description: El codigo del producto
 *            description:
 *              type: string
 *              description: La descripcion del producto
 *            price:
 *              type: integer
 *              description: El precio del producto
 *            stock:
 *              type: integer
 *              description: El stock del producto
*/

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product management
 * /apiV1:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
*/
const express =  require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const url = require('url');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


app.use(cors());
app.use(express.json());

const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bodegamusicpro'
})

// ************** TODO LO RELACIONADO A PRODUCTOS******************
//crear productos
app.post('/create', (req, res) => {
    const name = req.body.name;
    const code = req.body.code;
    const description = req.body.description;
    const price = req.body.price;
    const stock = req.body.stock;

    db.query('INSERT INTO product (name, code, description, price, stock) VALUES (?,?,?,?,?)', [name, code, description, price, stock], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('product values inserted')
        }
    })
})
//listar productos
app.get('/apiV1', (req, res) => {

    db.query('SELECT * FROM product ', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//Actualizar productos
app.put('/update', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const code = req.body.code;
    const description = req.body.description;
    const price = req.body.price;
    const stock = req.body.stock;

    db.query('UPDATE product SET name=?, code=?, description=?, price=?, stock=? WHERE id=?', [name, code, description, price, stock,id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('product updated')
        }
    })
})

//eliminar productos
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM product WHERE id=?', id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//*************TODO LO RELACIONADO CON USUARIO ***********************

//inserción de usuarios
app.post('/createUser', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const birthDate = req.body.birthDate;

    db.query('INSERT INTO user (firstName, lastName, email, password, birthDate) VALUES (?,?,?,?,?)', [firstName, lastName, email, password, birthDate], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('user values inserted')
        }
    })
    
})

//traer usuarios
app.get('/v1/user', (req, res) => {

    db.query('SELECT * FROM user ', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Comparar datos de usuario en la BD
app.post('/compareData', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('data',req.body.email);
    try {
        db.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Error en el servidor' });
          } else {
              console.log(result);
            if (result.length > 0) {

              res.status(200).json({ success: true, message: 'Datos coinciden'});
              
            } else {
              // Los datos no coinciden, usuario no autenticado
              res.status(401).json({ success: false, message: 'Datos no coinciden' });
            }
          }
        });
        
    } catch (error) {
        console.log(error);
    }
  });

  //Comparar datos de usuario en la BD para registro
  // Comparar datos de usuario en la BD
app.post('/compareDataRegister', (req, res) => {
    const email = req.body.email;
    console.log('data', req.body.email);
    try {
        db.query('SELECT * FROM user WHERE email = ? ', [email], (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Error en el servidor' });
          } else {
              console.log(result);
            if (result.length > 0) {
                // Los datos coinciden, usuario autenticado
              res.status(200).json({ success: true, message: 'Datos coinciden'});
              
            } else {
              // Los datos no coinciden, usuario no autenticado
              res.status(401).json({ success: false, message: 'Datos no coinciden' });
            }
          }
        });
        
    } catch (error) {
        console.log(error);
    }
  });
  


  //*************TODO LO RELACIONADO CON SWAGGER***********************


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MusicPro API Docs Bodega",
            version: "1.0.0",
            description: "MusicPro API Information",
            contact: {
                name: "Teen Titans",
                url: "https://TeenTitans.win",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3001",
            },
        ],
    },
    apis: ["./index.js"],
}

const spacs= swaggerJsDoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(spacs)
);


app.listen(3001, () => {
    console.log('Server is running on port 3001')
})