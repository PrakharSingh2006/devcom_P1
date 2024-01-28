var typed=new Typed(".multiple_text",{
    strings:['a web developer','a student','an engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});