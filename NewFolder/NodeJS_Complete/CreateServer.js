const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req, "HI NODEJS");
    res.write("<h1>HI NODEJS</h1>")
});

const PORT = 1007;
server.listen(PORT, () => {
    console.log(`listning, http://localhost:${PORT}`);
});