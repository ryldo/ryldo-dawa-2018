const http = require('http')
const url = require('url')
const handler = require('./handler')

http.createServer((req, res) => {
    let url_local = url.parse(req.url).pathname
    handler(url_local, res)
}).listen(3000)