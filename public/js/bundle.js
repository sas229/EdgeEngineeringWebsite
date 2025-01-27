// Any javascript added here will be executed on every page.
;
const isFixed = document.querySelector(".header-fixed")
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight || 60;

function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

let toggleHeaderClass = function() {
  scrollpos = window.scrollY;
  if (scrollpos >= headerHeight) {
    header.classList.add("header-scrolled")
  } else {
    header.classList.remove("header-scrolled")
  }
};

if (isFixed) {
  window.addEventListener('scroll', debounce(toggleHeaderClass, 200))
}

;
const body = document.querySelector('body');
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu-mobile');
const hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger) {
  menuTrigger.onclick = function () {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  };
}
