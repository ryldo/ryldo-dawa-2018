$(document).ready(() => {
    var socket = io()

    socket.on('listar', (data) => {
        data = JSON.parse(data)
        data.forEach((item) => {
            fill(item,socket)
        })
        /* for (let i = 0, j = data.length ; i < j; i++) {
            fill(data[i],socket)
        } */
    })

    socket.on('borrado', (data) => {
        $('#'+data).remove()
        socket.emit('listar') // nuevito
        return alert('Se eliminó correctamente el item con id:'+data)
    })

    socket.on('nuevo', (data) => {
        fill(data.user,socket)
        alert(data.message)
        animate(data.user._id)
    })

    $('#formulario').submit((e) => {
        e.preventDefault()
        let data = {
            _id : $('#_id').val(),
            first_name : $('#first_name').val(),
            last_name : $('#last_name').val(),
            timezone : $('#timezone').val(),
            locale : $('#locale').val(),
            profile_pic : $('#profile_pic').val(),
            mayor_edad : $('#mayor_edad').val()
        }
        if(data._id == ''){
            $('#_id').focus()
            return alert('Debe ingresar un ID!')
        }if(data.first_name == ''){
            $('#_id').focus()
            return alert('Debe ingresar un nombre!')
        }
        
        let accion = 'crear'
        if ($('.warning').length > 0) {
            accion = 'actualizar'
            }
        $('.warning').removeClass('warning')
        
        socket.emit(accion, data)
        socket.emit('listar')//nuevito

        $('#formulario').trigger('reset')

        return true
    })
})

var fill = (data,socket) => {
    if ($('#'+data._id).length == 0) {
        var $row = $('<tr id= "'+data._id+'">')
        $row.append('<td>'+data._id+'</td>')
        $row.append('<td>'+data.first_name+'</td>')
        $row.append('<td>'+data.last_name+'</td>')
        $row.append('<td>'+data.timezone+'</td>')
        $row.append('<td>'+data.locale+'</td>')
        $row.append('<td>'+data.profile_pic+'</td>')
        let aux = data.mayor_edad == true ? 'SI' : 'NO'
        $row.append('<td>'+ aux +'</td>')
        $row.append('<td><button class="btn btn-success btn-sm" name="btnAct">Editar</button></td>')
        $row.append('<td><button class="btn btn-danger btn-sm" name="btnEli">Eliminar</button></td>')
        $row.data('data',data)
        $row.find('[name=btnAct]').click(function (){
            var data = $(this).closest('tr').data('data')
            $('#_id').val(data._id)
            $('#first_name').val(data.first_name)
            $('#last_name').val(data.last_name)
            $('#timezone').val(data.timezone)
            $('#locale').val(data.locale)
            $('#profile_pic').val(data.profile_pic)
            $("#mayor_edad > option[value='"+data.mayor_edad+"']").attr('selected',true)
            $("#mayor_edad > option[value='"+!data.mayor_edad+"']").attr('selected',false)
            $('.warning').removeClass('warning')
            $(this).closest('tr').addClass('warning')
        })
        $row.find('[name=btnEli]').click(function (){
            let _id = $(this).closest('tr').attr('id')
            if(confirm('¿Continuar con la eliminación del registro?')){
                socket.emit('eliminar',_id)
            }
        })
        $('table tbody').append($row) 
    }
    else{
        let $row = $('#'+data._id)
        $row.find('td:eq(1)').html(data.first_name)
        $row.find('td:eq(2)').html(data.last_name)
        $row.find('td:eq(3)').html(data.timezone)
        $row.find('td:eq(4)').html(data.locale)
        $row.find('td:eq(5)').html(data.profile_pic)
    }
}

function animate(id) {
    let animacion = function(){
        $("#"+id).fadeTo(500, .1)
                 .fadeTo(500, 1)
                 .css('background', 'black')
    }
    var parpadeo = setInterval(animacion, 1000);
    setTimeout(() => {
        clearInterval(parpadeo)
    }, 4000);
}