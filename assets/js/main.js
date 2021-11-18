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


// /==================== CLIMA SHOW Y HIDDEN ====================/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
  }
  showMenu('nav-toggle','nav--menu')
  


  /*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => {
    if (document.body.classList.contains(darkTheme)) {
        'dark'   
    } else {
        'light'
    }
}
const getCurrentIcon = () => {
    if (themeButton.classList.contains(iconTheme)) {
        'bx-moon'
    } else {
        'bx-sun'
    }
}
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});