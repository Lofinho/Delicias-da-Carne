// NAV BURGUER

const burguer = document.querySelector('.navbar-icon');
const navBar = document.querySelector('#navbar');

burguer.onclick = function () {
  burguer.classList.toggle('active');
  navBar.classList.toggle('active');
};

// SCROLL ANIMATION
let lastScrollTop = 0;
const navbar = document.querySelector('.header-bg');

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-140px';
    burguer.classList.remove('active');
    navBar.classList.remove('active');
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;

  const links = document.querySelectorAll('#show-menu a');

  function activeLinks(link) {
    const altura = window.scrollY;
    const width = window.innerWidth;

    // console.log(width)

    if (width < 800) {
      if (altura < 600) {
        link.classList.remove('ativo');
        links[0].classList.add('ativo');
      } else if (altura < 2400) {
        link.classList.remove('ativo');
        links[1].classList.add('ativo');
      } else if (altura < 8200) {
        link.classList.remove('ativo');
        links[2].classList.add('ativo');
      } else if (altura < 12000) {
        link.classList.remove('ativo');
        links[3].classList.add('ativo');
      }
    } else {
      if (altura < 600) {
        link.classList.remove('ativo');
        links[0].classList.add('ativo');
      } else if (altura < 2000) {
        link.classList.remove('ativo');
        links[1].classList.add('ativo');
      } else if (altura < 4800) {
        link.classList.remove('ativo');
        links[2].classList.add('ativo');
      } else if (altura < 8000) {
        link.classList.remove('ativo');
        links[3].classList.add('ativo');
      }
    }

    console.log(altura);
  }

  links.forEach(activeLinks);
});

// ANIMAÇÃO

if (window.SimpleAnime) {
  new SimpleAnime();
}
