$(document).ready(function(){


    

    window.onload = function(){
        $('.main .sec01 .cont h2').delay(350).animate({opacity:1, paddingTop:0},800)
        $('.main .sec01 .cont h3').delay(400).animate({opacity:1, paddingTop:0},800)
        $('.main .sec01 .cont p').delay(450).animate({opacity:1, paddingTop:0},800)
        $('.main .sec01 .cont h6').delay(500).animate({opacity:1, paddingTop:0},800)
        $('.main .sec01 .cont img').delay(550).animate({opacity:1, paddingTop:0},800)
    }

    new fullpage('#fullpage', {
     //options here
     autoScrolling:true,
     scrollHorizontally: true,
     navigation: true,
     navigationPosition: 'right',
     navigationTooltips: ['MAIN','PRODUCT', 'ABOUT','NOTICE','VIDEO'],
     showActiveTooltip: true,
     slidesNavigation: true,
     scrollOverflow: true,
     normalScrollElements: '.scrollable-content',
     dragAndMove: true,
     onLeave: function(origin, destination, direction){
        if(destination.index == 0){
            $('header, .ham').removeClass('on')
            $('#fp-nav').removeClass('on')
            $('header, .ham').hover(function(){
                $('header, .ham').addClass('on')
            },function(){
                $('header, .ham').removeClass('on')
            });
        }
        if(destination.index == 1){
            $('header, .ham').addClass('on')
            $('header, .ham').hover(function(){
                $('header, .ham').addClass('on')
            });
            $('#fp-nav').removeClass('on')
         }
         if(destination.index == 2){
            $('#fp-nav').removeClass('on')
            $('header, .ham').addClass('on')
         }
         if(destination.index == 3){
             $('#fp-nav').addClass('on')
             $('header, .ham').addClass('on')
         }
         if(destination.index == 4){
             $('#fp-nav').removeClass('on')
             $('header, .ham').addClass('on')
         }
         
         
     }
     
 });
 var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 4000,
        disableOnInteraction :false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop : true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<li><span class="' + className + '">0' + (index + 1) + "</span></li>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
});
$('.start').click(function(){
    swiper.autoplay.start ();
    return false;
}); 
$('.pause').click(function(){
    swiper.autoplay.stop ();
    return false;
}); 
    $('.start').click(function(){
        $('.pause').css('display','block')
        $('.start').css('display','none')
        swiper.autoplay.start ();
        return false;
        
    }); 
    $('.pause').click(function(){
        $('.pause').css('display','none')
        $('.start').css('display','block')
        swiper.autoplay.stop ();
        return false;
    }); 
    

    //sec01 탭메뉴
    $('.sec01 .right > div').hide().eq(0).show();


    $('.left li').click(function(){
        var num = $(this).index();

        console.log(num)
        $('.right .right_desc').eq(num).show().siblings().hide();
    })//click

    $('.product_img li').hover(function(){
       
        img = $(this).children('img').attr('src')
       console.log(img)
        $('.imgArea a > div').children('img').attr({ 'src' : img }).fadeIn(1000)
        
    })


    //공통

   //gnb
    $('header').hover(function(){
        $('header, .ham').addClass('on');

        $('header .gnb').hover(function(){
            $('.lnb_bg').show()
        },function(){
            $('.lnb_bg').hide()
        });
        $('header .gnb > li').hover(function(){
            $(this).children('.lnb').stop().show();
        },function(){
            $(this).children('.lnb').stop().hide();
        });
    },function(){
        $('header, .ham').removeClass('on')
    });

    $('header .tnb .lang > li').click(function(e){
        e.preventDefault();
        $('.lang_sub').toggle();
        
        
    });

    $('.lang_sub > li').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
    });

    
    $('.ham').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('on')
        $('.nav_bg').fadeToggle()

        $('.nav_bg').click(function(){
            $('.nav_bg').fadeOut()
            $('nav').removeClass('on')
            $('.ham').removeClass('active')
        });

        $('nav > ul > li').click(function(){
            $(this).children('ul').stop().slideToggle();
            $(this).siblings().children('ul').slideUp();
        });

    });


    
    
    

    
    
//미디어쿼리 스크립트
    function mediaQ(){

        var windowWidth = $(window).width();
        if(windowWidth < 800){

            //메인페이드
            var num_l = ($(".right_desc .textArea .product_img li").length) + 1
            var slider_l = $(".right_desc .textArea .product_img li").eq(0).html()
            $(".right_desc .textArea .product_img").append('<li>'+slider_l+'</li>')
        
            setInterval(function(){
                num_l = num_l - 1
                if( num_l == 0 ){
                    $(".right_desc .textArea .product_img li").css({ 'display':'block' })
                    num_l = ($(".right_desc .textArea .product_img li").length) + 1
                }
                $(".right_desc .textArea .product_img li").eq(num_l).fadeOut()
            },2000);


            //패딩값 조절
            var productH = $('.sec01 .right .right_desc .textArea .product_img li img').height() + 15;
            var sec1B = $('.sec01 .right .right_desc .textArea .product_img li img').height() + 180;


            $('.sec01 .right .right_desc .textArea').css('padding-top',productH)
            $('.sec01 .textArea a').css('top',sec1B)
            //패딩값 조절 끝
            
                
           
            


        }
    }
    

});