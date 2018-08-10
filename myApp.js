
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
app.use('/', (req,res,next) => {
  let method=req.method;
  let path=req.path;
  let ip=req.ip;
  console.log(method + ' ' + path + ' - ' + ip);
  next();
});

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log('Hello World');


/** 2) A first working Express Server */
// app.get('/',function(req,res){res.send('Hello Express');});
//commented out due to challenge #3

/** 3) Serve an HTML file */
app.get('/',function(req,res){res.sendFile(__dirname + '/views/index.html');});


/** 4) Serve static assets  */
app.use('/',express.static(__dirname + '/public'));


/** 5) serve JSON on a specific route */
//app.get('/json',function(req,res){res.json({"message": "Hello json"});});
//commented out due to challenge #6

/** 6) Use the .env file to configure the app */
process.env.MESSAGE_STYLE="uppercase";
app.get('/json', (req,res) => {let message="Hello json"; (process.env.MESSAGE_STYLE=="uppercase") ? message=message.toUpperCase() : message=message; res.json({"message":message});});


/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
