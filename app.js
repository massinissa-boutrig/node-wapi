'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Ceci est un serveur Node.js\n');
  //res.write('Hello world\n');
  console.log('Serveur Node.js version ' + process.version);
  res.send('Serveur Node.js version ' + process.version);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log('Serveur Node.js version ' + process.version);
