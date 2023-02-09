/*Description: This is the main file of the API. 
It contains code of express and node.js to create a server using mongoosse.*/

const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config({path: __dirname + '/.env'});

//connecting to database uwing mongoose
const {Schema} = mongoose;
app.use(express.json())
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

//SCHEMA
const sch  = new Schema({
  quote: String,
  movie: String,
  author: String,
});

//MODEL
const Model = mongoose.model('quotes', sch);

const port = 3000
const fs = require('fs')
var cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//routes
app.get('/', (_req, res) => {
  res.status(200).send('Welcome, you may wanna try /quotes')
});
// app.get("/quotes/", async (_req, res) => {
//     fs.readFile(__dirname + '/' + 'quotes.json', (_err, data) => {
// 		let quotes = JSON.parse(data);
// 		let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 		res.end(JSON.stringify(randomQuote));
//     });
// });
app.get('/quotes', async (_req, res) => {
  try{
    //get random quote
      Model.aggregate([{$sample: {size: 1}}], (err, data) => {
          if(err){
              res.status(500).json({message: err.message})
          }
          else{
              res.status(200).json(data)
          }
      })
      
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

