$(document).ready(function() {
    $('.input-group input').val("");
    $(".menuBtn").click(function(){
        $(".secondBar").toggleClass("pRotate");
        $(".thirdBar").toggleClass("nRotate");
        $(".firstBar").toggleClass("hide");
        $(".fourthBar").toggleClass("hide");
        $('.menuScreen').toggleClass('displayBlock');
        $('body').toggleClass('stopScroll');

    })

    $('.input-group input').focus(function(){
        $(this).siblings().addClass('focused');
    })

    $('.input-group input').focusout(function(){
        var text_val = $(this).val();
        if(text_val === ""){
            $(this).siblings().removeClass('focused');
        }
        else{
            $(this).siblings().addClass('focused');
        }
        
    })
   
});






$(window).scroll( function() {

    
        var wScroll = $(this).scrollTop();
        //console.log(wScroll);
    
    
        // $('.topContainer').css({
        //     'transform': 'translate(0px , -'+ wScroll / 22 +'% )'
        // });

        if (screen.width > 640){
            $('.topBottom').css({
                'transform': 'translate(0px , -'+ wScroll / 30 +'% )'
            });
        
            $('.midLeft').css({
                'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
            });
        
            $('.midBottom').css({
                'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
            });  
        
            $('.bottomRight').css({
                'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
            });
        
            $('.bottomBottom').css({
                'transform': 'translate(0px , -'+ wScroll / 40 +'% )'
            });
        }
    
    
});
