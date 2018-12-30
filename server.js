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

// app.get('/cards', function(req, res){
//     res.sendFile(path.join(__dirname, "./public/assets/js/card.js"));
// });

// app.get('/blackjackdealer', function(req, res){
//     res.sendFile(path.join(__dirname, "./public/assets/js/blackJackDealer.js"));
// });

// app.get('/blackjackplayer', function(req, res){
//     res.sendFile(path.join(__dirname, "./public/assets/js/blackJackPlayer.js"));
// });

// app.get('/blackjack', function(req, res){
//     res.sendFile(path.join(__dirname, "./public/assets/js/blackJack.js"));
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });