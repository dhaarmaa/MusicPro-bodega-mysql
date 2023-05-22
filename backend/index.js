const express =  require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bodegamusicpro'
})
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
app.get('/producto', (req, res) => {

    db.query('SELECT * FROM product ', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})