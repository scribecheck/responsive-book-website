/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Search show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Search hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* Login show */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* Login hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    1220: {
        spaceBetween: -32,
    }
  }
});



/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
