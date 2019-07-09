const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//**Asynchronous vs. Synchronous */
// eventEmitter.on('event', function(a, b){
//   setImmediate( function(){
//     console.log('this happens asynchronously');
//   });
// });

// eventEmitter.emit('event', 'a', 'b');


/** Handling events only once ***/
let m = 0;
eventEmitter.on('event', function(){
  console.log(++m);
});

eventEmitter.emit('event');
eventEmitter.emit('event');