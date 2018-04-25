var http = require('http'),
    fs  = require('fs'),
    parser = require('./parser_var'),
    p = parser.parse_vars,
    identidad = parser.identidad,
    poder = parser.poder,
    fun = require('./ejercicios')


    http.createServer( (req, res) => {
        fs.readFile('./form.html', (err, html) => {
            var html_string = html.toString()
            var respuesta = p(req),
            parametros = respuesta['parametros'],
            valores = respuesta['valores']

            for (let i = 0; i < parametros.length; i++) {
            html_string = html_string.replace('{'+parametros[i]+'}', valores[i]);    
            if(parametros[i] == 'fecha'){
          html_string = html_string.replace('-fecha-', fun.difFechas(valores[i]));
        }
             }

            html_string = html_string.replace('{identidad}', identidad);
            html_string = html_string.replace('{poder}', poder);
            fecha = new Date()
            html_string = html_string.replace('{24horas}', fun.formatoHora(fecha)['formato_24']);
            html_string = html_string.replace('{12horas}', fun.formatoHora(fecha)['formato_12']);
            

            res.writeHead(200,{'Content-Type': 'text'})
            res.write(html_string)
            res.end()
        })
    }).listen(3000)
