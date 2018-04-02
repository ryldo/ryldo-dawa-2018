var express = require('express')
var app = express()
app.use(express.static('public'))

/*app.use(function (req, res, next){
	res.status(404).send("eso no existe")
})*/

app.use(function (err, req, res, next){
	console.error(err.stack)
	res.status(500).send('algo salio mal')
})

app.get('/', function (req, res){
	res.send('hola mundo! en Express:)')
})
app.post('/', function (req,res){
	res.send('llamada POST misma url')
})
app.put('/user', function (req,res){
	res.send('recibimos un PUT en /user')
})
app.delete('/user', function (req,res){
	res.send('recibimos un DELETE en /user')
})
app.listen(3000,function(){
	console.log('aplicacion de ejemplo escuchando en el puerto 3000')
});