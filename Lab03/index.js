
var param_replacer = require('./lib/replace')
var _ = require('underscore')

var lista = [1,2,3,4,5,6]

var employeesCollection = [
    {
        id:1,
        name:'Rodolfo',
        designation:'Asesor',
        salary:25000
    },
    {
        id:2,
        name:'Pablito',
        designation:'Asesor',
        salary:35000
    },
    {
        id:3,
        name:'Ryldo',
        designation:'Admin',
        salary:45000
    },
    {
        id:4,
        name:'Alan',
        designation:'Development',
        salary:30000     
    },
    {
        id:5,
        name:'Ada',
        designation:'Programmer',
        salary:35000
    }
]





var cargos = _.map(employeesCollection, (employee) => {
    return {nombre: employee.name , cargo: employee.designation}
}) 




 var cargos2 = employeesCollection.map((employee) => {
    return employee.name
    return {nombre: employee.name, cargo: employee.designation}
}) 



console.log(_.pluck(employeesCollection,'name'))
console.log(cargos2)  


_.each(lista, function (item) {
    console.log(item)
}) 



 var empleadosAsesor = _.chain(employeesCollection)
.filter((employee) => {
    return employee.designation === 'Asesor'
})
.map((employee) => {
    return {name: employee.name, id: employee.id}
})
.value()

console.log(empleadosAsesor) 


var objetivo = '%hello% %world%! -- %world% %hello%!'
var idioma = 'es'
var reemplazos = {
    'en':{
        'hello':'Hello',
        'world':'World'
    },
    'es':{
        'hello':'Hola',
        'world':'Mundo'
    }
}

var resultado = param_replacer.replace(objetivo, reemplazos[idioma])

console.log(resultado)

var param_encontrados = objetivo.match(/%(.*?)%/g)

var reg = /%(.*?)%/g


console.log(reg.exec(objetivo)) 

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = param_replacer
    }
    exports.param_replacer = param_replacer
}else{
    root.param_replacer = param_replacer
}