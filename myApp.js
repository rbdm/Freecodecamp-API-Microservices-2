
var express = require('express');
var bodyParser = require('body-parser');
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
let parsedUrl=bodyParser.urlencoded({extended:false});

app.use(parsedUrl, (req,res,next) => {
  next();
});


/** 1) Meet the node console. */
console.log('Hello World');


/** 2) A first working Express Server */
// app.get('/', function(req,res) {
//   res.send('Hello Express');
// });
// solution#2 (above) commented out due to challenge #3


/** 3) Serve an HTML file */
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/views/index.html');
});


/** 4) Serve static assets  */
app.use('/',express.static(__dirname + '/public'));


/** 5) serve JSON on a specific route */
// app.get('/json', (req,res) => {
//  res.json({"message": "Hello json"});
// });
// solution#5 (above) commented out due to challenge #6


/** 6) Use the .env file to configure the app */
//process.env.MESSAGE_STYLE = "uppercase";
//moved to <key>.env

app.get('/json', (req,res) => {
  let message = "Hello json"; 
  (process.env.MESSAGE_STYLE == "uppercase") ? 
  message = message.toUpperCase() : message = message;
  res.json({"message":message});
});


/** 7) Root-level Middleware - A logger */
// place it before all the routes !
// solution#7 moved to row 6


/** 8) Chaining middleware. A Time server */
app.get('/now', (req,res,next) => {
  req.time = new Date().toString();
  next();
}, (req,res) => {
  res.json({"time":req.time});
});


/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req,res) => {
  let word = req.params.word;
  res.json({"echo":word});
});


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get('/name', (req,res) => {
  let firstname = req.query.first;
  let lastname = req.query.last;
  let name = firstname + ' ' + lastname;
  res.json({"name":name});
});


/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
// solution#11 moved to row 16


/** 12) Get data form POST  */
app.post('/name', (req, res) => {
  let firstname = req.body.first;
  let lastname = req.body.last;
  let name = firstname + ' ' + lastname;
  res.json({"name":name});
});


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
