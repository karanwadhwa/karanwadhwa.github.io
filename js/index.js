// Slider

$('.sk-top').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    responsive:{
      0:{
        items:3
      },
      600:{
        items:5,
        autoplayTimeout: 1500
      },
      700:{
        items:6,
        autoplayTimeout: 2000
      },
      1000:{
        items:7,
        autoplayTimeout: 2500
      }
    }
});
$('.sk-bottom').owlCarousel({
    loop:true,
    rtl: true,
    margin:10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    responsive:{
      0:{
        items:3
      },
      600:{
        items:5,
        autoplayTimeout: 1500
      },
      700:{
        items:6,
        autoplayTimeout: 2000
      },
      1000:{
        items:7,
        autoplayTimeout: 2500
      }
    }
});

  // Nav

  const navToggle = document.querySelector('.menu-button');
  const nav = document.querySelector('nav');
  const containerAll = document.querySelector('.container-all');

  navToggle.addEventListener('click', () => {
    containerAll.style.transition = 'transform ease-in-out 350ms';
    document.body.classList.toggle('nav-is-open');
  });

  nav.addEventListener('click', () => {
    containerAll.style.transition = '0ms';
    document.body.classList.remove('nav-is-open');
  });
