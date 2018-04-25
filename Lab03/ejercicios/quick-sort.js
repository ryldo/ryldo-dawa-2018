'use strict'

function ordenar(array,final) {
    let pivote = array[0]
    let punt1 = array[1]
    let punt2 = array[array.length-1]
    let array_temp1 = []
    let array_temp2 = []
    var temp1 = null
    var temp2 = null
    let aux = 0

    console.log('Array original: '+array.toString())

      while (aux < array.length-1) {
        if (punt1 > pivote) {
            temp1 = punt1
        }else{
            let index1 = array.indexOf(punt1)
            punt1 = array[index1+1]
            aux++
        }
   
        if (punt2 < pivote) {
            temp2 = punt2
        }else{
            let index2 = array.indexOf(punt2)
            punt2 = array[index2-1]
            aux++
        }
        if (temp1 != null && temp2 != null) {
        let indice1 = array.indexOf(temp1)
        let indice2 = array.indexOf(temp2)
        array[indice1] = temp2
        array[indice2] = temp1
        temp1 = null
        temp2 = null
        punt1 = array[indice1+1]
        punt2 = array[indice2-1]
        aux = aux + 2
        }
    }   
    array.shift()
    if (punt1 === undefined) {
        array.splice(array.indexOf(punt2)+1, 0, pivote)
    }else{
        array.splice(array.indexOf(punt1), 0, pivote)
    }
    array_temp1 = array.slice(0,array.indexOf(pivote))
    array_temp2 = array.slice(array.indexOf(pivote)+1,) 
    if (array_temp1.length < 2) {
       final = final.concat(array)
    }else{
        ordenar(array_temp1,final)
    }
    if(array_temp2.length < 2){
        final = final.concat(array)
    }
    else{
        ordenar(array_temp2,final)
    }

    return final
}

const array = [4,5,6,7,1,2,8,9,3]
var final = []
console.log(ordenar(array,final)) 




