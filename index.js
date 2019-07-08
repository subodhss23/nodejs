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
// const http = require('http');
// const server = http.createServer(function(req, res){
//   if(req.url === '/'){
//     res.write("Thanks for choosing online banking");
//     res.end();
//   } else {
//     res.write("404. Page not found");
//     res.end();
//   }
// });

// server.listen(8000);


//************** */ serving static files with http and 
//********** */ file system modules

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req, res){
//     if(req.url === '/'){
//       // reading static files with readStream
//     const readStream = fs.createReadStream('./example.json');
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     //  piping/sending to res obj with readStream
//     // res is a writeable stream
//     readStream.pipe(res);
//     } else {
//       res.write('Not a valid path');
//       res.end();
//     }
    
// }).listen(3000);

// const lodash = require('lodash');

// let example = lodash.fill([1,2,3,5,5],"banana",1, 3);
 
// console.log(example);

/**** Semantic versioning*/

//^4.17.11
//major.minor.patch
//what does carrot symbolize ^ ??
//I do not want you to make major update
