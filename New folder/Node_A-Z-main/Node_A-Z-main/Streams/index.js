//Node.js Streams

//Streams (flow) are objects that let you read data from a source or write data to a destination in continous fashion. In Node.js there are 4 types of streams: 1.Readable 2.Writable 3.Duplex(R+W) 4.Transform(Type of duplex).

//Now, each type of stream is an EventEmitter instance and throws several events at different instance of times: data,end,error,finish.

//In simpl words, streaming is listening to music or watching video in 'real time' instead of downloading a file to your computer.

//A stream is a sequence of bytes used to hold file data.

//This will give us the same response but the load on server is very very less, this will make much more sence in really big files.

//Let's read a file in streaming file.
const fs = require('fs');
const http = require('http');

const server = http.createServer();

// server.on('request', (request, response) => {
    //Not a streaming way:
    // fs.readFile('stream.txt', (err,data) => {
    //     if(err) return console.log(err);
    //     response.end((data.toString()));
    // })
    
    //Streaming way:
//     const readStream = fs.createReadStream("stream.txt");
//     readStream.on('data', (chunckData) => {
//         response.write(chunckData);
//     });  //data here is an event which is gettong fired.
//     readStream.on('end', () => { //end here is an event which is gettong fired.
//         response.end();
//     });
//     readStream.on('error', (err) => { //error here is an event which is gettong fired.
//         console.log("Error: ",err);
//         response.end("File not found");
//     })
// });

//It can be done using very short code as well. This can be done by stream.pipe() method. It is used to take a readable stream and connect it to a writable stream. Let's see:

server.on('request', (request, response) => {
const readStream = fs.createReadStream("stream.txt");
readStream.pipe(response);
})

server.listen('8500', 'localhost');
