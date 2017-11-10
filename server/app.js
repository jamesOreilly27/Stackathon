const express = require('express');
const app = express();
const chalk = require('chalk');  
const volleyball = require('volleyball'); 
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path'); 
const PORT = 1337; 

//MiddleWare
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '..', 'public'))); 

//Backend api routes will come from index.js in this folder 
app.use('/api', routes);

//All Routes that haven't been hit by this point will send the index.html file
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
app.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${PORT}`))) 