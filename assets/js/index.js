$(function () {

    //para ocular el carousel
    $(document).ready(function () {
        // Verificar el tamaño de la pantalla al cargar la página
        checkScreenSize();

        // Verificar el tamaño de la pantalla cuando se redimensiona
        $(window).resize(function () {
            checkScreenSize();
        });

        // Función para verificar el tamaño de la pantalla y ocultar/mostrar el carousel en consecuencia
        function checkScreenSize() {
            var screenSize = $(window).width();

            if (screenSize < 576) { // Tamaño xs y sm
                $('#carouselExampleIndicators').addClass('d-none');
            } else {
                $('#carouselExampleIndicators').removeClass('d-none');
            }
        }
    });

    //tooltip aplicado
    $(function () {
        $('#enviarCorreo').tooltip()
    })

    $(function () {
        $('#agregarFav').tooltip()
    })


    // Función que se ejecuta al hacer clic en el botón "Enviar por Correo"
    $('#enviarCorreo').on('click', function () {
        alert('El correo fue enviado correctamente...');
    });

    // Función que se ejecuta al hacer clic en el botón "Agregar a favoritos"
    $('#agregarFav').on('click', function () {
        alert('Agregado a favoritos...');
    });


    //Cambiar el color a rojo
    // Función que se ejecuta al hacer doble clic en el título "INGREDIENTES"
    $('#ingredientes').on('dblclick', function () {
        $(this).css('color', 'red');
    });

    // Función que se ejecuta al hacer doble clic en el título "PREPARACIÓN"
    $('#preparacion').on('dblclick', function () {
        $(this).css('color', 'red');
    });



    // Agregar evento clic a los títulos de las tarjetas para alternar la visibilidad del contenido
    $(document).ready(function () {
        $('.card-toggle').on('click', function () {
            $(this).closest('.card').find('.card-content').toggle();
        });
    });



});



