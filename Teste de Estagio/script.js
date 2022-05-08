

$(document).ready(function(){

    $('#resume').on('click', function() {
        
        $('#mais').toggleClass('isActive') 
       
             if ($('#mais.isActive').length) {
                $('#mais').fadeIn(250);
                $('#verMais').hide();
                $('#pontos').hide();
                
             }else  {
                $('#mais').fadeOut(250);
                $('#verMais').show();
                $('#pontos').show();
             }
        });
    })

$(document).ready(function(){

    $('#discbtn').on('click', function(){
        $('#discussao1').fadeOut(100)
        $('#discussao2').fadeIn(300)
    })
})
$(document).ready(function(){

    $('#enviarbtn').on('click', function(){
        $('#discussao2').fadeOut(100)
        $('#discussao3').fadeIn(300)
    })
})
$(document).ready(function(){

    $('#disc3btn').on('click', function(){
        $('#discussao3').fadeOut(100)
        $('#discussao2').fadeIn(300)
    })
})
$(document).ready(function(){

    $('#assunto2').on('click', function(){
        $('#assunto2').fadeOut(100)
        $('#assunto2-1').fadeIn(300)
    })
})
$(document).ready(function(){

    $('#assunto2-1').on('click', function(){
        $('#assunto2-1').fadeOut(100)
        $('#assunto2').fadeIn(300)
    })
})

$(document).ready(function(){
    $('#discussao2').hide()
})
$(document).ready(function(){
    $('#discussao3').hide()
})
$(document).ready(function(){
    $('#assunto2-1').hide()
})