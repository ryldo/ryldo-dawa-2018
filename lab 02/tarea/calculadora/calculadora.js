var http = require('http');
var fs = require('fs')
var fun = require('./fun_calculadora')

http.createServer(function(request, response) {
    if(request.method == 'POST') {
        fun.processPost(request, response, function() {
           
            let num1 = parseFloat(request.post.num1) 
            let num2 = parseFloat(request.post.num2)
            let accion = request.post.accion
            let resultado = fun.ejecutarOperacion(num1,num2,accion)
            
            response.writeHead(200, "OK", {'Content-Type': 'text/html'});
            response.write('<script>alert('+resultado+')</script>')
            response.end();
        });
    } 
    else if(request.method == 'GET'){
        fs.readFile('./calculadora.html' , (err, html) => {
            if(err) throw err
            response.writeHead(200, "OK", {'Content-Type': 'text/html'});
            response.write(html)
            response.end()
        })
    }
    else {
        response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        response.end();
    }

}).listen(3000);