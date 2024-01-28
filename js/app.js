let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}