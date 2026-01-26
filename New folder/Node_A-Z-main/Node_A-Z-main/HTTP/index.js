//Creating server is also a part of core module i.e., http Module
//To access web pages of any web application, we need a web server. The web server will handle all the http requests for web application.

const http = require('http');
const fs = require('fs');

const hostname = "localhost"; //localhost - 127.0.0.1
const port = "4500";

//To create server:
//http.createServer() method includes request and response parameters which is supplied by Node.js. The request object can be used to get information about the current HTTP request. The response object is used to send a response for a current HTTP request. 
const server = http.createServer((request,response) => {

    //Routing
    console.log("URL: ", request.url); //used for routing.

    const data = fs.readFileSync(`${__dirname}/APIs/api.json`, "utf-8");
    const objData = JSON.parse(data);

    if(request.url == "/"){
        response.end('<html> <body> <h1> Landing Page! </h1> </body> </html>');
    }else if(request.url == "/about"){
        response.end('<html> <body> <h1> About Us! </h1> </body> </html>');
    }else if(request.url == "/contact"){
        //response.write('<html> <body> <h1> Contact Us! </h1> </body> </html>'); //Similar to response.end() but then we need to mention response.end() again without content to respond.
        response.end('<html> <body> <h1> Contact Us! </h1> </body> </html>');
    }else if(request.url == "/api"){
            //console.log("API: ", data);
            response.writeHead(200, {"Content-Type": "application/json"})
            response.end(objData[2].name);
        //response.end('<html> <body> <h1> Hello from API! </h1> </body> </html>');
    }else{
        //response.writeHead(404, {"Content-Type":"text/html"}); //To set status same as response.statusCode below. And to change the document type. The changed document will be shown by: browser-network-file-Header-Response Header-Content-Type.
        response.end('<html> <body> <h1> Page does not exist! </h1> </body> </html>');
    }
    //console.log("Header: ", request.headers); //Give info about the Host.

    //If we don't use response.statusCode the status will be pending and if user enter an invalid address it will keep loading the page.
    //response.statusCode = 200; //200 is for ok status. Value can also be: Informational response: 100-199, Successful response: 200-299, Redirects: 300-399, Client Errors: 400-499, Server errors: 500-599.
    //By default the status is ok.

    // response.setHeader('Content-Type','text/html'); //If the response from the HTTP server is supposed to be displayed as HTML, we should include an HTTP header with the correct Content-Type.
    
    //response.end('<html> <body> <h1> Server Connection sucess :) </h1> </body> </html>')
});

//To know what is requested we use server.listen(port,hostname, () => {})
server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});