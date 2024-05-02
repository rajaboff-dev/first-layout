const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        430: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },

});


let hamburger = document.getElementById('hamburger')
let navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  console.log('hi')
})