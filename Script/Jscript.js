$('.menu-item').on('click', function () {
    var elemento = $(this).text()
    if (elemento == 'RESERVAR') {
        var url = 'https://wa.me/51952420156/?text=Buen%20dia,%20quiero%20reservar%20una%20cita.'
        $(this).attr('href', url)
    }else if (elemento == 'PRODUCTOS'){
        alert("Estamos trabajando para brindarle una mejor atención, esperamos su comprensión.")
    }
    //
})

$('.iconreservar').on('click', function () {
    var servicio = $(this).parent().parent().children('.tiposervicio').text()
    //closest('.tservicios').firstchild('.tiposervicio').text())
    var url = 'https://wa.me/51952420156/?text=Buen%20dia,%20quiero%20reservar%20una%20cita%20para:%20*' + servicio + '*'
    $(location).attr('href', url)

})

$('.iconredes').on('click',function(){
    var elemnt = $(this).attr('id')
    var url
    if (elemnt == 'ifacebook'){
        url = 'https://www.facebook.com/Makeupyeny'
    }

    $(location).attr('href', url)
})

