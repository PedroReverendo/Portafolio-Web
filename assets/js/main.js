/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
     // We add the class (active-link) when we are on top of a section 
     const sections = document.querySelectorAll('section[id]')

     function scrollActive(){
         const scrollY = window.pageYOffset
     
         sections.forEach(current =>{
             const sectionHeight = current.offsetHeight,
                 sectionTop = current.offsetTop - 50,
                 sectionId = current.getAttribute('id')
     
             if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                 document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
             }else{
                 document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
             }
         })
     }
     window.addEventListener('scroll', scrollActive);
     
     
     /*=============== CHANGE BACKGROUND HEADER ===============*/
     
     
     // function color_Header(){
     //     const header = document.querySelector('active-link')
     //     // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
     //     if(scrollY >= 550){
     //         header.classList.add('color_Header'); 
     //     }
     //     else {
     //         header.classList.remove('color_Header')
     //     }
     // }
     // window.addEventListener('scroll', color_Header)
     
     
     function scrollHeader(){
         const header = document.getElementById('header')
         // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
         if(scrollY >= 50){ // 200 for more large
             header.classList.add('scroll-header'); 
         }
         else {
             header.classList.remove('scroll-header')
         }
     }
     window.addEventListener('scroll', scrollHeader)
     

/*==================== SWIPER CAROUSEL ====================*/

var swiper = new Swiper(".discover__container", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    /*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(L => L.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio');
    }
}
linkPortfolio.forEach(L => L.addEventListener('click', activePortfolio));