//Description: This is the main file of the API. It contains code of express and node.js to create a server and read the JSON file.
const express = require('express')
const app = express()
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
app.get('/', (_req, res) => {
  res.status(200).send('Welcome, you may wanna try /quotes')
});
app.get("/quotes/", (_req, res) => {
    fs.readFile(__dirname + '/' + 'quotes.json', (_err, data) => {
		let quotes = JSON.parse(data);
		let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		res.end(JSON.stringify(randomQuote));
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

