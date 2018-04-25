var querystring = require('querystring');

function processPost(request, response, callback) {
    var queryData = "";
    if(typeof callback !== 'function') return null;

    if(request.method == 'POST') {
        request.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });

        request.on('end', function() {
            request.post = querystring.parse(queryData);
            callback();
        });

    } else {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end();
    }
}

function ejecutarOperacion(num1, num2, accion) {
    switch (accion) {
            case 'sumar':
            return num1 + num2
            break;
            case 'restar':
            return num1 - num2
            break;
            case 'multiplica':
            return num1 * num2
            break;
            case 'divide':
               try {
                return num1 / num2
               } catch (error) {
                 return 'Error en la operación: '+ error  
               } 
            break;
        default:
        return 'error'   
        break;
    }
}

module.exports = {
    processPost,
    ejecutarOperacion
}