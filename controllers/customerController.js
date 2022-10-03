const {customers, benifits} = require("../data/data")
const pool = require("../sql/connection")
const mysql = require("mysql")


//list
const list =  (req, res) => {
    pool.query(`SELECT * FROM customers`, (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        res.json(rows)
      });
    // res.json(customers);
};

//show one
const show =  (req, res) => {
    pool.query(`SELECT * FROM customers WHERE id = ${req.params.id}`, (err, row) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        res.json(row)
      });
    // res.json(customers);
};


//create one
// const create = (req, res) => {
//     const { body } = req;

//     let newUser = {
//         ... body,
//         id: uuidv4()
//     };

//     customers.push(newUser);

//     res.send(newUser);
   
// };
const create = (req, res) => {
    const {first_name, last_name, home_address, sqft} = req.body;
    pool.query(
    `INSERT INTO customers (first_name, last_name, home_address, sqft)
    VALUES ("${first_name}","${last_name}","${home_address}","${sqft}")`, 
    (err, row) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        res.json(row)
      });
   
};

//update one
const update = (req, res) => {  
    let sql = "UPDATE ?? SET ? WHERE ?? = ?"
    sql = mysql.format(sql, ["customers", req.body, "id", req.params.id])
    pool.query(
        sql, 
        (err, row) => {
            if (err) {
              console.log({ 'message': 'Error occurred: ' + err })
              return res.status(500).send('An unexpected error occurred')
            }
            res.json(row)
          });
       
}

//remove
const remove =(req, res) => {
    pool.query(`DELETE FROM customers WHERE id = ${req.params.id}`, (err, row) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        res.json(row)
      });
   
}


module.exports = {
    list,
    show,
    create,
    update,
    remove
}