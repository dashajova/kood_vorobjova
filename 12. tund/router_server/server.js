const http = require('http');
const fs = require('fs');
const path = require('path');

function serveFile(path, contentType, res) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-type': 'text/plain'});
            return res.end('Error faili laadimisega');
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        serveFile('index.html', 'text/htnl', res);
    } else if (req.url === '/about') {
        serveFile('about.html', 'text/html', res);
    } else if (req.url.match('')) {
        var cssPath = path.join(__dirname, req.url);
        serveFile(cssP)
    }
})
