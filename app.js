const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');

const contentTypes = {
    '.html':    'text/html; charset=utf-8',
    '.css':     'text/css; charset=utf-8',
    '.js':      'text/javascript; charset=utf-8',
    '.json':    'application/json; charset=utf-8',
    '.jpeg':    'image/jpeg',
    '.png':     'image/png',
    '.pdf':     'application/pdf',
    '.mp4':     'video/mp4'
};

// Adicionar ou mudar os nomes das rotas!!
const routes = {
    '/': 'index.html',
    '/rota1': 'rota1.html',
    '/rota2': 'rota2.html'
}

function readFile(response, file) {
    fs.readFile(file, function(err, data){
        if(err) {
            response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            return fs.createReadStream(
                path.join(publicDir, 'erro404.html')
            ).pipe(response);
        }

        var extension = path.extname(file).toLowerCase();
        var contentType = contentTypes[extension] || 
    })
}