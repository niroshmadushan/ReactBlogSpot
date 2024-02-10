// server.jss
const express = require('express');
const mysql = require('mysql');
const { BOOLEAN } = require('sequelize');
const router =express.Router();
const port = 3001;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'react',
});

connection.connect();
let dta=null;


router.post('/sql', (req, res) => {
    const data=req.body
  const query =`${data.query}`; // Adjust this query based on your table structure
console.log(data)
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
      
    }
  });
});
router.post('/', async (req, res) => {
    const currentDate = new Date();
    const data=req.body;
    const value=[data.value1,data.value2,data.value3,data.value4,data.value5,currentDate,currentDate];
    const newValue=value.filter(Boolean);
   
    const query=`${data.query}`;

   
    console.log("Query :"+query+"  Values : "+newValue )
    connection.query(query, (newValue), (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error inserting data' );
        } else {
          res.status(200).send('Data inserted successfully');
        }
      });


  });

module.exports = router;