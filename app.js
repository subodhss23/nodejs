// 1. EventEmitter => Event
// 2. ReadLine Module
// 3. Working with file system


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

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();


// eventEmitter.on('/id:111', function(){
//   console.log('This has to change and I am going to change.');
// })

// eventEmitter.emit('/id:11');

// eventEmitter.emit('/id:111');

const fs = require('fs');

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

fs.mkdir("newwFolder", function(err){
  console.log('inside fs.mkdir function');
  if (err) console.log(err);
  else{
    fs.writeFile('newFile.txt', "This is the new file!!", function (err){
      console.log('file created');
      if (err) console.log(err);
      else{
        fs.rename('newFile.txt', 'newrenamedFile', function(err){
          if(err) console.log(err);
          else('Successfull created folder, file and renamed it!!');
        })
      }
    })
  }
})