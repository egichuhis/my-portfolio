const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuItems = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', displayMenu);

function displayMenu() {
    menuItems.classList.remove('mobile-menu-view');
    
}

// const mobileMenu = document.querySelector('.mobile-menu');
// let menuOpen = false;
// hamburgerMenu.addEventListener('click', () => {
//     if (!menuOpen) {
//         hamburgerMenu.classList.add('open');
//         menuOpen = true;
//     } else {
//         hamburgerMenu.classList.remove('open');
//         menuOpen = false;
//     }
//     mobileMenu.classList.toggle('open');
//     return menuOpen;
// });
// const reviewPage = document.querySelectorAll('.nav-item');
// for (let i = 0; i < reviewPage.length; i += 1) {
//     reviewPage[i].addEventListener('click', () => {
//         hamburgerMenu.classList.toggle('open');
//         mobileMenu.classList.toggle('open');
//     });
// }