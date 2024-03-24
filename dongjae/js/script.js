$(document).ready(function(){
    ///////////공통/////////////
    
   //헤더 스크롤 효과
   $(window).scroll(function(){
       $('header, .ham').addClass('on');

       $('header, .ham').hover(function(){
           $(this).addClass('on')
       }); 
       
       var scT = $(this).scrollTop();
   if(scT < $('header').height()){
       $('header, .ham').removeClass('on')

       $('header .ham').hover(function(){
           $(this).addClass('on')
       },function(){
           $(this).removeClass('on')
       });
   }  
   });
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
           var wid = $(window).width();
           if(wid < 769){
               $(this).children('ul').stop().slideToggle();
               $(this).siblings().children('ul').slideUp();
           }
           
       });

   });
   //메인 비주얼
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
       },
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


   $(".com6_sec02 .office_list >li button").click(function(){
       $(this).parent(".textbox").parent("li").find(".map_wrp").stop().slideToggle()
   })


   

   

   //탑버튼
   $('.topBtn').click(function(){
       $('html, body').stop().animate({scrollTop : 0},600)
   })

   //sub lnb 타이틀 생성
   var lnbT = $('.sub_lnb ul li.active').text();

   $('.sub_lnb .sub_tit').text(lnbT);

   var wid = $(window).width();
   console.log(wid)
   
   $('.sub_lnb .sub_tit').click(function(){

       if(wid < 500){
           $('.sub_lnb .sub_tit').siblings().stop().slideToggle();
           $('.sub_lnb h3').toggleClass('close')
       }
   });

   
});