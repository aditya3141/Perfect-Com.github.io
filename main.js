
/*==================== CHANGE BACKGROUND HEADER ====================*/  
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 60) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
    window.addEventListener('scroll', scrollHeader);


// ++++++++++++++++++++++++ Form ++++++++++++++++

// for dark Btn 

const darkBtn = document.querySelector('.darkBtn');
darkBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark_theme');

});

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

    // when user login and register
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');

    // when user login and register
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};


let accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () =>{
    accountForm.classList.add('activee');
    document.querySelector('.activee').style.display = 'inline-block';
};

document.querySelector('.close-form').onclick = () =>{
    accountForm.classList.remove('activee');
};


// swipper section 


var swiper = new Swiper(".home-courses-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

// accordion.forEach(acco =>{
//   acco.onclick = () =>{
//     accordion.forEach(dion => dion.classList.remove('active'));
//     acco.classList.toggle('active');
//   };
// });

// document.querySelector('.load-more .btn').onclick = function(){
//   document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
//     show.style.display = 'block';
//   });
//   document.querySelector('.load-more .btn').style.display = 'none';
// };


