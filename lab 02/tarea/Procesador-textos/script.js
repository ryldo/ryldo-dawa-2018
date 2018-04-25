$(document).ready(inicio)
    
function inicio() {
        $("#btn-extraer").click(function(){
            let text = texto.value
            
            let inicio = text.slice(0, texto.selectionStart)
            let seleccionado = text.slice(texto.selectionStart, texto.selectionEnd)
            let fin = text.slice(texto.selectionEnd, text.length)

            if (seleccionado == '') {
                alert('Seleccione un texto.')
                return
            }

            texto.value = inicio+fin
        })

       $("#btn-espacios").click(function(){
            let text = texto.value
            let resultado = text.replace(/\s+/gi,'')
            texto.value = resultado
        })

        $("#btn-capitalizar").click(function(){
            let regEx = /([a-z]*)([^a-z]*)([\s\S]*)/i;
            let matchArray = regEx.exec(texto.value);
            let resultado = '';
            while (matchArray) {
                resultado += matchArray[1].charAt(0).toUpperCase() + matchArray[1].slice(1).toLowerCase() + matchArray[2];
                temp = matchArray[3];
                if (matchArray[3]) {
                    matchArray = regEx.exec(matchArray[3]);
                } else {
                    matchArray = false;
                }
            }
            if (window.temp) {
             resultado += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase()
            }
            texto.value = resultado
        })

        $("#btn-minusculas").click(function() {
            let text = texto.value
            let seleccionado = text.slice(texto.selectionStart, texto.selectionEnd)
            
            if (seleccionado == '') {
                alert('Seleccione un texto.')
                return
            }

            let inicio = text.slice(0, texto.selectionStart)
            let fin = text.slice(texto.selectionEnd, text.length)

            let resultado = seleccionado.toLowerCase()
            texto.value = (inicio + resultado + fin).trim()
        })

        $("#btn-mayusculas").click(function() {
            let text = texto.value
            let seleccionado = text.slice(texto.selectionStart, texto.selectionEnd)

            if (seleccionado == '') {
                alert('Seleccione un texto.')
                return
            }

            let inicio = text.slice(0, texto.selectionStart)
            let fin = text.slice(texto.selectionEnd, text.length)

            let resultado = seleccionado.toUpperCase()
            texto.value = (inicio + resultado + fin).trim()
        })

        $("#btn-contar").click(function(){
            //let text = texto.value.replace(/\s+/gi,'')
            let text = texto.value
            let seleccionado = text.slice(texto.selectionStart, texto.selectionEnd)

            if (seleccionado == '') {
                let temp = text.replace(/\s+/gi,'')
                alert('El texto tiene: '+temp.length+' caracteres.')
                texto.value = text.trim()
                texto.focus()
            }else{
                let temp = seleccionado.replace(/\s+/gi,'')
                alert('El texto seleccionado tiene: '+temp.length+' caracteres.')
                texto.value = text.trim()
                texto.focus()
            }               
        }) 
    }
