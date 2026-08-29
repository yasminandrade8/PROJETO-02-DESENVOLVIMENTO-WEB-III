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
    '.jpg':     'image/jpg',
    '.png':     'image/png',
    '.webp':    'image/webp',
    '.pdf':     'application/pdf',
    '.mp4':     'video/mp4'
};

const routes = {
    '/': 'index.html',
    '/Disciplinas': 'disciplinas.html',
    '/IHC': 'ihc.html',
    '/Banco_Nao_Relacional': 'nosql.html',
    '/Gestão_Agil': 'gestaoAgil.html',
    '/Tecnicas_de_ProgramacaoII': 'tecProgram.html',
    '/Algebra_Linear': 'algebra.html',
    '/Desenvolvimento_WebIII': 'devWeb.html',
    '/Aluno': 'aluno.html'
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
        var contentType = contentTypes[extension] || 'application/octet-stream';

        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);
    });
}

var callback = function(request, response) {
    var pathname = decodeURIComponent(url.parse(request.url).pathname);

    if (routes[pathname])
        return readFile(response, path.join(publicDir, routes[pathname]));
    
    var file = path.join(publicDir, pathname);

    if (!file.startsWith(publicDir))
        return readFile((response, path.join(publicDir, 'error404.html')));

    readFile(response, file);
}

var server = http.createServer(callback);
server.listen(3000);
console.log(`Servidor iniciado em http://localhost:3000/ ...`)