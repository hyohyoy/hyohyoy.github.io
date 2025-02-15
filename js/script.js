document.addEventListener('scroll', function(){
  let header = document.querySelector('header');
  header.classList.add('on');

  let hdH = window.scrollY;

  if(hdH < header.offsetHeight) {
    header.classList.remove('on')
  }
})



$(document).ready(function(){
    
    const content = "안녕하세요. \n 끊임없이 성장하는 \n 3년차 웹퍼블리셔 \n 정효경입니다:)";
    const text = document.querySelector(".text");
    let i = 0;
    
    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i >= content.length) {
            clearInterval(typingInterval); // 타이핑이 끝났을 때 setInterval 중단
        }
    }
  let typingInterval = setInterval(typing, 100); // 100ms마다 typing 함수 호출
  
    // setInterval(typing, 200)


  $("header .gnb li").click(function(){
    var sectionId = $(this).data('section');
    var sectionOffset = $('#' + sectionId).offset().top - 85;
    
    $("html, body").animate({scrollTop: sectionOffset}, 600);
    
    // gnb 버튼에 active 클래스 추가/제거
    $("header .gnb li").removeClass("active");
    $(this).addClass("active");
  });
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    $("section").each(function() {
      var sectionId = $(this).attr('id');
      var sectionTop = $(this).offset().top - 600;
      if (scrollPosition >= sectionTop) {
        $("header .gnb li").removeClass("active");
        $("header .gnb li[data-section='" + sectionId + "']").addClass("active");
      }
    });
  });

  let designSlide = new Swiper(".design-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


});

