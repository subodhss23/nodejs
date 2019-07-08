// 1. EventEmitter => Event
// 2. ReadLine Module
// 3. Working with file system
//******Streams, buffer, pipe chaining are pretty important*****/
// 4. working with Readable and Writable Streams
// 5. Pipes and Pipe Chaining


// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin,
//                           output: process.stdout});

// let num1 = Math.floor((Math.random() * 10) + 1 );
// let num2 = Math.floor((Math.random() * 10 ) + 1);
// let answer = num1 + num2;
// rl.question(`What is ${num1} + ${num2}? \n`, function(userInput){
//     if(userInput.trim() == answer){
//       rl.close();
//     } else {
//       rl.setPrompt('Incorrect response please try again \n');
//       rl.prompt();
//       rl.on('line', function(userInput){
//         if (userInput.trim() == answer)
//               rl.close();
//         else{
//           rl.setPrompt(`your answer of ${ userInput } is incorrect try again \n`);
//           rl.prompt();
//         }})
//     }
// });

// rl.on('close', function(){
//   console.log('Now that is the correct answer.');
// });


/*********** EventEmitter ********** */
// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();


// eventEmitter.on('/id:111', function(){
//   console.log('This has to change and I am going to change.');
// })

// eventEmitter.emit('/id:11');

// eventEmitter.emit('/id:111');


/***** Working with filesystem******** */

// const fs = require('fs');

// create a file
// fs.writeFile('example.txt', "Whatever it takes B", function(err){
//   if (err)
//     console.log(err);
//   else{
//     console.log('File successfully created.');
//     fs.readFile('example.txt','utf8', function(err, file){
//       if(err) throw err;
//       else console.log(file);
//     })
//   }
// });

// fs.rename('example.txt','newExample.txt', function(err){
//   if (err) throw err;
//   else console.log('successfully renamed the file.');
// })

// fs.appendFile('nesdf.txtt','this is what is going to be appeneded behind the file', function(err){
//   if (err) console.log(err);
//   else console.log('sucess!!');
// })

// fs.rename('newExample.txt', 'changed.txt', function(err){
//   if (err) console.log(err);
//   else console.log('renamed successfully.');
// })

// fs.unlink('changed.txt', function(err){
//   if (err) console.log(err);
//   else console.log('the file has been removed.')
// })


//creating folder and then file

// fs.mkdir("newwFolder", function(err){
//   console.log('inside fs.mkdir function');
//   if (err) console.log(err);
//   else{
//     fs.writeFile('./newwFolder/newFile.txt', "This is the new file!!", function (err){
//       console.log('file created');
//       if (err) console.log(err);
//       else{
//         fs.rename('/newwFolder/newFile.txt', 'newrenamedFile', function(err){
//           if(err) console.log(err);
//           else('Successfull created folder, file and renamed it!!');
//         })
//       }
//     })
//   }
// })

// fs.unlink('./newwFolder/newFile.txt', function(err){
//   if(err) console.log(err);
//   else{
//     fs.rmdir('newwFolder', function(err){
//       if(err) console.log(err)
//     else  console.log('everything is removed');    })
//   }
// })

// fs.readdir('example', function(err, files){
//   if(err) console.log(err);
//     else {
//       for (let file of files){
//           fs.unlink('./example/' + file, function (err){
//             if(err) console.log(err);
//             else{
//               console.log('Everything worked as they were supposed to.')
//             }
//           })
//       }
//     }
// })


/** *******copying content of file while reading a file ******/
// const fs = require('fs');

// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example1.txt');
// readStream.on('data', function(chunk){
//   writeStream.write(chunk);
// })

//*******  why should one use Streams *******//
// any number of large file can be read and copied to another 
// file by using sreams in nodejs which are present withing file system (fs)


/**Pipes and pipe chaining */
// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt');
// const wrtieStream = fs.createWriteStream('./example1.txt');
// readStream.pipe(wrtieStream);


/**Copying and compressing files with pipes and pipe chainging */
// const fs = require('fs');
// //zlib is used to comporess files
// const zlib = require('zlib');

// //takes data and manipulates data
// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);

