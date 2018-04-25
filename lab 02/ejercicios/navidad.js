var fecha_actual = new Date()

navidad = new Date("12/25/2018")

var diferencia = Math.abs(navidad.getTime() - fecha_actual.getTime());
var dias = Math.ceil(diferencia / (1000 * 3600 * 24));
console.log('Faltan: '+dias+' para navidad :)')