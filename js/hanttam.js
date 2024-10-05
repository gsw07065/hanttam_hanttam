const slide = document.querySelectorAll(".swiper-slide");

/* s0 swiper */
var swiper = new Swiper(".mySwiper", {
  effect:"fade",
  loop:true,
  speed:1500,
  /* autoplay:{
    delay:6000,
  }, */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange:function(){
      for(let i=0; i<3; i++){
        slide[i].querySelector(".m_bg").classList.remove("on");
      }
      slide[this.realIndex].querySelector(".m_bg").classList.add("on");
    }
  }
});

/* s2 swiper */
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 118,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    /* on: {
    slideChange:function(){
      for(let j=0; j<5; j++){
        slide[j].querySelector("a .bestImg").classList.remove("on");
      }
      slide[this.realIndex].querySelector("a .bestImg").classList.add("on");
    }
  } */
});

AOS.init({
  offset:100,
  easing:"ease",
  duration:1000,
  delay:500
});










  //jquery제이쿼리  풀페이지
$('#fullpage').fullpage({
    verticalCentered: true,
    scrollBar: true, // 기본 스크롤 사용
    normalScrollElements: '.scrollable-element',
    afterLoad: function(origin, destination, direction) {
  if ($(".sec4").hasClass("active")) { 
    $.fn.fullpage.setScrollingSpeed(0); // 속도 조정
      $.fn.fullpage.setAllowScrolling(false);
      $("#section3,#section4,#section5,#section6").css("overflowY","scroll");
  } else {
      // 나머지 페이지는 다시 FullPage.js 사용
      $.fn.fullpage.setScrollingSpeed(700);
      $.fn.fullpage.setAllowScrolling(true);
  };
  if ($("#section1,#section3,#section4,#section6").hasClass("active")){
    $("#header a").css({color:"#333"});
    $("#header a").hover(function(){
      $(this).css({color: "#6F8B31"});
    },function(){
      $(this).css({color: "#333"});
    });
    $("#header .logo img").attr("src","images/logo_green.png");
  }else if($("#section5").hasClass("active")){
    $("#header a").css({color:"#333"});
    $("#header a").hover(function(){
      $(this).css({color: "#6F8B31"});
    },function(){
      $(this).css({color: "#333"});
    });
    $("#header .logo img").attr("src","images/logo_white.png");
  }else{
    $("#header a").css({color:"#fff"});
    $("#header a").hover(function(){
      $(this).css({color: "#6F8B31"});
    },function(){
      $(this).css({color: "#fff"});
    });
    $("#header .logo img").attr("src","images/logo_white.png");
  }
}
});