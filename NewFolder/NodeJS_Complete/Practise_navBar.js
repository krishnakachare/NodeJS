const http = require("http");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/home": res.write("<h1>Welcome to Home Page</h1>"); return res.end(); break;
        case "/men": res.write("<h1>Welcome to Men Page</h1>"); return res.end(); break;
        case "/women": res.write("<h1>Welcome to Women Page</h1>"); return res.end(); break;
        case "/kids": res.write("<h1>Welcome to Kids Page</h1>"); return res.end(); break;
        case "/cart": res.write("<h1>Welcome to Carts Page</h1>"); return res.end(); break;
    };
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NavBar</title>
</head>
<body>
    <head>
        <nav>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </nav>
    </head>
</body>
</html>`);
    return res.end();
});

const PORT = 1007;
server.listen(PORT, () => {
    console.log(`listning, http://localhost:${PORT}`);
});