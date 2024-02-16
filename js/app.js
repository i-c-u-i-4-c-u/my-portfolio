
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};
menu.addEventListener('click', mobileMenu);


//close mobile menu when clicking on a menu item

const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <=768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);