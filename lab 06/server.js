'use strict'
var express = require('express')
var app     = express()
var http    = require('http').createServer(app)
var io      = require('socket.io')(http)
var port    = process.env.PORT || 3000
var user = require('./models/user')

app.set('view engine','jade')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main')
})

http.listen(port, () => {
    console.log(`Escuchando alicación en el puerto: ${port}`)
})

io.on('connection', (socket) => {
    
    user.show((data) => {
        socket.emit('listar',data)
    })

    socket.on('listar', () => {
        user.show((data) => {
            io.emit('listar',data)
        })
    })

    socket.on('crear', (data) => {
       user.create(data, (user) => {
            io.emit('nuevo', {user, message: 'Se ha creado un nuevo elemento'})
       })
    })

    socket.on('actualizar', (data) => {
        user.update(data, (user) => {
            io.emit('nuevo', {user, message: 'Se ha actualizado un elemento'})
        })
    })

    socket.on('eliminar', (data) => {
        user.delete(data, (rpta) => {
            io.emit('borrado',rpta)
        })
    })
})