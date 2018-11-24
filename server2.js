// BASE SETUP
// ==============================================

const express = require('express');
const app = express();
const port = process.env.PORT = 5000;
const path = require('path');

//var port = process.env.PORT = 5000;

// create instace of router

app.get('/test', function(req,res){
  res.send('Hello World');  
});

//.get('/', function(req, res) {
  //  res.send('home page should be here');  
//});

//apply routes to app

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

//start server in port.
app.listen(port);