function getDias(mes) {
    var meses = [1,2,3,4,5,6,7,8,9,10,11,12]
    
    if(!meses.includes(mes) || isNaN(mes))
     {
         return false
     }
    else{
    
    var dias = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo']
    let date = new Date()
    let primer_dia = new Date(date.getFullYear(), mes-1 , 1)
    let ultimo_dia = new Date(date.getFullYear(), mes , 0)
    return obj = {
        primer_dia : primer_dia.getDate(),
        ultimo_dia : ultimo_dia.getDate(),
        nombre_primer : dias[primer_dia.getDay()],
        nombre_ultimo : dias[ultimo_dia.getDay()]
        }
    }  
}

let res = getDias(1) // colocar como parámetro el mes a buscar.

if (res) {
    let con = 'El mes seleccionado empieza un '+res.nombre_primer+' '+res.primer_dia + ' y termina un '+res.nombre_ultimo+' '+res.ultimo_dia
    console.log(con)
}else{
    console.log('Parámetros incorrectos')
}
