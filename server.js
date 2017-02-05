const fs = require('fs');
const http = require('http');

const port = 2000;

const page = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(page);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
