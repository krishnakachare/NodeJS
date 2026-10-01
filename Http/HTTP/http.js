//HTTP verbs/Methods: GET, POST, PUT(Update completely or replace), PATCH(Update partially or a part), DELETE.

const http = require('http');

const hostname = "localhost"; 
const port = "9000";

const server = http.createServer((request,response) => {
    if(request.url == "/"){
        response.end("Landing Page!");
    }else if(request.url == "/blog"){
        response.end("Blog Data!");
    }else if(request.url == "/adddata" && request.method === "POST"){ //Using HTTP Verbs: POST
        //Logic to add some data...
        let str = "";
        request.on("data", (chunk) => {
            str+=chunk;
        })
        request.on("end", () => {
            console.log(str);
        })
        
        response.end("Data has been added");
    }else{
        response.end(http.STATUS_CODES[404]);
    }
});

server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});