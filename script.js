const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuItems = document.querySelector('.mobile-menu');
const cancelMenu = document.querySelector('#popup-cancel');
const menuItemsList = document.querySelectorAll('.popup-menu-list-item');

hamburgerMenu.addEventListener('click', displayMenu);
cancelMenu.addEventListener('click', closeMenu);

function displayMenu() {
    menuItems.classList.toggle('mobile-menu-view');
}

function closeMenu() {
    menuItems.classList.toggle('mobile-menu-view');
}

for (let i = 0; i < menuItemsList.length; i++) {
    menuItemsList[i].addEventListener('click', () => {
        menuItems.classList.toggle('mobile-menu-view');
    })
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