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
    });

    AOS.init({
      offset:100,
      easing:"ease",
      duration:1000,
      delay:500
    });