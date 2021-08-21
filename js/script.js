
$(function() {
    'use strict';
    
    
    // adjust header height
    var myheader = $('.header');
    myheader.height($(window).height());
    
    $(window).resize( function() {
          myheader.height($(window).height());
          
          // put the slider in center
        $('.bx-viewport').each(function(){
            $(this).css('paddingTop', ( $(window).height() - $('.slider div').height() ) / 2 ) ;
        });      
    });
    
    
    // links add active class
    $('.links li a').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
              // the slider stings
    $('.slider').bxSlider( {
              auto: true,
              stopAutoOnClick: true,
              pager: true 
    });
    
    
    // smooth scroll To Div
    $('.links li a').click(function() {
        
        $('html , body').animate(
            { scrollTop: $('#' + $(this).data('value') ).offset().top },1000);
    });

    
    // Our auto Slider fadeIn/fadeOut 
    ( function autoslider() {
        
        $(".auto_Slider .active").each(function(){
            
            if( !$(this).is(":last-child") ){
                $(this).delay(2000).fadeOut(500,function(){
                    $(this).removeClass('active');
                    $(this).next().addClass('active').fadeIn(1000);
                    autoslider();   });
            }
            else{
                $(this).delay(2000).fadeOut(500,function(){
                    $(this).removeClass('active');
                    $('.auto_Slider div').eq(0).addClass('active').fadeIn(1000);
                    autoslider();   });
            }
               
        });
        
    } () );
    
    // Trigger MixItUP Selector
            $('.containMix').mixItUp();
            
    //
        $('.shuffle li').click(function(){
            $(this).addClass('selected').siblings().removeClass('selected');
        });
    
    // Trigger NiceScroll
        $('html').niceScroll({ cursorcolor: '#1abc9c' ,
                               cursorwidth:'10px' ,
                               cursorborder:'1px solid #1abc9c'
                               });
         

});

