//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//Middleware for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static('public'));

//Routes for Pages
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/styles', function(req, res){
    res.sendFile(path.join(__dirname, "./public/assets/css/style.css"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });