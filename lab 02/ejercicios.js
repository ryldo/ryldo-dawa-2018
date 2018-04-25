function formatoHora(hora) {
    let horas = hora.getHours()
    let minutos = hora.getMinutes()
    let segundos = hora.getSeconds()

    let turno = 'AM'

    if (horas > 12) {
        turno = 'PM'
    }
    if (minutos < 10) {
        minutos = '0'+minutos
    }

    let hora_12 = horas % 12

    let formato_24 = horas + ':' + minutos + ':'+ segundos
    let formato_12 = hora_12 + ':' + minutos + ':' + segundos +' '+ turno

    return {
        formato_24: formato_24,
        formato_12: formato_12
    }
}

function difFechas(fecha) {
    nowDate = new Date()
    fecha = new Date(fecha)
    var diferencia = Math.abs(fecha.getTime() - nowDate.getTime());
    var dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    return dias
}

module.exports = {
    formatoHora:formatoHora,
    difFechas:difFechas
}