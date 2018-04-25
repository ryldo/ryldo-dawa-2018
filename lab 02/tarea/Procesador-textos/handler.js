const fs = require('fs')

function renderHTML(path , res) {
    fs.readFile(path , (err, html) => {
        if(err) throw err
        res.write(html)
        res.end()
    })
}

function handler(url, res) {
    
        switch (url) {
            case '/index':
                renderHTML('./index.html',res)
                break;
            case '/script':
                renderHTML('./script.js',res)
            break;
            case '/nosotros':
                renderHTML('./vistas/nosotros.html',res)
            break;
            default:
                res.write('<h1>Página no encontrada</h1>')
                res.end()
                break;
        }
}

module.exports = handler
