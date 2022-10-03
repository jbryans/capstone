const express = require("express");
const app = express();
const {customers, benifits} = require("./data/data.js")
const { v4: uuidv4 } = require('uuid');
const customerRoutes = require('./routes/customerRoutes')
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 4001;


app.use(express.json());
app.use(customerRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello from node');
});



app.listen(PORT, () => console.log('i am listneing on port ${PORT}'));
