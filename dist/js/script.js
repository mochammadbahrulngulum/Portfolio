// navbar fixed

window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-Top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }
    else {
        header.classList.remove('navabr-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klick di luar hamburger
window.addEventListener('click', function(e){
    if(e. target != hamburger && e. target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }

});

// dark mode

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked){
        html.classList.add('dark');
    }
    else {
        html.classList.remove('dark');
    }
});

// pindahkan mode sesuai tema asal

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  };
  