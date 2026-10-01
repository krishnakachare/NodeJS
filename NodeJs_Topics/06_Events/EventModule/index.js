//Node.js has a built-in module called "Events", where you can create-, fire-, and listen for- your own events.

//To use Event we have to create a class:
const EventEmitter = require('events');

const event = new EventEmitter();

//Example 1: Registering for the event to be fired only one time using once.

// event.on('sayMyName', () => {
//     console.log("I am Iron Man!");
// })
// event.emit('sayMyName'); //Event name: This should always come after defining event with callback.

//Example 2: Create an event emitter instance and register a couple of callbacks.

// event.on('sayMyName', () => {
//     console.log("Hello, Mister Strange!");
// });

// event.on('sayMyName', () => {
//     console.log("I am Doctor Strange.");
// });

// event.on('sayMyName', () => {
//     console.log("Mister Doctor?!");
// });

// event.emit('sayMyName');


//Example 3 : Registering for the event with callback parameter.

event.on('checkPage', (sc,msg) =>{
    console.log((`Status Code is ${sc} and the page is ${msg}`));
})

event.emit('checkPage', 200, 'ok'); //To check if everything is fine or is there any error.



