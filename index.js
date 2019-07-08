/******Creating a http server using the http module*** */
// request :- send by user to the server
// response:- send my serve to the user
// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.write('Thank you for visiting our website.');
//     res.end();
// })
// console.log('Hitting port 3000');


// server.listen('3000');

/**If I am going to write a script to crawl internet
 * I need to send something in request as well, header, body.
 * If I am building a server I need to write response or
 * I can also write what to expect in request and response accordingly.
 * There can both request and response in same function of code
 */
const http = require('http');
const server = http.createServer(function(req, res){
  if(req.url === '/'){
    res.write("Thanks for choosing online banking");
    res.end();
  } else {
    res.write("404. Page not found");
    res.end();
  }
});

server.listen(8000);

